import React from "react";
import style from "./PdfBtn.module.css";

import pdfIcon from "../../../assets/pdfIcon.svg";
const PdfBtn = ({ text, action }) => {
  return (
    <button onClick={action} className={`book mb-5 mb-md-0 ${style.btn}`}>
      <img
        alt="pdf/icon"
        loading="lazy"
        src={pdfIcon}
        className={style.pdfIcon}
      />

      <p className="mx-0 mt-1 mb-0 p-0 text-white">{text}</p>
    </button>
  );
};

export default PdfBtn;
