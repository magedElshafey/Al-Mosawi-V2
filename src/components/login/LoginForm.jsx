import React, { useState } from "react";
import style from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { request } from "../../components/utils/axios";
import Spinner from "../utils/Spinner/Spinner";
import toast from "react-hot-toast";
const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
  const user = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null;
  const lang = i18n.language;
  const sendCartItems = async () => {
    const res = await fetch(
      "https://almosawi.admin.technomasrsystems.com/api/cart/preOrder",
      {
        method: "POST",
        headers: {
          user,
          "Content-Type": "application/json",
          lang,
        },
        body: JSON.stringify({
          cart: cartItems,
        }),
      }
    );
    const data = await res.json();
    if (data.status) {
      console.log("request sent");
    } else {
      console.log("this is the res", data);
    }
    return data;
  };

  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const handleSendMsg = (data) => {
    return request({ url: "/auth/login", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(handleSendMsg, {
    onSuccess: (data) => {
      if (data?.data.status) {
        toast.success(
          i18n.language === "en"
            ? "you are loggin successfulyy"
            : "تم تسجيل دخولك بنجاح"
        );
        sendCartItems();
        setAccount("");
        setPassword("");
        localStorage.setItem("userId", JSON.stringify(data.data.data.id));
        localStorage.setItem("isLogin", JSON.stringify(true));
        if (data.data.data.tikmill) {
          navigate("/forex-account/details");
        } else {
          navigate("/account");
        }
        localStorage.setItem(
          "tickmillUser",
          JSON.stringify(data.data.data.tikmill)
        );
      }
    },
    onError: () => {
      toast.error(
        i18n.language === "en"
          ? "there is an error occurred , please try again"
          : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
      );
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    if (account.trim() === "" || password.trim() === "") {
      return false;
    } else {
      const userData = { account, password };
      mutate(userData);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-3 container">
          <div className="mb-4">
            <label htmlFor="email" className="d-block fw-bold mb-1 shamel ">
              {t("emailTwo")}
            </label>
            <input
              onChange={(e) => setAccount(e.target.value)}
              value={account}
              className={`inp ${style.inpWidth}`}
              type="email"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="d-block fw-bold mb-1 shamel">
              {t("pass")}
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={`inp ${style.inpWidth}`}
              type="password"
              id="password"
            />
          </div>
          <div className={`mb-4 align-items-center  mb-3 d-flex gap-5 `}>
            <div>
              <input
                type="checkbox"
                id="rem"
                className={`p-0 my-0 mx-2  ${style.checkBox}`}
              />
              <label htmlFor="rem" className={` fw-bold  shamel `}>
                {t("remember")}
              </label>
            </div>
            <Link to="/forget" className={`fw-bold shamel  ${style.links}`}>
              {t("resetPass")}
            </Link>
          </div>
          <button onClick={handleClick} className={`book mb-3 ${style.btn}`}>
            <MdOutlineArrowBackIos size={20} />
            <span>دخول</span>
          </button>

          <p className=" my-2 mx-0 p-0 fw-bold">
            <span className={`tahoma fs2 ${style.haveAccount}`}>
              {t("havAccount")}
            </span>{" "}
            <span
              onClick={() => navigate("/reg")}
              className={`tahoma pointer fs2 ${style.reg}`}
            >
              {t("createAccount")}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default LoginForm;
