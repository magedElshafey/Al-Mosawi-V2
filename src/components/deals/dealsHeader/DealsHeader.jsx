import React from "react";
import { dealsHeader } from "../../../fakers/data.js";
import style from "./DealsHeader.module.css";
const DealsHeader = () => {
  return (
    <div
      className={`z-3 ${style.mainContainer} px-2 py-4 d-flex justify-content-center align-items-center gap-5 flex-wrap`}
    >
      {/**stop losing*/}
      <div className="z-3">
        <span className="text-white roboto fs20">إيقاف الخسارة :</span>
        <span className="red roboto fs24">{dealsHeader.stopLosees}</span>
      </div>
      <div className="z-3">
        <span className="text-white roboto fs20 ">الهدف3 :</span>
        <span className="green roboto fs24">{dealsHeader.goalThree}</span>
      </div>
      <div className="z-3">
        <span className="text-white roboto fs20 ">الهدف2 :</span>
        <span className="green roboto fs24">{dealsHeader.goalTwo}</span>
      </div>
      <div className="z-3">
        <span className="text-white roboto fs20">الهدف1 :</span>
        <span className="green roboto fs24">{dealsHeader.goalOne}</span>
      </div>
      <div className="z-3">
        <span className={`text-white roboto fs20`}>الشراء :</span>
        <span className="green roboto fs24">{dealsHeader.buying}</span>
      </div>

      <div
        className={`p-0 m-0 d-flex flex-column gap-2 align-items-center text-white  ${style.border} position-relative`}
      >
        <h4 className="m-0 p-0 fw-bolder fs25 text-uppercase">bitcoin</h4>
        <span className="text-white roboto fs20">{dealsHeader.bitcoin}</span>
      </div>
    </div>
  );
};

export default DealsHeader;
