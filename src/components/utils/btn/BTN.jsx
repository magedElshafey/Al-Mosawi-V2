import React from "react";
import style from "./btn.module.css";
import { MdOutlineArrowBackIos } from "react-icons/md";
const BTN = ({ action, text }) => {
  return (
    <button className={`book ${style.btn}`} onClick={() => action()}>
      <MdOutlineArrowBackIos size={20} />
      <span className="mt-1">{text}</span>
    </button>
  );
};

export default BTN;
