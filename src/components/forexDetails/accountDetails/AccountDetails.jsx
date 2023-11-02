import React from "react";
import style from "./accountDetails.module.css";
import avatar from "../../../assets/team-4.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const AccountDetails = ({ data }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="d-flex align-items-center align-items-md-start flex-column  gap-2 mb-3">
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
          <p className="text-white m-0 p-0">
            {" "}
            {t("accountKind")} : {data.account_type}
          </p>
        </div>
      </div>
      <div className="row">
        <div
          className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          <p className=" text-white mx-0 mt-0 mb-1 p-0 ">{t("accountNum")}: </p>
          <p className=" m-0 p-0 text-white fw-bold mb-2">
            {data.account_number}
          </p>
        </div>
        <div
          className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          <p className="text-white  mx-0 mt-0 mb-1 m-0 p-0 ">
            {" "}
            {t("investment")} :{" "}
          </p>
          <p className="m-0 p-0 text-white fw-bold mb-2">
            {data.invest_amount}
          </p>
        </div>
      </div>
      <div className="row ">
        <div
          className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          <p className="text-white  mx-0 mt-0 mb-1 p-0 "> {t("phone")} :</p>
          <p className="m-0 p-0 text-white fw-bold mb-2">{data.phone}</p>
        </div>
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
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
