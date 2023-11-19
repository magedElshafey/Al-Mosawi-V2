import React from "react";
import style from "./imgModal.module.css";
import { useTranslation } from "react-i18next";
const ImgModal = ({ img, showImgModal, setShowImgModal }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`${style.mainContainer} ${
        showImgModal ? style.show : style.hide
      }`}
    >
      <img alt="deals/img" src={img} className={style.mainImg} />
      <button className={style.btn} onClick={() => setShowImgModal(false)}>
        {i18n.language === "ar" ? "العودة" : "back"}
      </button>
    </div>
  );
};

export default ImgModal;
