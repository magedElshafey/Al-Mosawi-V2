import React from "react";
import style from "./recommendationCard.module.css";
import img from "../../assets/Candles1.png";
import { useNavigate } from "react-router-dom";
const RecommendationCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: data.bg, zIndex: 9 }}
      className={`px-3 py-2  ${style.mainContainer}`}
    >
      <p className="fs22 text-start fw-bolder text-white  mt-0 mx-0 p-0 text-uppercase shamel">
        bitcoin
      </p>
      <div className="row text-white align-items-center">
        <div
          className={`col-6 mb-2 d-flex gap-1 mb-md-0 ${style.stopContainer}`}
        >
          <p className=" m-0 p-0 text-white  ">ايقاف</p>
          <p className="m-0 p-0 text-white">: {data.stop}</p>
        </div>
        <div className="col-6 mb-2 d-flex gap-1 mb-2 mb-md-0">
          <p className="m-0 p-0 text-white roboto ">دخول</p>
          <p className="m-0 p-0 text-white roboto ">: {data.enter}</p>
        </div>
      </div>
      <div className={style.goalContainer}>
        <p className="my-0  p-0 roboto d-inline-block text-white p-2">
          الهدف :{" "}
        </p>
        <p className="my-0  p-0 roboto d-inline-block text-white p-2">
          {data.goal}
        </p>
      </div>
      <div className={`p-2 ${style.btnContainer}`}>
        <button onClick={() => navigate("/deals")} className={style.btn}>
          {data.btnText}
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;
