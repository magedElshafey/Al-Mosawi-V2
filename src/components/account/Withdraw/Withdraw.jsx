import React from "react";
import style from "./withdraw.module.css";
import gift from "../../../assets/gift.png";
import DarkGreenTitle from "../../utils/darkGreenTitle/DarkGreenTitle";
const Withdraw = ({ monthlyWithdraw }) => {
  return (
    <div
      className={`px-3 py-2 row justify-content-center align-items-center gap-5 ${style.mainContainer}`}
    >
      {/*img*/}
      <div className={`col-12 col-md-3 ${style.imgContainer}`}>
        <img
          alt="gift/img"
          loading="lazy"
          src={gift}
          className={style.mainImg}
        />
      </div>
      <div className="col-12 col-md-8 text-center text-md-end">
        <p className="fs36 mx-0 mt-0 p-0 mb-1 fw-bold ">
          {monthlyWithdraw.title}
        </p>
        <p className="fs22 roboto mx-0 mt-0 mb-1 p-0   w-75">
          {monthlyWithdraw.desc}
        </p>
        <div className={`p-2 ${style.mainContainer}`}>
          <p className="fs22 roboto mx-0 mt-0 mb-1 p-0   w-75">
            {monthlyWithdraw.winnerText}
          </p>
          <p className="fs30 m-0 p-0 fw-bold green">
            {monthlyWithdraw.winnerName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
