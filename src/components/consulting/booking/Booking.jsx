import React from "react";
import style from "./Booking.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
const Booking = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`p-4 mx-auto mb-4 ${style.mainContainer} d-flex flex-column gap-2`}
    >
      <p className="m-0 p-0 fw-bold fs26 shamel text-white">
        {t("BookConsultation")}
      </p>
      <button
        onClick={() => navigate("/booking")}
        className={`book ${style.btn}`}
      >
        {i18n.language === "ar" ? <MdArrowBackIosNew /> : <IoIosArrowForward />}
        <span className="text-white mt-1 ">{t("book")}</span>
      </button>
    </div>
  );
};

export default Booking;
