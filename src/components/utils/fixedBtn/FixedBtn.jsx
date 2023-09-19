import React from "react";
import style from "./fixedBtn.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
const FixedBtn = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://wa.me/+965 41444868"
      className={style.btnContainer}
    >
      <AiOutlineWhatsApp size={30} className="pointer" />
    </a>
  );
};

export default FixedBtn;
