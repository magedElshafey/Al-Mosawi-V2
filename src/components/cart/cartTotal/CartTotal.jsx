import React, { useState } from "react";
import style from "./cartTotal.module.css";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { request } from "../../utils/axios";
import { useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CartTotal = ({ total, user }) => {
  const [payment_method, setPaymentMethod] = useState("myfatoorah");
  const cartItems = JSON.parse(window.localStorage.getItem("cart"));
  const { i18n, t } = useTranslation();
  const { isLogin } = useSelector((state) => state.authSlice);
  const [copon, setCopon] = useState("");
  const [coponValue, setCoponValue] = useState(0);
  const [coponSent, setCoponSent] = useState(false);
  const navigate = useNavigate();
  const codeFromUser = localStorage.getItem("codeFromCourses")
    ? JSON.parse(localStorage.getItem("codeFromCourses"))
    : null;
  const afilatorCode = localStorage.getItem("afilatorCode")
    ? JSON.parse(localStorage.getItem("afilatorCode"))
    : null;
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
    if (codeFromUser !== null) {
      headers.code = codeFromUser;
      headers.payment_method = payment_method;
    }
    console.log("this is the yser", user);
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
        if (payment_method === "myfatoorah") {
          window.location.href = data.data.Data.invoiceURL;
        }
      },
    }
  );
  const handleCheckout = async () => {
    if (codeFromUser && afilatorCode && !payment_method) {
      toast.error(
        i18n.language === "ar"
          ? "يجب عليك اختيار طريقة الدفع"
          : "you need to choose payment method"
      );
    } else {
      if (isLogin) {
        const data = {};
        await mutateCheckout(data);
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <div className={`p-3 ${style.mainContainer}`}>
      <p className="mb-3 book">{t("coponIntro")}</p>
      <p className="mb-3 fs">
        {i18n.language === "ar"
          ? " تحتاج الي تسجيل الدخول لتحصل علي الكوبوبن الخاص بك"
          : "You need to log in to get your coupon"}
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
        {codeFromUser ||
          (afilatorCode && (
            <div className="mb-3">
              <label htmlFor="payment" className="fw-bold d-block mb-2">
                {i18n.language === "ar" ? "طريقة الدفع" : "payment method"}
              </label>
              <select
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="inp"
                id="payment"
              >
                <option disabled={true} value="">
                  {i18n.language === "ar"
                    ? "اختر طريقة الدفع"
                    : "choose your payment method"}
                </option>
                <option value="myfatoorah">my fatora</option>
                <option value="wallet">wallet</option>
              </select>
            </div>
          ))}
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
