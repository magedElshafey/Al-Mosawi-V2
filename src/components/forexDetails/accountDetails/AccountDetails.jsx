import React from "react";
import style from "./accountDetails.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleRequest } from "../../../Redux/afilator";
import { request } from "../../utils/axios";
import { useMutation } from "react-query";
import BTN from "../../utils/btn/BTN";
import {
  logout,
  removeName,
  removePip,
  removeUserId,
} from "../../../Redux/auth";
import toast from "react-hot-toast";
const AccountDetails = ({ data, lang, isWallet, isAfilate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profilePhoto } = useSelector((state) => state.authSlice);
  const userId = JSON.parse(localStorage.getItem("userId"));
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
        navigate("/");
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
  const handleAfilatorDashboard = () => navigate("/afilator");
  const handleWallet = () => navigate("/wallet");
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
        </ul>
      </div>
      <div className="row">
        {data.account_number ? (
          <div
            className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p
              className={`text-white mx-0 mt-0 mb-1 p-0 ${
                isWallet || isAfilate ? "d-inline-block" : "d-block"
              }`}
            >
              {t("accountNum")}:{" "}
            </p>
            <p
              className={`m-0 p-0 text-white fw-bold mb-1 ${
                isWallet || isAfilate ? "d-inline-block" : "d-block"
              }`}
            >
              {data.account_number}
            </p>
          </div>
        ) : null}
        {data.invest_amount ? (
          <div
            className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p
              className={`text-white  mx-0 mt-0 mb-1 m-0 p-0 ${
                isWallet || isAfilate ? "d-inline-block" : "d-block"
              }`}
            >
              {" "}
              {t("investment")} :{" "}
            </p>
            <p
              className={`m-0 p-0 text-white mb-1 mx-2 ${
                isWallet || isAfilate ? "d-inline-block" : "d-block"
              }`}
            >
              {data.invest_amount}
            </p>
          </div>
        ) : null}
      </div>
      <div className="row ">
        <div
          className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          <p
            className={`text-white  mx-0 mt-0 mb-1 p-0 ${
              isWallet || isAfilate ? "d-inline-block" : "d-block"
            }`}
          >
            {" "}
            {t("phone")} :
          </p>
          <p
            className={`m-0 p-0 text-white mx-2 mb-1 mt-0 ${
              isWallet || isAfilate ? "d-inline-block" : "d-block"
            }`}
          >
            {data.phone}
          </p>
        </div>
        {data.referral_code ? (
          <div
            className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p
              className={`text-white  mx-0 mt-0 mb-1 p-0  ${
                isWallet || isAfilate ? "d-inline-block" : "d-block"
              }`}
            >
              {i18n.language === "ar" ? "كود afilator" : "afilator code"} :
            </p>
            <p
              className={`m-0 p-0 text-white mx-2  mb-1 ${
                isWallet || isAfilate ? "d-inline-block" : "d-block"
              }`}
            >
              {data.referral_code}
            </p>
          </div>
        ) : null}
      </div>
      <div className="row">
        <div
          className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          <button
            onClick={() => navigate("/forex-account")}
            className={`mt-2  ${style.btn} d-flex justify-content-center align-items-center  gap-1 text-white`}
          >
            <MdArrowBackIos size={20} />
            <p className="m-0 p-0 ">
              {i18n.language === "ar"
                ? "طلب فتح حساب تداول"
                : "Request to open a trading account"}
            </p>
          </button>
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
          {data.referral_code ? (
            <>
              <div className="my-3">
                <BTN
                  action={handleAfilatorDashboard}
                  text={
                    i18n.language === "en"
                      ? "afilator dashboard"
                      : "لوحة تحكم afilator"
                  }
                />
              </div>
              <BTN
                action={handleWallet}
                text={
                  i18n.language === "en" ? "wallet details" : "تفاصيل المحفظة"
                }
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
/**
 *  <div className="d-flex align-items-center align-items-md-start flex-column  gap-2 mb-3">
        {data.profile_photo ? (
          <img
            className={style.avImg}
            loading="lazy"
            alt="profilePhoto/img"
            src={data.profile_photo}
          />
        ) : null}

        <div className="d-flex flex-column gap-1">
          <div className="d-flex align-items-center gap-1 text-white">
            <p className="m-0 p-0 fw-bold shamel">{data.name}</p>
            <IoMdArrowDropdown size={20} />
          </div>
          {data.account_type ? (
            <p className="text-white m-0 p-0">
              {t("accountKind")} : {data.account_type}
            </p>
          ) : null}
        </div>
      </div>
 */
