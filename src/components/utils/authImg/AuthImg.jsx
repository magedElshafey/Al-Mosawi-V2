import React from "react";
import style from "./authImg.module.css";
import heroImg from "../../../assets/hhh.png";
import logo from "../../../assets/Logo.svg";
import { MdOutlineCallToAction } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import phone from "../../../assets/phoneCall.png";
import { useTranslation } from "react-i18next";
import helpDesc from "../../../assets/help-desk-log-svgrepo-com.svg";
const AuthImg = ({ desc, desc2, showWelcome, phoneNum }) => {
  const { i18n, t } = useTranslation();

  return (
    <div className={style.imgContainer}>
      <img
        alt="auth/img"
        src={heroImg}
        loading="lazy"
        className={style.mainImg}
      />
      <div className={style.overlay}>
        <div className="d-flex flex-column gap-2 align-items-center">
          <img
            alt="logo/img"
            src={logo}
            loading="lazy"
            className={style.logo}
          />
          {showWelcome && (
            <p className={`fw-bold text-white  mx-0  mt-3 p-0 shamel fs28 `}>
              {t("welcome")}
            </p>
          )}
          <div className="mb-5 d-flex flex-column align-items-center gap-1">
            <p
              className={` lh m-0 p-0 w-100  fw-bold shamel   text-center text-white ${style.desc}`}
            >
              {desc ? desc : null}
            </p>
            {desc2 && (
              <p
                className={`lh m-0 p-0 ${style.desc2}  fw-bold w-50  text-center`}
              >
                {desc2}
              </p>
            )}
          </div>
          <div className={`p-3 ${style.box}`}>
            <div className="d-flex align-items-center  gap-2 mb-3">
              <img alt="icon" src={helpDesc} className={style.icon} />
              <div>
                <p className="d-inline-block shamel fs18 ms-2 fw-bold text-white m-0 p-0 ">
                  {t("contact us")}{" "}
                </p>
                <span className="green fw-bold shamel fs18">{t("help")}</span>
              </div>
            </div>
            <div
              className={`green fw-bold d-flex align-items-center justify-content-center gap-2`}
            >
              {i18n.language === "en" ? (
                <img
                  src={phone}
                  alt="phone/img"
                  className={`green fw-bold ${style.phoneIcon}`}
                />
              ) : (
                <AiOutlinePhone size={20} className="green fw-bold" />
              )}
              <span className="p-0 mx-0 mb-0 mt-1 shamel fs20">{phoneNum}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthImg;
