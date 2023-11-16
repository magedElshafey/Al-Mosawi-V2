import React from "react";
import style from "./calcDetails.module.css";
import { useTranslation } from "react-i18next";
const ForexCalcDetails = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={`py-3 col-12`}>
      <p className="fw-bold mx-0 mt-0 p-0 mb-2 fs-5">{t("forexCalc")}</p>
      <p className="mx-0 mt-0 p-0 mb-2">{t("forexCalcDesc")}</p>
      <div className="row mt-4 justify-content-center">
        <div className={`p-2 col-10 col-md-8 ${style.mainContainer}`}>
          <p className="green fw-bolder text-center">
            {i18n.language === "ar"
              ? "احسب معاملاتك التداولية من هنا"
              : "Calculate your trading transactions from here"}
          </p>
          <p>
            {i18n.language === "ar"
              ? "قم بالضغط علي الرابط الموجود بالأسفل ليتم تحويلك الي حاسبة الفوركس "
              : "Click on the link below to be directed to the Forex calculator"}
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <button
              className={`d-flex align-items-center justify-content-center ${style.btn}`}
            >
              <a
                href="https://www.tickmill.com/tools/forex-calculators"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                {i18n.language === "ar" ? "الرابط" : "link"}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexCalcDetails;
