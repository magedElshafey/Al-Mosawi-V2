import React, { useState, useEffect } from "react";
import style from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { request } from "../../components/utils/axios";
import Spinner from "../utils/Spinner/Spinner";
import toast from "react-hot-toast";
import { login, gitName, gitPp, gitUserId } from "../../Redux/auth";
import { handleCode, handleRequest } from "../../Redux/afilator";
const LoginForm = () => {
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
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    const storedRememberMe = localStorage.getItem("rememberMe") === "true";
    if (storedRememberMe && storedEmail && storedPassword) {
      setAccount(storedEmail);
      setPassword(storedPassword);
      setRememberMe(storedRememberMe);
    }
  }, []);
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
    if (account.trim() === "" || password.trim() === "") {
      return false;
    } else {
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", account);
        localStorage.setItem("rememberedPassword", password);
        localStorage.setItem("rememberMe", rememberMe);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
        localStorage.removeItem("rememberMe");
      }
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label htmlFor="password" className="d-block fw-bold mb-1">
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
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  id="rem"
                  checked={rememberMe}
                  className={`p-0 my-0 mx-2  ${style.checkBox}`}
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
            <button onClick={handleClick} className={`book mb-3 ${style.btn}`}>
              <MdOutlineArrowBackIos size={20} />
              <span>{i18n.language === "ar" ? "دخول" : "login"}</span>
            </button>

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
      )}
    </>
  );
};

export default LoginForm;
