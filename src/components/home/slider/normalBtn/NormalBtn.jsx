import React from "react";
import style from "./normalBtn.module.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
const NormalBtn = ({ text, path }) => {
  return (
    <Link to={path} className={`gap-2 py-1  px-4 book ${style.btn}`}>
      <div className={style.arrowContainer}>
        <MdArrowBackIos className="ms-2" />
      </div>
      <span className={`text-white ${style.text}`}>{text}</span>
    </Link>
  );
};

export default NormalBtn;
