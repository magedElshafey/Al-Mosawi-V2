import React, { useState } from "react";
import style from "./cartItems.module.css";
import deleteIcon from "../../../assets/delete-svgrepo-com(2).png";
const CartItems = () => {
  const cartItems = window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [];
  const [items, setItems] = useState(cartItems);
  const handleDeleteItems = (id) => {
    const newData = items.filter((item) => item.id !== id);
    setItems(newData);
    window.localStorage.setItem("cart", JSON.stringify(newData));
  };
  return (
    <div>
      <p className="mx-0 mt-0 p-0 mb-3 fs36">عربة التسوق</p>
      <p className="mx-0 mt-0 p-0 mb-3 roboto fs22">
        لديك عدد {items.length} منتجات
      </p>
      <div className={`p-2 ${style.mainContainer}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`py-4 px-2 d-flex justify-content-between align-items-center flex-column flex-md-row gap-3 gap-md-0  mb-5 ${style.card}`}
          >
            <div className="d-flex align-items-center gap-3">
              <img
                alt="product/img"
                loading="lazy"
                src={item.img}
                className={style.img}
              />
              <p className={`m-0 p-0  fw-bold ${style.textTitle}`}>
                {item.title}
              </p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <p className="mx-0 mt-1 mb-0 p-0 fw-bold whiteGreen fs18">
                {item.price}$
              </p>
              <img
                onClick={() => handleDeleteItems(item.id)}
                alt="delete/icon"
                loading="lazy"
                src={deleteIcon}
                className={`${style.deleteIcon} pointer`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
