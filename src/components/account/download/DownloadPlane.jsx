import React from "react";
import style from "./download.module.css";
import pdf from "../../../assets/pdfIcon.svg";
import { useTranslation } from "react-i18next";
const DownloadPlane = ({ link }) => {
  const [t] = useTranslation();
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`mx-auto ${style.btn} mb-5`}
    >
      <img alt="pdf/icon" className={style.img} loading="lazy" src={pdf} />
      <p className={`text-white fw-bold mx-0 mb-0 mt-1 p-0 shamel`}>
        {t("download")}
      </p>
    </a>
  );
};

export default DownloadPlane;
