import React, { useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import CartItems from "../components/cart/cartItems/CartItems";
import CartTotal from "../components/cart/cartTotal/CartTotal";
import CartEmpty from "../components/cart/cartEmpty/CartEmpty";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
const Cart = () => {
  const { i18n } = useTranslation();
  const items = JSON.parse(localStorage.getItem("cart"));

  const user = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null;
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/cart/myCart", headers });
  };
  const { isLoading, data, refetch } = useQuery("cart-page", fetchData, {
    enabled: false,
    onSuccess: (data) => {
      if (!data.data.data.id) {
        return;
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify(data.data.data.itemsDetails)
        );
      }
    },
  });
  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  // handle total price when the user not login
  const totalPrice = items.length
    ? items.reduce((acc, product) => {
        acc += product.price_after_discount
          ? +product.price_after_discount
          : +product.price;
        return acc;
      }, 0)
    : 0;
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
            title={i18n.language === "ar" ? "عربة التسوق" : "cart"}
          />
          <div className="container py-5">
            {user && data?.data?.data?.itemsDetails?.length && (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartItems
                    user={user}
                    items={data?.data?.data?.itemsDetails}
                  />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal user={user} total={data?.data?.data?.total} />
                </div>
              </div>
            )}
            {user && !items.length && (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartEmpty />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal user={user} total={0} />
                </div>
              </div>
            )}
            {!user && items.length && (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartItems user={null} items={items} />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal total={totalPrice} user={null} />
                </div>
              </div>
            )}
            {!user && !items.length && (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartEmpty />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal total={totalPrice} user={null} />
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
