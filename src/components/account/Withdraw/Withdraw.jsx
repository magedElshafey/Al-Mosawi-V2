import React from "react";
import style from "./withdraw.module.css";
import gift from "../../../assets/gift.png";
const Withdraw = ({ monthlyWithdraw }) => {
  return (
    <div
      className={`px-3 py-4 row justify-content-center align-items-center gap-5 ${style.mainContainer}`}
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
        <p className="fs26 shamel mx-0 mt-0 p-0 mb-1 fw-bold ">
          {monthlyWithdraw.title}
        </p>
        <p className={`mx-0 mt-0 mb-4 p-0 ${style.width}`}>
          {monthlyWithdraw.desc}
        </p>
        <div className={`p-3 ${style.mainContainer}`}>
          <p className={`mx-0 mt-0 mb-2 p-0 `}>{monthlyWithdraw.winnerText}</p>
          <p className="fs20 shamel m-0 p-0 fw-bold green">
            {monthlyWithdraw.winnerName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
