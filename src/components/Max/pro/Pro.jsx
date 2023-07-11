import React from "react";
import style from "./pro.module.css";
import { proCards } from "../../../fakers/data";
import check from "../../../assets/check.png";
import { MdArrowBackIosNew } from "react-icons/md";
const Pro = () => {
  return (
    <div className="row px-2 py-5 gap-5 justify-content-center ">
      {proCards.map((item, index) => (
        <div
          key={index}
          className={`p-2 col-12 col-md-5 ${style.mainContainer}`}
        >
          <div className="d-flex flex-column align-items-center justify-content-center mb-3">
            <div className="fw-bold">
              <p
                className={`${style.title} green fs36 my-0 mx-1 p-0 d-inline-block`}
              >
                {item.title}
              </p>
              <p className={`${style.pro} fs28 m-0 p-0 d-inline-block`}>pro</p>
            </div>
            <p className="m-0 p-0 fs22 fw-bold roboto">{item.desc}</p>
          </div>
          {item.details.map((item, index) => (
            <div key={index} className="d-flex align-items-center gap-2 mb-3">
              <img
                loading="lazy"
                className={style.check}
                alt="check/img"
                src={check}
              />
              <p className="m-0 p-0">{item}</p>
            </div>
          ))}
          <div className="d-flex justify-content-center mt-5">
            <button
              className={`text-white p-2 gap-2 ${style.btn} d-flex align-items-center justify-content-center `}
            >
              <MdArrowBackIosNew size={20} />
              <span className="mt-1">إنشاء حساب</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pro;
