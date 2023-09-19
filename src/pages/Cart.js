import React from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import CartItems from "../components/cart/cartItems/CartItems";
import CartTotal from "../components/cart/cartTotal/CartTotal";
import CartEmpty from "../components/cart/cartEmpty/CartEmpty";
const Cart = () => {
  const items = JSON.parse(window.localStorage.getItem("cart"));
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        title="عربة التسوق"
      />
      <div className="container py-5">
        {items ? (
          <div className="row gap-5">
            <div className="col-12 col-md-7 mb-3 mb-md-0">
              <CartItems items={items} />
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <CartTotal />
            </div>
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};

export default Cart;
