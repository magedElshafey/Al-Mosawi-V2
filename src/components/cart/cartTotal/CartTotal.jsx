import React, { useState } from "react";
import style from "./cartTotal.module.css";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { request } from "../../utils/axios";
import { useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";
const CartTotal = ({ total, user }) => {
  const cartItems = JSON.parse(window.localStorage.getItem("cart"));
  const { i18n, t } = useTranslation();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const [copon, setCopon] = useState("");
  const [coponValue, setCoponValue] = useState(0);
  const [coponSent, setCoponSent] = useState(false);
  const handleCopon = (data) => {
    const headers = {
      user,
    };
    return request({
      url: "/cart/addCoupon",
      headers,
      method: "post",
      data,
    });
  };
  const { isLoading, mutate } = useMutation(handleCopon, {
    onSuccess: (data) => {
      toast.success(
        i18n.language === "ar"
          ? "تم تفعيل الكوبون بنجاح"
          : "copon activated succesfully"
      );
      setCopon("");
      setCoponSent(true);
      setCoponValue(data.data.data.discount);
    },
  });
  const handleClick = () => {
    if (!copon.trim()) {
      return false;
    } else {
      const data = { coupon: copon };
      mutate(data);
    }
  };
  const handleDelte = () => {
    const headers = {
      user,
    };
    return request({
      url: "/cart/removeCoupon",
      headers,
    });
  };
  const { isLoading: deleteCopon, refetch } = useQuery(
    "delete-copon",
    handleDelte,
    {
      enabled: false,
      onSuccess: () => {
        setCoponValue(0);
        setCoponSent(false);
      },
    }
  );
  const checkout = () => {
    const headers = {
      user,
    };
    return request({
      url: "/orders/create",
      headers,
      method: "POST",
    });
  };
  const { isLoading: loadingCheckout, mutate: mutateCheckout } = useMutation(
    checkout,
    {
      onSuccess: (data) => {
        window.location.href = data.data.Data.invoiceURL;
      },
    }
  );
  const handleCheckout = async () => {
    const data = {};
    await mutateCheckout(data);
  };
  return (
    <div className={`p-3 ${style.mainContainer}`}>
      <p className="mb-3 book">{t("coponIntro")}</p>
      <p className="mb-3 fs">
        تحتاج الي تسجيل الدخول لتحصل علي الكوبوبن الخاص بك
      </p>
      <div className={style.inpContainer}>
        {!coponSent && (
          <input
            disabled={!isLogin}
            className="inp book"
            type="text"
            placeholder={t("addCopon")}
            value={copon}
            onChange={(e) => setCopon(e.target.value)}
          />
        )}
        {coponSent ? (
          <button
            onClick={refetch}
            disabled={!isLogin}
            className={`book  ${style.btn} p-3 mx-auto ${
              deleteCopon ? style.op : null
            } `}
          >
            {i18n.language === "ar" ? "حذف الكوبون" : "delete copon"}
          </button>
        ) : (
          <button
            onClick={handleClick}
            disabled={!isLogin}
            className={`book ${style.btn} ${isLoading ? style.op : null} `}
          >
            {t("activate")}
          </button>
        )}
      </div>
      <div className="mt-5">
        <h3 className="fw-bolder shamel fs22 mb-3">{t("orderSummary")}</h3>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="m-0 p-0 fw-bold shamel">{t("totalPrice")}</p>
          <p className="m-0 p-0 fw-bold shamel">{total}$</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="m-0 p-0 fw-bold shamel">
            {i18n.language === "ar" ? "الخصم" : "disscount"}
          </p>
          <p className="m-0 p-0 fw-bold shamel">{coponValue}$</p>
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <p className="m-0 p-0 fw-bold shamel ">{t("netPrice")}</p>
          <p className="m-0 p-0 fw-bold shamel ">{total - coponValue}$</p>
        </div>
        <button
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
          className={`mt-5 book ${style.btnTwo}`}
        >
          <MdOutlineArrowBackIos size={20} />
          <span>{t("checkOut")}</span>
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
