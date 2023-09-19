import React from "react";
import { dealsHeader } from "../../../fakers/data.js";
import style from "./DealsHeader.module.css";
import { useTranslation } from "react-i18next";

const DealsHeader = () => {
  const [t] = useTranslation();
  return (
    <div
      className={`z-3 ${style.mainContainer} p-2 d-flex justify-content-center align-items-center gap-5 flex-wrap`}
    >
      {/**stop losing*/}
      <div className="z-3">
        <span className="text-white"> {t("stopLossing")}</span>
        <span className="red  fs20">{dealsHeader.stopLosees}</span>
      </div>
      <div className="z-3">
        <span className="text-white   ">{t("goalThree")}</span>
        <span className="green  fs20">{dealsHeader.goalThree}</span>
      </div>
      <div className="z-3">
        <span className="text-white   ">{t("goalTwo")}</span>
        <span className="green  fs20">{dealsHeader.goalTwo}</span>
      </div>
      <div className="z-3">
        <span className="text-white  ">{t("goalOne")}</span>
        <span className="green fs20">{dealsHeader.goalOne}</span>
      </div>
      <div className="z-3">
        <span className={`text-white  `}>{t("buying")} </span>
        <span className="green  fs20">{dealsHeader.buying}</span>
      </div>

      <div
        className={`p-0 m-0 d-flex flex-column gap-2 align-items-center text-white  ${style.border} position-relative`}
      >
        <h4 className="m-0 p-0 fw-bolder  shamel fs22 text-uppercase">
          bitcoin
        </h4>
        <span className="text-white">{dealsHeader.bitcoin}</span>
      </div>
    </div>
  );
};

export default DealsHeader;
