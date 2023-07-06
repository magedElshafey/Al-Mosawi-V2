import React from "react";
import style from "./consultingAppoitmentCard.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
const ConsultingAppoitmentCard = ({ action, item, showButton }) => {
  return (
    <div
      className={`${style.mainDiv} px-2 py-2 mb-4 d-flex justify-content-between align-items-center`}
    >
      <p className="roboto fs-24 m-0 p-0">{item.title}</p>
      {showButton && (
        <button
          onClick={action}
          disabled={item.disabled}
          className={`${style.seconBtn} ${
            item.disabled ? style.disapled : null
          }`}
        >
          <MdArrowBackIosNew />
          <span className="mt-1">دخول الاجتماع</span>
        </button>
      )}
    </div>
  );
};

export default ConsultingAppoitmentCard;
