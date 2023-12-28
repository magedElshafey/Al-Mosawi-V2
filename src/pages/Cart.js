import React, { useState, useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import CartItems from "../components/cart/cartItems/CartItems";
import CartTotal from "../components/cart/cartTotal/CartTotal";
import CartEmpty from "../components/cart/cartEmpty/CartEmpty";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { addAllProductToCart } from "../Redux/cart";
import toast from "react-hot-toast";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  const [fetch, setFetch] = useState(false);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const user = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null;
  useEffect(() => {
    if (user) {
      setFetch(true);
    } else {
      setFetch(false);
    }
  }, [user]);
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/cart/myCart", headers });
  };
  const { isLoading } = useQuery("cart-page", fetchData, {
    enabled: fetch,
    onSuccess: (data) => {
      if (data.data.status) {
        dispatch(addAllProductToCart(data.data.data.itemsDetails));
      } else {
        toast.error("error");
      }
    },
  });

  // handle total price when the user not login
  const totalPrice = cartItems.reduce((acc, product) => {
    acc += product.price_after_discount
      ? +product.price_after_discount
      : +product.price;
    return acc;
  }, 0);
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
            isStatic={true}
            title={i18n.language === "ar" ? "عربة التسوق" : "cart"}
          />
          <div className="container py-5">
            {user && cartItems.length ? (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartItems user={user} items={cartItems} />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal user={user} total={totalPrice} />
                </div>
              </div>
            ) : null}
            {user && !cartItems.length ? (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartEmpty />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal user={user} total={totalPrice} />
                </div>
              </div>
            ) : null}
            {!user && cartItems.length ? (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartItems user={null} items={cartItems} />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal total={totalPrice} user={null} />
                </div>
              </div>
            ) : null}
            {!user && !cartItems.length ? (
              <div className="row gap-5">
                <div className="col-12 col-md-7 mb-3 mb-md-0">
                  <CartEmpty />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <CartTotal total={totalPrice} user={null} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
