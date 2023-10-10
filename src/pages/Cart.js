import React, { useState, useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import CartItems from "../components/cart/cartItems/CartItems";
import CartTotal from "../components/cart/cartTotal/CartTotal";
import CartEmpty from "../components/cart/cartEmpty/CartEmpty";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
const Cart = () => {
  const user = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null;
  const items = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
  console.log(user);
  const { t, i18n } = useTranslation();
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/cart/myCart", headers });
  };
  const { isLoading, data } = useQuery("cart-page", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Hero
            isBigHero={false}
            isSmallHero={true}
            isMediumHero={false}
            img={heroImg}
            title="عربة التسوق"
          />
          <div className="container py-5">
            {user && data.data.data.itemsDetails.length && (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartItems user={user} items={data.data.data.itemsDetails} />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal user={user} total={data.data.data.total} />
                </div>
              </div>
            )}
            {user && !data.data.data.itemsDetails.length && (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartEmpty />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal />
                </div>
              </div>
            )}
            {!user && items && (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartItems items={items} />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal />
                </div>
              </div>
            )}
            {!user && !items && (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartEmpty />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
/**
 *
 */
