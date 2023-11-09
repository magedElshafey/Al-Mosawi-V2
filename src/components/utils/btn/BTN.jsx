import React from "react";
import style from "./btn.module.css";
import { MdOutlineArrowBackIos, MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
const BTN = ({ action, text, disabled}) => {
  const { i18n } = useTranslation();
  return (
    <button disabled={disabled} className={` ${style.btn}`} onClick={action}>
      {i18n.language === "en" ? (
        <MdKeyboardArrowRight size={20} />
      ) : (
        <MdOutlineArrowBackIos size={20} />
      )}
      <span>{text}</span>
    </button>
  );
};

export default BTN;
