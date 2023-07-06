import React from "react";
import style from "./BigBtn.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const BigBtn = ({ text, action }) => {
  return (
    <button onClick={action} className={style.btn}>
      <MdOutlineArrowBackIosNew size={20} />
      <span className="mt-1">{text}</span>
    </button>
  );
};

export default BigBtn;
