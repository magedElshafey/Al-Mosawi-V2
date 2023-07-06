import React, { useState } from "react";
import style from "./consultingAppointments.module.css";
import { useNavigate } from "react-router-dom";
import ConsultingAppoitmentCard from "../../utils/consultingAppoitmentCard/ConsultingAppoitmentCard";
const ConsultingAppointments = ({ nextAppointments, canclledAppointments }) => {
  const [showNext, setShowNext] = useState(true);
  const [showCancled, setShowCancled] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking");
  };
  return (
    <>
      <div
        className={`pb-3 ${style.appointmentContainer} d-flex gap-5 align-items-center`}
      >
        <button
          onClick={() => {
            setShowNext(true);
            setShowCancled(false);
          }}
          className={`roboto fs-22 ${style.btn} ${
            showNext ? style.active : style.null
          }`}
        >
          المواعيد القادمة
        </button>
        <button
          onClick={() => {
            setShowNext(false);
            setShowCancled(true);
          }}
          className={`roboto fs-22 ${style.btn} ${
            showCancled ? style.active : style.null
          }`}
        >
          المواعيد الملغية
        </button>
      </div>
      {showNext && (
        <div className="mt-4 mb-2">
          {nextAppointments.map((item, index) => (
            <ConsultingAppoitmentCard
              key={index}
              item={item}
              showButton={true}
              action={handleClick}
            />
          ))}
        </div>
      )}
      {showCancled && (
        <div className="mt-4 mb-2">
          {canclledAppointments.map((item, index) => (
            <ConsultingAppoitmentCard
              key={index}
              item={item}
              showButton={false}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ConsultingAppointments;
