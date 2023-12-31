import React from "react";
import style from "./contactus.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import contact from "../../../assets/contact.svg";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";
const ContactUs = ({ phoneNum }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`mx-auto p-3 ${style.mainContainer} d-flex flex-column align-items-center justify-content-center gap-1`}
    >
      <p className="shamel fs22 fw-bold text-white m-0 p-0">
        {t("contact us")}
      </p>
      <p className="fw-bold m-0 p-0 whiteGreen shamel fs22">{t("help")}</p>
      <div className="d-flex align-items-center gap-2 whiteGreen fw-bold ">
        <a
          href={`https://wa.me/${phoneNum}`}
          className="mx-0 mb-0 mt-1 p-0 shamel fs18 green"
        >
          {phoneNum}
        </a>
        {i18n.language === "ar" ? (
          <BsFillTelephoneFill className="shamel fs18" />
        ) : (
          <FaPhone className="shamel fs18" />
        )}
      </div>
      <div className="d-flex justify-content-center">
        <img
          loading="lazy"
          alt="contact/icon"
          className={style.contactImg}
          src={contact}
        />
      </div>
    </div>
  );
};

export default ContactUs;
