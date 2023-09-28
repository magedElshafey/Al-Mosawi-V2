import React from "react";
import style from "./mainBtn.module.css";
import { MdArrowBackIosNew, MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
const MainBtn = ({ text, action }) => {
  const { i18n } = useTranslation();
  return (
    <button onClick={action} className={` ${style.btn}`}>
      <div
        className={`d-flex justify-content-center align-items-center p-2 ${style.arrowContainer}`}
      >
        {i18n.language === "en" ? (
          <MdKeyboardArrowRight size={20} />
        ) : (
          <MdArrowBackIosNew size={20} />
        )}
      </div>
      <span className={`${style.text}`}>{text}</span>
    </button>
  );
};

export default MainBtn;
