import React from "react";
import style from "./fixedBtn.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
const FixedBtn = ({ num }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`https://wa.me/${num}`}
      className={style.btnContainer}
    >
      <AiOutlineWhatsApp size={30} className="pointer" />
    </a>
  );
};

export default FixedBtn;
