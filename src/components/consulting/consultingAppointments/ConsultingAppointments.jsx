import React, { useState } from "react";
import style from "./consultingAppointments.module.css";
import { useNavigate } from "react-router-dom";
import ConsultingAppoitmentCard from "../../utils/consultingAppoitmentCard/ConsultingAppoitmentCard";
import { useTranslation } from "react-i18next";
const ConsultingAppointments = ({ nextAppointments, canclledAppointments }) => {
  const { t, i18n } = useTranslation();
  const [showNext, setShowNext] = useState(true);
  const [showCancled, setShowCancled] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking");
  };
  return (
    <>
      <div className={`p-3 mt-4 ${style.mainDiv}`}>
        <div
          className={`pb-3 mb-4 ${style.appointmentContainer} d-flex gap-5 align-items-center`}
        >
          <button
            onClick={() => {
              setShowNext(true);
              setShowCancled(false);
            }}
            className={`${style.btn} ${showNext ? style.active : style.null}`}
          >
            {t("UpcomingAppointments")}
          </button>
          <button
            onClick={() => {
              setShowNext(false);
              setShowCancled(true);
            }}
            className={` ${style.btn} ${
              showCancled ? style.active : style.null
            }`}
          >
            {t("CanceledAppointments")}
          </button>
        </div>
        {showNext && (
          <div className="my-2">
            {nextAppointments.length
              ? nextAppointments.map((item, index) => (
                  <ConsultingAppoitmentCard
                    key={index}
                    item={item}
                    showButton={true}
                    action={handleClick}
                  />
                ))
              : i18n.language === "ar"
              ? "ليس لديك اشتراك حاليا"
              : "no consultation booked now"}
          </div>
        )}
        {showCancled && (
          <div className="my-2">
            {canclledAppointments.length ? (
              canclledAppointments.map((item, index) => (
                <ConsultingAppoitmentCard
                  key={index}
                  item={item}
                  showButton={false}
                />
              ))
            ) : (
              <div>
                {i18n.language === "ar"
                  ? "لا يوجد مواعيد ملغية"
                  : "no canclled appointment"}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ConsultingAppointments;
