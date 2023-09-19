import React from "react";
import style from "./mainBtn.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
const MainBtn = ({ text, action }) => {
  return (
    <button onClick={action} className={` ${style.btn}`}>
      <div
        className={`d-flex justify-content-center align-items-center p-2 ${style.arrowContainer}`}
      >
        <MdArrowBackIosNew size={20} />
      </div>
      <span className={`${style.text}`}>{text}</span>
    </button>
  );
};

export default MainBtn;
