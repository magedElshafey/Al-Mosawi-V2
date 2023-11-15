import React from "react";
import style from "./calcDetails.module.css";
import { useTranslation } from "react-i18next";
const ForexCalcDetails = () => {
  const [t] = useTranslation();
  return (
    <div className={`py-3 col-12`}>
      <p className="fw-bold mx-0 mt-0 p-0 mb-2 fs-5">{t("forexCalc")}</p>
      <p className="mx-0 mt-0 p-0 mb-2">{t("forexCalcDesc")}</p>
      <iframe
        title="External Page"
        src="https://www.tickmill.com/tools/forex-calculators"
        width="100%"
        height="600px"
        frameBorder="0"
      />
    </div>
  );
};

export default ForexCalcDetails;
/**
 *   <div className="row mt-2">
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
          <label className="d-block  mb-1" htmlFor="cuurancy">
            {t("currency")}
          </label>
          <select id="cuurancy" className="inp rounded">
            <option>EUR</option>
            <option>USD</option>
            <option>SAR</option>
            <option>L.E</option>
          </select>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
          <label className="d-block  mb-1" htmlFor="financial">
            {t("financial ")}
          </label>
          <select id="financial" className="inp rounded">
            <option>EUR/USD</option>
            <option>SAR/L.E</option>
          </select>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
          <label className="d-block  mb-1" htmlFor="ratio">
            {t("leverage")}
          </label>
          <select id="ratio" className="inp selectInp rounded">
            <option>1:1</option>
            <option>1:2</option>
            <option>5:2</option>
          </select>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
          <label className="d-block  mb-1" htmlFor="volum">
            {t("lot")}
          </label>
          <input type="number" className="inp rounded" id="volum" />
          <div className="my-3 text-start">
            <input className="d-inline-block ms-2" type="checkbox" id="calc" />
            <label htmlFor="calc" className="text-black-50 d-inline-block pb-1">
              {t("Profit ")}
            </label>
          </div>
          <button className={style.btn}>{t("calc")}</button>
          <div
            className={`w-100 my-2 ${style.beniftsContainer} d-flex justify-content-between align-items-center`}
          >
            <div className="d-flex flex-column align-items-center gap-2">
              <p className="m-0 p-0 fs2">{t("benefits ")}</p>
              <h4 className="m-0 p-0 fw-bolder fs-5">0.00</h4>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <p className="m-0 p-0 fs2">{t("salleingBenifits")}</p>
              <h4 className="m-0 p-0 fw-bolder fs-5">0.00</h4>
            </div>
          </div>
          <div className="w-100 my-2 d-flex justify-content-between align-items-center ">
            <p className="m-0 p-0 fs2">{t("beniftsType")}</p>
            <p className="m-0 p-0 fs2">{t("threeBenifts")}</p>
          </div>
        </div>
      </div>
      <div className={`pt-3  row  ${style.others}`}>
        <div className="col-12 col-md-6 mb-2 mb-md-0 text-black-50 text-center">
          {t("beniftsValue")}
        </div>
        <div className="col-12 col-md-6 text-black-50 text-center">
          {t("otherAccounts")}
        </div>
      </div>
      <div className="mt-3 mb-2 row gap-4 justify-content-center">
        <div
          className={`p-2 col-12 col-md-5 col-lg-2 mb-3 mb-md-0 d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className="text-black-50 m-0 p-0">{t("benefits")}</p>
          <p className="m-0 p-0 fw-bold fs-5">0.00</p>
        </div>
        <div
          className={`p-2 col-12 col-md-5 col-lg-2 mb-3 mb-md-0 d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className="text-black-50 m-0 p-0">{t("salleingBenifits")}</p>
          <p className="m-0 p-0 fw-bold fs-5">0.00</p>
        </div>
        <div
          className={`p-2 col-12 col-md-5 col-lg-2  d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className="text-black-50 m-0 p-0">{t("margin")}</p>
          <p className="m-0 p-0 fw-bold fs-5">0.00</p>
        </div>
        <div
          className={`p-2 col-12 col-md-5 col-lg-2  d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className="text-black-50 m-0 p-0">{t("pointValue")}</p>
          <p className="m-0 p-0 fw-bold fs-5">0.00</p>
        </div>
      </div>
 */
