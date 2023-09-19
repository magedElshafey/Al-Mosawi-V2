import React from "react";
import style from "./SuccessBooking.module.css";
import ConsultingIntro from "../consulting/consultingIntro/ConsultingIntro";
import BTN from "../utils/btn/BTN";
import { useTranslation } from "react-i18next";
const SuccessBookingDetails = () => {
  const bookedTime = JSON.parse(localStorage.getItem("appoitment"));
  const [t] = useTranslation();
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
              {bookedTime.map((item, index) => (
                <span className="d-inline-block mx-1" key={index}>
                  {item}
                </span>
              ))}
            </p>
            <BTN text={t("enterMetting")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessBookingDetails;
