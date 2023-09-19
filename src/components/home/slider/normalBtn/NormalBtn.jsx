import React from "react";
import style from "./normalBtn.module.css";
import { MdArrowBackIos } from "react-icons/md";
const NormalBtn = ({ text }) => {
  return (
    <button className={`gap-2 py-1  px-4 book ${style.btn}`}>
      <div className={style.arrowContainer}>
        <MdArrowBackIos className="ms-2" />
      </div>
      <span className={`text-white ${style.text}`}>{text}</span>
    </button>
  );
};

export default NormalBtn;
