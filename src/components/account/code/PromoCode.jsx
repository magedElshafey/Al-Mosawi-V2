import React from "react";
import style from "./promoCode.module.css";
import giftTwo from "../../../assets/giftTwo.png";
const PromoCode = () => {
  return (
    <div
      className={`my-5 d-flex flex-column align-items-center gap-3 ${style.mainContainer} p-3 mx-auto`}
    >
      <img
        alt="gift/img"
        loading="lazy"
        src={giftTwo}
        className={style.mainImg}
      />
      <p className="roboto fs22 m-0 p-0">إستخدم الكود في شراء خدماتنا</p>
      <p
        className={`m-0 fs36 fw-bold  text-white d-flex justify-content-center align-items-center text-uppercase ${style.promoCodeContainer}`}
      >
        mfsdffdsd
      </p>
      <p className="fs24 fw-bold m-0 p-0 green">و استمتع بخصم 20%</p>
    </div>
  );
};

export default PromoCode;
