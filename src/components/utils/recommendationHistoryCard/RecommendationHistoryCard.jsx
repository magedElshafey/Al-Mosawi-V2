import React from "react";
import style from "./recommendationHistoryCard.module.css";
import { recommendationHistory } from "../../../fakers/data.js";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const RecommendationHistoryCard = () => {
  const navigate = useNavigate();
  return (
    <div className={`my-4 ${style.mainContainer}`}>
      <div className="d-flex  align-items-center  justify-content-center justify-content-md-between flex-wrap gap-4">
        {/*date*/}
        <div className="d-flex flex-column align-items-center gap-2">
          <p className={`text-white fs24 fw-bold m-0 p-0`}>تاريخ التوصيات</p>
          <p className={`roboto fs18 text-white m-0 p-0 ${style.date}`}>
            {recommendationHistory.date}
          </p>
        </div>
        <div
          className={`ps-3 d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className={`tahoma fs24 m-0 p-0 text-white-50 ${style.date}`}>
            عدد الصفقات
          </p>
          <p className="fs36 m-0 p-0 text-white fw-bold">
            {recommendationHistory.deals}$
          </p>
        </div>
        <div
          className={`ps-3 d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className={`tahoma fs24 m-0 p-0 text-white-50 ${style.date}`}>
            الارباح
          </p>
          <p className="fs36 m-0 p-0 whiteGreen fw-bold">
            {recommendationHistory.profits}$
          </p>
        </div>
        <div
          className={`ps-3 d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className={`tahoma fs24 m-0 p-0 text-white-50 ${style.date}`}>
            الخسائر
          </p>
          <p className="fs36 m-0 p-0 red fw-bold">
            {recommendationHistory.losses}$
          </p>
        </div>
        <div
          className={`ps-3 d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className={`tahoma fs24  m-0 p-0 text-white-50 ${style.date}`}>
            عدد النقاط المحققة
          </p>
          <p className="fs36 m-0 p-0 whiteGreen fw-bold">
            {recommendationHistory.numOfPoints}$
          </p>
        </div>
        <button
          onClick={() => navigate("/recommendation")}
          className={style.btn}
        >
          <MdArrowBackIos />
          <Link className="text-white m-0 p-0" to="/recommendation">
            عرض الكل
          </Link>
        </button>
      </div>
    </div>
  );
};

export default RecommendationHistoryCard;
