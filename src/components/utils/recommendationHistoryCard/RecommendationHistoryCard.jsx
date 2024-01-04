import React from "react";
import style from "./recommendationHistoryCard.module.css";
import { recommendationHistory } from "../../../fakers/data.js";
import BTN from "../../utils/btn/BTN";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const RecommendationHistoryCard = () => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={`mt-3 mb-0 p-0  ${style.mainContainer} `}>
      <div className="d-flex justify-content-between align-items-center gap-1 gap-md-3 flex-wrap px-2">
        <div className=" d-flex flex-column align-items-center just gap-1">
          <p className={`shamel text-white fs20 fw-bold m-0 p-0`}>
            {t("date")}
          </p>
          <p className={`  text-white m-0 p-0 ${style.date}`}>
            {recommendationHistory.date}
          </p>
        </div>
        <div
          className={`d-flex flex-column ps-0 ps-md-3    align-items-center gap-2 ${style.border}`}
        >
          <p className={`tahoma  m-0 p-0 text-white-50 ${style.date}`}>
            {t("dealsNum")}
          </p>
          <p className="shamel fs24 m-0 p-0 text-white fw-bold">
            {recommendationHistory.deals}$
          </p>
        </div>
        <div
          className={`d-flex flex-column  ps-0 ps-md-3 align-items-center gap-2 ${style.border}`}
        >
          <p className={`tahoma  m-0 p-0 text-white-50 ${style.date}`}>
            {t("profits")}
          </p>
          <p className="shamel fs24 m-0 p-0 whiteGreen fw-bold">
            {recommendationHistory.profits}$
          </p>
        </div>
        <div
          className={`d-flex flex-column  ps-0 ps-md-3 align-items-center gap-2 ${style.border}`}
        >
          <p className={`tahoma  m-0 p-0 text-white-50 ${style.date}`}>
            {t("loser")}
          </p>
          <p className="shamel fs24 m-0 p-0 red fw-bold">
            {recommendationHistory.losses}$
          </p>
        </div>
        <div
          className={`d-flex flex-column  ps-0 ps-md-3 align-items-center gap-2 ${style.border}`}
        >
          <p className={`tahoma   m-0 p-0 text-white-50 ${style.date}`}>
            {t("numberOfPoints")}
          </p>
          <p className="shamel fs24 m-0 p-0 whiteGreen fw-bold">
            {recommendationHistory.numOfPoints}$
          </p>
        </div>
        <BTN
          action={() => navigate("/recommendation-details")}
          text={t("viewAll")}
        />
      </div>
    </div>
  );
};

export default RecommendationHistoryCard;
/*
   <div className={`my-3  ${style.mainContainer}`}>
      <div className="row align-items-center gap-1">
   
        <div className="col-12 col-md-6 col-lg-3 ">
         
        </div>
        <div
          className={`col-12 col-md-6 col-lg-2  `}
        >
         
        </div>
        <div
          className={`col-12 col-md-6 col-lg-1 `}
        >
        
        </div>
        <div
          className={`col-12 col-md-6 col-lg-1 `}
        >
         
        </div>
        <div
          className={`col-12 col-md-6 col-lg-2 `}
        >
        
        </div>
        <div className="col-12 col-md-6 col-lg-2">
        
        </div>
      </div>
    </div>
*/
