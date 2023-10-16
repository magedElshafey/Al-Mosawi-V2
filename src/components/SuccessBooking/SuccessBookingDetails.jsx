import React from "react";
import style from "./SuccessBooking.module.css";
import ConsultingIntro from "../consulting/consultingIntro/ConsultingIntro";
import BTN from "../utils/btn/BTN";
import { useTranslation } from "react-i18next";
const SuccessBookingDetails = () => {
  const day = JSON.parse(localStorage.getItem("day"));
  const time = JSON.parse(localStorage.getItem("time"));
  const { t, i18n } = useTranslation();
  return (
    <div>
      <ConsultingIntro />
      <div className="row justify-content-center mt-2">
        <div
          className={`col-12 col-md-5 p-5 ${style.successContainer} text-center`}
        >
          <h4 className={`fw-bolder green mb-3 fs24 shamel`}>
            {t("successBooking")}
          </h4>
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <p className="m-0 p-0">
              {day} : {i18n.language === "ar" ? "الساعة" : "at"} {time}
            </p>
            <BTN text={t("enterMetting")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessBookingDetails;
