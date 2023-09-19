import React from "react";
import style from "./cartEmpty.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const CartEmpty = () => {
  const [t] = useTranslation();
  return (
    <div className="pt-5 mt-5 d-flex flex-column align-items-center justify-content-center gap-2">
      <BsFillCartCheckFill className={style.cart} size={40} />
      <p className="fs24 m-0 p-0 green">{t("emptyCart")}</p>
      <Link to="/" className={`fs18 ${style.link}`}>
        {t("goHome")}
      </Link>
    </div>
  );
};

export default CartEmpty;
