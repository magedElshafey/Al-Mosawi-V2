import React from "react";
import style from "./cartTotal.module.css";
import BTN from "../../utils/btn/BTN";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos } from "react-icons/md";
const CartTotal = ({ total }) => {
  const cartItems = JSON.parse(window.localStorage.getItem("cart"));
  const [t] = useTranslation();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  return (
    <div className={`p-3 ${style.mainContainer}`}>
      <p className="mb-3 book">{t("coponIntro")}</p>
      <p className="mb-3 fs">
        تحتاج الي تسجيل الدخول لتحصل علي الكوبوبن الخاص بك
      </p>
      <div className={style.inpContainer}>
        <input
          disabled={!isLogin}
          className="inp book"
          type="text"
          placeholder={t("addCopon")}
        />
        <button disabled={!isLogin} className={`book ${style.btn} `}>
          {t("activate")}
        </button>
      </div>
      <div className="mt-5">
        <h3 className="fw-bolder shamel fs22 mb-3">{t("orderSummary")}</h3>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="m-0 p-0 fw-bold shamel">{t("totalPrice")}</p>
          <p className="m-0 p-0 fw-bold shamel">{total}$</p>
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <p className="m-0 p-0 fw-bold shamel ">{t("netPrice")}</p>
          <p className="m-0 p-0 fw-bold shamel ">{100 + 10}$</p>
        </div>
        <button className={`mt-5 book ${style.btnTwo}`}>
          <MdOutlineArrowBackIos size={20} />
          <span className="mt-1">{t("checkOut")}</span>
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
