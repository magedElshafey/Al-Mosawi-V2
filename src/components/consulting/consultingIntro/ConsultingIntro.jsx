import React from "react";
import style from "./consultingIntro.module.css";
import { useTranslation } from "react-i18next";
const ConsultingIntro = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="mb-3">
      <h3 className={`d-inline-block mx-2 mt-0 mb-2 p-0 fw-bolder fs22`}>
        {t("techConsulting")}
      </h3>
      <h3 className={`fs24  d-inline-block fw-bolder  green`}>{t("ahmed")}</h3>
      <p
        className={`m-0 p-0    ${style.desc}`}
      >
        {t("consultingIntro")}
      </p>
    </div>
  );
};

export default ConsultingIntro;
