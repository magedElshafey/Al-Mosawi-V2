import React from "react";
import style from "./normalBtn.module.css";
import { MdArrowBackIos } from "react-icons/md";
const NormalBtn = ({ text }) => {
  return (
    <button className={style.btn}>
      <div className={style.arrowContainer}>
        <MdArrowBackIos />
      </div>
      <span className={`text-white ${style.text}`}>{text}</span>
    </button>
  );
};

export default NormalBtn;
