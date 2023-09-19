import React from "react";
import style from "./download.module.css";
import pdf from "../../../assets/pdfIcon.svg";
import { useTranslation } from "react-i18next";
const DownloadPlane = () => {
  const [t] = useTranslation();
  return (
    <button className={`mx-auto ${style.btn}`}>
      <img alt="pdf/icon" className={style.img} loading="lazy" src={pdf} />
      <p className={`text-white fw-bold mx-0 mb-0 mt-1 p-0 shamel`}>
        {t("download")}
      </p>
    </button>
  );
};

export default DownloadPlane;
