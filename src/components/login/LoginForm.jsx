import React, { useState, useEffect } from "react";
import style from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  MdOutlineArrowBackIos,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { request } from "../../components/utils/axios";
import Spinner from "../utils/Spinner/Spinner";
import toast from "react-hot-toast";
import { login, gitName, gitPp, gitUserId } from "../../Redux/auth";
import { handleCode, handleRequest } from "../../Redux/afilator";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle show/hide password
  };
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
  const formattedCart = {};
  if (cartItems) {
    cartItems.forEach((item, index) => {
      formattedCart[index] = { product_id: item.id };
    });
  }
  const lang = i18n.language;
  const sendCartItems = async (id) => {
    const res = await fetch(
      "https://almosawi.admin.technomasrsystems.com/api/cart/preOrder",
      {
        method: "POST",
        headers: {
          user: id,
          "Content-Type": "application/json",
          lang,
        },
        body: JSON.stringify({
          cart: formattedCart,
        }),
      }
    );
    const data = await res.json();
    return data;
  };

  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // remember me functionality
  useEffect(() => {
    const rememberedEmail = getCookie("rememberedEmail");
    const rememberedPassword = getCookie("rememberedPassword");

    if (rememberedEmail && rememberedPassword) {
      setAccount(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);
  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setTime(
      expirationDate.getTime() + days * 24 * 60 * 60 * 1000
    );
    const expires = `expires=${expirationDate.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };
  const getCookie = (name) => {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  };
  const handleSendMsg = (data) => {
    return request({ url: "/auth/login", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(handleSendMsg, {
    onSuccess: (data) => {
      if (data.data.status === "faild") {
        toast.error(
          i18n.language === "en"
            ? "there is an error occurred , please try again"
            : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
        );
      } else {
        toast.success(
          i18n.language === "en"
            ? "you are loggin successfulyy"
            : "تم تسجيل دخولك بنجاح"
        );
        dispatch(login(true));
        dispatch(gitName(data.data.data.name));
        dispatch(gitPp(data.data.data.photo));
        dispatch(gitUserId(data?.data?.data?.id));
        localStorage.setItem("type", JSON.stringify(data.data.data.type));
        localStorage.setItem(
          "accountType",
          JSON.stringify(data.data.data.account_type)
        );
        localStorage.setItem("plan", JSON.stringify(data.data.data.plan));
        sendCartItems(data?.data?.data?.id);
        setAccount("");
        setPassword("");
        if (data.data.data.referral_code) {
          dispatch(handleCode(data.data.data.referral_code));
          dispatch(handleRequest());
        }
        if (data.data.data.tikmill) {
          navigate("/forex-account/details");
        } else {
          if (data.data.data.type === "prochart_user") {
            navigate("/user/prochart");
          } else {
            navigate("/account");
          }
        }
        localStorage.setItem(
          "tickmillUser",
          JSON.stringify(data.data.data.tikmill)
        );
      }
    },
  });
  const handleClick = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      setCookie("rememberedEmail", account, 30);
      setCookie("rememberedPassword", password, 30);
    } else {
      setCookie("rememberedEmail", "", -1); // Delete cookie by setting expiration date to the past
      setCookie("rememberedPassword", "", -1); // Delete cookie by setting expiration date to the past
    }

    if (account.trim() === "" || password.trim() === "") {
      return false;
    } else {
      const userData = { account, password };
      await mutate(userData);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="d-flex justify-content-center">
          <div className="py-3 container">
            <div className={`mb-4 position-relative ${style.inpWidth}`}>
              <label htmlFor="email" className="d-block fw-bold mb-1">
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
            <div className={`mb-4 position-relative ${style.inpWidth}`}>
              <label htmlFor="password" className="d-block fw-bold mb-1">
                {t("pass")}
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={`inp ${style.inpWidth} `}
                type={showPassword ? "text" : "password"}
                id="password"
              />
              <button
                className={`eye-icon-btn ${
                  i18n.language === "ar" ? "left" : "right"
                }`}
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff size={20} />
                ) : (
                  <MdOutlineVisibility size={20} />
                )}
              </button>
            </div>
            <div
              className={` align-items-center  mb-3 d-flex gap-5 ${style.inpWidth} `}
            >
              <div className="d-flex align-items-center my-3">
                <input
                  type="checkbox"
                  id="rem"
                  checked={rememberMe}
                  className={`p-0 my-0  ${style.checkBox}`}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="rem" className={` fw-bold  shamel `}>
                  {t("remember")}
                </label>
              </div>
              <Link to="/forget" className={`fw-bold shamel  ${style.links}`}>
                {t("resetPass")}
              </Link>
            </div>
            <div className={style.inpWidth}>
              <button
                onClick={handleClick}
                className={`book my-3 ${style.btn} ${style.inpWidth}`}
              >
                <MdOutlineArrowBackIos size={20} />
                <span>{i18n.language === "ar" ? "دخول" : "login"}</span>
              </button>
            </div>
            <div className={style.inpWidth}>
              <p className=" my-2 mx-0 p-0 fw-bold text-center">
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
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
