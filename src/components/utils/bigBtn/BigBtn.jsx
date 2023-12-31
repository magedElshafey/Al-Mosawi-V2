import React from "react";
import style from "./BigBtn.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
const BigBtn = ({ text, action }) => {
  const { i18n } = useTranslation();
  return (
    <button onClick={action} className={`book ${style.btn}`}>
      {i18n.language === "ar" ? (
        <MdOutlineArrowBackIosNew size={20} />
      ) : (
        <IoIosArrowForward size={20} />
      )}

      <span>{text}</span>
    </button>
  );
};

export default BigBtn;
