import React from "react";
import style from "./recommendationCard.module.css";
import img from "../../assets/Candles1.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const RecommendationCard = ({ data }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage:
          data.Recommendation.type === "sell" ||
          data.Recommendation.type === "بيع"
            ? "linear-gradient(to right  , rgba(126, 0, 0, 1) 40% , rgba(126, 0, 0, 0.3) 100%)"
            : "linear-gradient(to left, rgba(0, 135, 79, 1) 30% , rgba(0, 135, 79, 0.3)100%) ",
        zIndex: 9,
      }}
      className={`px-3 py-2  ${style.mainContainer}`}
    >
      <p className="fs22 text-start fw-bolder text-white  mt-0 mx-0 p-0 text-uppercase shamel">
        {data.title}
      </p>
      <div className="row text-white">
        <div
          className={`col-6 mb-2 d-flex flex-column gap-2 mb-md-0 ${style.stopContainer}`}
        >
          <div className="d-flex gap-1">
            <p className=" m-0 p-0 text-white">
              {i18n.language === "ar" ? "ايقاف" : "stop"}
            </p>
            <p className="m-0 p-0 text-white">: {data.Recommendation.stop}</p>
          </div>
          <div className="d-flex gap-1">
            <p className="m-0 p-0 text-white">
              {i18n.language === "ar" ? "دخول" : "entrance"} :
            </p>
            <p className="m-0 p-0 text-white roboto  mb-4">
              {data.Recommendation.enter}
            </p>
          </div>
        </div>
        <div className="col-6 mb-2 d-flex flex-column   mb-2 mb-md-0">
          <div className="d-flex gap-1">
            <p className=" m-0 p-0 text-white  ">
              {i18n.language === "ar" ? "الثقة" : "trust"} :
            </p>
            <p className="m-0 p-0 text-white">: {data.Recommendation.trust}</p>
          </div>
          <p className="m-0 p-0 text-white roboto">
            {data.Recommendation.status}
          </p>

          <img
            loading="lazy"
            alt="candels"
            src={data.image}
            className={style.mainImg}
          />
        </div>
      </div>
      <div
        className={`${style.goalContainer} ${
          i18n.language === "ar"
            ? style.goalContainerrtl
            : style.goalContainerLtr
        } 
            
        }`}
      >
        <p className="my-0  p-0 roboto d-inline-block text-white p-2">
          {i18n.language === "ar" ? "الهدف" : "goal"} :{" "}
        </p>
        <p className="my-0  p-0 roboto d-inline-block text-white">
          {data.Recommendation.Goal[0].goal}
        </p>
      </div>
      <div className={`p-2 ${style.btnContainer}`}>
        <button
          onClick={() => navigate(`/deals/${data.id}`)}
          className={`${style.btn} ${style.blue}`}
        >
          {i18n.language === "ar" ? (
            <MdOutlineArrowBackIos size={20} />
          ) : (
            <IoIosArrowForward size={20} />
          )}
          <p className="m-0 p-0">{data.Recommendation.type}</p>
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;
