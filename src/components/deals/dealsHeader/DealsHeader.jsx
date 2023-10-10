import React from "react";
import { dealsHeader } from "../../../fakers/data.js";
import style from "./DealsHeader.module.css";
import { useTranslation } from "react-i18next";

const DealsHeader = ({ data }) => {
  console.log("this is deals data", data);
  const [t] = useTranslation();
  return (
    <div
      className={`z-3 ${style.mainContainer} p-2 d-flex justify-content-center align-items-center gap-5 flex-wrap`}
    >
      {/**stop losing*/}
      <div className="z-3">
        <span className="text-white"> {t("stopLossing")} : </span>
        <span className="red  fs20">{data.Recommendation.stop}</span>
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
        <span className="green  fs20">{data.Recommendation.enter}</span>
      </div>

      <div
        className={`p-0 m-0 d-flex flex-column gap-2 align-items-center text-white  ${style.border} position-relative`}
      >
        <h4 className="m-0 p-0 fw-bolder  shamel fs22 text-uppercase">
          {data.title}
        </h4>
        <span className="text-white">{data.Recommendation.Goal[0].goal}</span>
      </div>
    </div>
  );
};

export default DealsHeader;
