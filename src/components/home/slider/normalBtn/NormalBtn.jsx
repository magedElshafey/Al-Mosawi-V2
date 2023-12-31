import React from "react";
import style from "./normalBtn.module.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
const NormalBtn = ({ text, path }) => {
  const { i18n } = useTranslation();
  return (
    <Link to={path} className={`gap-2 py-1  px-4  ${style.btn}`}>
      <div className={style.arrowContainer}>
        {i18n.language === "ar" ? <MdArrowBackIos /> : <IoIosArrowForward />}
      </div>
      <span className={`text-white ${style.text}`}>{text}</span>
    </Link>
  );
};

export default NormalBtn;
