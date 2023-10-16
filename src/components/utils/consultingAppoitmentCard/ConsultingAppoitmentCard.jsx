import React from "react";
import style from "./consultingAppoitmentCard.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useTranslation } from "react-i18next";
const ConsultingAppoitmentCard = ({ action, item, showButton }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${style.mainDiv} px-2 py-2 mb-4 d-flex justify-content-between align-items-center`}
    >
      <p className="m-0 p-0">
        {item.day} {i18n.language === "ar" ? "الموافق" : "on"} {item.date}{" "}
        {i18n.language === "ar" ? "الساعة" : "at"} {item.time}
      </p>
      {showButton && (
        <button
          onClick={action}
          disabled={item.disabled}
          className={`book ${style.seconBtn} ${
            item.disabled ? style.disapled : null
          }`}
        >
          <MdArrowBackIosNew />
          <span className="mt-1">{t("enterMetting")}</span>
        </button>
      )}
    </div>
  );
};

export default ConsultingAppoitmentCard;
