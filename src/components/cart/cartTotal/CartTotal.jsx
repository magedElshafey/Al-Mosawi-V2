import React from "react";
import style from "./cartTotal.module.css";
const CartTotal = () => {
  const cartItems = JSON.parse(window.localStorage.getItem("cart"));
  const totalPrice = cartItems.reduce((acc, product) => {
    acc += +product.price;
    return acc;
  }, 0);
  return (
    <div>
      <p className="fs20 mb-3">اذا كان لديك كوبون خصم يمكنك استخدامة</p>
      <div className={style.inpContainer}>
        <input className="inp" type="text" placeholder="أضف كود الخصم هنا" />
        <button className={style.btn}>تفعيل</button>
      </div>
      <div className="mt-5">
        <h3 className="fw-bolder fs36 mb-5">ملخص الطلب</h3>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="m-0 p-0 fw-bold fs18">المجمع الفرعي</p>
          <p className="m-0 p-0 fw-bold fs18">{totalPrice}$</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0 p-0 fw-bold fs18">الاجمالي</p>
          <p className="m-0 p-0 fw-bold fs18">{totalPrice + 10}$</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
