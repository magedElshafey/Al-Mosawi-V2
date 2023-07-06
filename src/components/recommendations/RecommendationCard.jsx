import React from "react";
import style from "./recommendationCard.module.css";
import img from "../../assets/Candles1.png";
import { MdArrowBackIosNew } from "react-icons/md";
const RecommendationCard = ({ data }) => {
  return (
    <div
      style={{ backgroundImage: data.bg, zIndex: 9 }}
      className={`p-2  ${style.mainContainer}`}
    >
      <p className="fs24 text-start text-white mb-1 mt-0 mx-0 p-0 text-uppercase">
        bitcoin
      </p>
      <div className="row  text-white">
        <div className={`col-12 col-md-6 mb-3 mb-md-0 ${style.stopContainer}`}>
          <p className=" d-inline-block mx-0 mb-3 mt-0 p-0 text-white roboto fs18">
            ايقاف
          </p>
          <p className=" d-inline-block me-1 mx-0 mb-3 mt-0 p-0 text-white roboto fs18">
            : {data.stop}
          </p>
          <p className=" d-inline-block  mx-0 mb-3 mt-0 p-0 text-white roboto fs18">
            دخول
          </p>
          <p className=" d-inline-block me-1 mx-0 mb-3 mt-0 p-0 text-white roboto fs18">
            : {data.enter}
          </p>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0 ">
          <p className="m-0 p-0 fs20 roboto">الثقة : {data.confidance}</p>
          <p className="m-0 p-0 fs20 roboto "> انتهت</p>
          <img
            loading="lazy"
            src={img}
            alt="Candles/img"
            className={style.mainImg}
          />
        </div>
      </div>
      <div className={style.btnContainer}>
        <button className={style.btn}>
          <MdArrowBackIosNew size={15} className="text-white" />
          <span className="mx-0 mb-0 p-0 mt-1"> {data.btnText}</span>
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;
/*
   <div
      className={`col-12 col-md-5 col-lg-2 p-3 ${style.mainContainer} text-center `}
    >
      <div className={`${style.secondContainer} row align-items-center `}>
        <div className="fs col-12 col-md-7 mb-3 mb-md-0">
          
          <p className={` mx-0 mb-4 mt-0 text-white ${style.goalContainer}`}>
            الهدف : {data.goal}
          </p>
         
        </div>
        <div className=" col-12 col-md-5 mb-3 mb-md-0">
          <p className="text-white fw-bold mx-0 p-0 mb-3 text-uppercase">
            bitcoin
          </p>
          <div className="d-flex flex-column align-items-center fs gap-2 text-white">
          
          </div>
         
        </div>
      </div>
    </div>
*/
/*
 
*/
