import React from "react";
import style from "./promoCode.module.css";
import giftTwo from "../../../assets/giftTwo.png";
const PromoCode = () => {
  return (
    <div
      className={`m-3 d-flex flex-column align-items-center gap-2 ${style.mainContainer} p-3 mx-auto`}
    >
      <img
        alt="gift/img"
        loading="lazy"
        src={giftTwo}
        className={style.mainImg}
      />
      <p className="m-0 p-0">إستخدم الكود في شراء خدماتنا</p>
      <p
        className={`mx-0 my-2 mb-0  shamel fs22 fw-bold  text-white d-flex justify-content-center align-items-center text-uppercase ${style.promoCodeContainer}`}
      >
        mfsdffdsd
      </p>
      <p className="shamel fs18 fw-bold mx-0 mb-0 mt-2 p-0 green">
        و استمتع بخصم 20%
      </p>
    </div>
  );
};

export default PromoCode;
