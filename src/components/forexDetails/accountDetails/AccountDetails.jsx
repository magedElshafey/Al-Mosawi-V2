import React from "react";
import style from "./accountDetails.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { handleRequest } from "../../../Redux/afilator";
import { request } from "../../utils/axios";
import { useMutation } from "react-query";
import {
  logout,
  removeName,
  removePip,
  removeUserId,
} from "../../../Redux/auth";
import toast from "react-hot-toast";
const AccountDetails = ({ data, lang, isWallet, isAfilate, prochartPlans }) => {
  console.log("data from data", data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profilePhoto } = useSelector((state) => state.authSlice);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const isTickmill = JSON.parse(localStorage.getItem("tickmillUser"));
  const { t, i18n } = useTranslation();
  const handleAfilate = async () => {
    const res = await fetch(
      "https://almosawi.admin.technomasrsystems.com/api/affiliate/store",
      {
        method: "POST",
        headers: {
          userId,
          lang,
          "Content-Type": "application/json",
        },
        body: "",
      }
    );
    const data = await res.json();
    if (data.status) {
      toast.success(data.message);
      dispatch(handleRequest());
    } else {
      toast.error(data.message);
    }
  };
  const handleLogout = (data) => {
    return request({ url: "/auth/logout", method: "post", data });
  };
  const { mutate } = useMutation(handleLogout, {
    onSuccess: (data) => {
      if (data.data.status) {
        toast.success(
          i18n.language === "en"
            ? "you are logout successfulyy"
            : "تم تسجيل خروجك بنجاح"
        );
        navigate("/");
        dispatch(logout(false));
        dispatch(removeName());
        dispatch(removePip());
        dispatch(removeUserId());
        if (localStorage.getItem("accountType")) {
          window.localStorage.removeItem("accountType");
        } else {
          return;
        }
        if (localStorage.getItem("afilatorCode")) {
          window.localStorage.removeItem("afilatorCode");
        } else {
          return;
        }
        if (localStorage.getItem("isAfilateReqSent")) {
          window.localStorage.removeItem("isAfilateReqSent");
        } else {
          return;
        }
        if (localStorage.getItem("tickmillUser")) {
          window.localStorage.removeItem("tickmillUser");
        } else {
          return;
        }
      } else {
        toast.error(
          i18n.language === "en"
            ? "there is an error occurred , please try again"
            : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
        );
      }
    },
  });
  const handleClick = async () => {
    const userData = {};
    await mutate(userData);
  };

  return (
    <>
      <div className="dropdown mb-3">
        <button
          className={`dropdown-toggle d-flex align-items-center gap-2 ${style.menuBtn}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img alt="profile/img" className={style.pp} src={profilePhoto} />
          <p className="text-white m-0 p-0 fw-bolder">{data.name}</p>
          <IoIosArrowDown size={15} className="text-white" />
        </button>
        <ul className="dropdown-menu">
          <li
            className="dropdown-item pointer"
            onClick={() => {
              handleClick();
            }}
          >
            {i18n.language === "ar" ? "تسجيل الخروج" : "logout"}
          </li>
          <li className="dropdown-item pointer">
            <Link className="dropdown-item" to={"/account"}>
              {i18n.language === "ar" ? "حسابي" : "profile"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="row mb-3">
        {data.account_number ? (
          <div
            className={`col-12 d-flex gap-2 d-md-block mb-1 ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className={`text-white m-0 p-0`}>{t("accountNum")}: </p>
            <p className={`m-0 p-0 text-white fw-bold`}>
              {data.account_number}
            </p>
          </div>
        ) : null}
        {data.invest_amount ? (
          <div
            className={`col-12 d-flex gap-2 d-md-block mb-1 ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className={`text-white m-0 p-0`}> {t("investment")} : </p>
            <p className={`m-0 p-0 text-white`}>{data.invest_amount}</p>
          </div>
        ) : null}
      </div>
      <div className="row mb-3 ">
        <div
          className={`col-12 d-flex gap-2 d-md-block mb-1 ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          <p className={`text-white  m-0 p-0`}> {t("phone")} :</p>
          <p
            className={`m-0 p-0 text-white mx-2 mb-1 mt-0 fw-bold ${
              isWallet || isAfilate ? "d-inline-block" : "d-block"
            }`}
          >
            {data.phone}
          </p>
        </div>
        {data.referral_code ? (
          <div
            className={`col-12 d-flex gap-2 mb-1 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className={`text-white  m-0 p-0 `}>
              {i18n.language === "ar" ? "كود afilator" : "afilator code"} :
            </p>
            <p className={`m-0 p-0 text-white m-0 fw-bold`}>
              {data.referral_code}
            </p>
          </div>
        ) : null}
      </div>
      <div className="row mb-3 ">
        {data.account_type ? (
          <div
            className={`col-12 d-flex gap-2 d-md-block mb-1 ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className={`text-white  m-0 p-0`}>
              {" "}
              {i18n.language === "ar" ? "نوع الحساب" : "account type"} :
            </p>
            <p
              className={`m-0 p-0 text-white mx-2 mb-1 mt-0 fw-bold ${
                isWallet || isAfilate ? "d-inline-block" : "d-block"
              }`}
            >
              {data.account_type}
            </p>
          </div>
        ) : null}

        {data.email ? (
          <div
            className={`col-12 d-flex gap-2 mb-1 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className={`text-white  m-0 p-0 `}>
              {i18n.language === "ar" ? "البريد الإلكتروني" : "email"} :
            </p>
            <p className={`m-0 p-0 text-white m-0 fw-bold`}>{data.email}</p>
          </div>
        ) : null}
      </div>
      <div className="row mb-3 ">
        {prochartPlans[0] ? (
          <div
            className={`col-12 d-flex gap-2 mb-1 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className={`text-white  m-0 p-0 `}>
              {i18n.language === "ar" ? "الخطة " : "plan"} :
            </p>
            <p className={`m-0 p-0 text-white m-0 fw-bold`}>
              {prochartPlans[0]}
            </p>
          </div>
        ) : null}
        {prochartPlans[1] ? (
          <div
            className={`col-12 d-flex gap-2 mb-1 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className={`text-white  m-0 p-0 `}>
              {i18n.language === "ar" ? "تاريخ الإشتراك" : "start date"} :
            </p>
            <p className={`m-0 p-0 text-white m-0 fw-bold`}>
              {prochartPlans[1]}
            </p>
          </div>
        ) : null}
        {prochartPlans[2] ? (
          <div
            className={`col-12 d-flex gap-2 mb-1 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className={`text-white  m-0 p-0 `}>
              {i18n.language === "ar" ? "تاريخ الإنتهاء" : "end date"} :
            </p>
            <p className={`m-0 p-0 text-white m-0 fw-bold`}>{prochartPlans[2]}</p>
          </div>
        ) : null}
      </div>
      <div className="row mb-3">
        <div
          className={`col-12  mb-0 ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          {!isTickmill && (
            <button
              onClick={() => navigate("/forex-account")}
              className={`${style.btn} d-flex justify-content-center align-items-center  gap-1 text-white mb-3`}
            >
              <MdArrowBackIos size={20} />
              <p className="m-0 p-0 ">
                {i18n.language === "ar"
                  ? "طلب فتح حساب تداول"
                  : "Request to open a trading account"}
              </p>
            </button>
          )}
          {!data.referral_code && (
            <button
              onClick={handleAfilate}
              className={`mt-2  ${style.btn} d-flex justify-content-center align-items-center  gap-1 text-white`}
            >
              <MdArrowBackIos size={20} />
              <p className="m-0 p-0 ">
                {i18n.language === "ar"
                  ? "انضم الي برنامج afilate"
                  : "Join the afilate program"}
              </p>
            </button>
          )}
        </div>
      </div>
      <div className="row mb-3">
        <div
          className={`col-12  mb-0 ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          {isTickmill && (
            <button
              onClick={() => navigate("/edit")}
              className={`mt-2  ${style.btn} d-flex justify-content-center align-items-center  gap-1 text-white`}
            >
              <MdArrowBackIos size={20} />
              <p className="m-0 p-0 ">
                {i18n.language === "ar"
                  ? "طلب تعديل البيانات"
                  : "Request for editting Account Details"}
              </p>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default AccountDetails;
