import React from "react";
import style from "./download.module.css";
import pdf from "../../../assets/pdfIcon.svg";
const DownloadPlane = () => {
  return (
    <button className={`mx-auto ${style.btn}`}>
      <img alt="pdf/icon" className={style.img} loading="lazy" src={pdf} />
      <p className={`text-white fw-bold m-0 p-0 ${style.downloadText}`}>
        تجميل خطة التداول
      </p>
    </button>
  );
};

export default DownloadPlane;
