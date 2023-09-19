import React from "react";
import style from "./HistoryDetails.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const HistoryDetails = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={`${style.mainContainer} tahoma mb-3 fs18 d-flex justify-content-center  justify-content-md-between align-items-center gap-3 gap-md-0 flex-wrap`}
      >
        <p className="m-0 p-0 tahoma fs18 ">العملة</p>
        <p className="m-0 p-0 tahoma fs18 ">تاريخ التوصية</p>
        <p className="m-0 p-0 tahoma fs18 ">نوع الصفقة</p>
        <p className="m-0 p-0 tahoma fs18 ">حالة الصفقة</p>
        <p className="m-0 p-0 tahoma fs18 ">عدد النقاط المحققة</p>
        <p className="m-0 p-0 tahoma fs18 ">معاينة الصفقة</p>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${style.mainContainer} mb-4 tahoma fs18 d-flex justify-content-center justify-content-md-between align-items-center gap-5 flex-wrap`}
        >
          <p className="m-0 p-0 tahoma ">{item.currency}</p>
          <p className="m-0 p-0 tahoma ">{item.date}</p>
          <p
            className={`m-0 p-0 tahoma ${
              item.type === "شراء" ? "green" : null
            }`}
          >
            {item.type}
          </p>
          <p className="m-0 p-0 tahoma ">{item.state}</p>
          <p className="m-0 p-0 green  tahoma">{item.number}</p>
          <button
            onClick={() => navigate("/deals")}
            className={`book fs18 ${style.btn}`}
          >
            <MdOutlineArrowBackIosNew />
            <span className="mt-1 ">{item.btnText}</span>
          </button>
          <div
            className={`${style.arrowContainer} ${
              item.type === "شراء" ? style.green : style.red
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default HistoryDetails;
