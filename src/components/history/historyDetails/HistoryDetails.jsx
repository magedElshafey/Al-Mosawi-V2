import React from "react";
import style from "./HistoryDetails.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const HistoryDetails = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={`${style.mainContainer} tahoma mb-5 fs18 d-flex justify-content-start justify-content-md-center align-items-center gap-5 flex-wrap`}
      >
        <p className="m-0 p-0 ">العملة</p>
        <p className="m-0 p-0 ">تاريخ التوصية</p>
        <p className="m-0 p-0 ">نوع الصفقة</p>
        <p className="m-0 p-0 ">حالة الصفقة</p>
        <p className="m-0 p-0 ">عدد النقاط المحققة</p>
        <p className="m-0 p-0 ">معاينة الصفقة</p>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${style.mainContainer} mb-4 tahoma fs18 d-flex justify-content-center justify-content-md-between align-items-center gap-5 flex-wrap`}
        >
          <p className="m-0 p-0 ">{item.currency}</p>
          <p className="m-0 p-0 ">{item.date}</p>
          <p className={`m-0 p-0 ${item.type === "شراء" ? "green" : null}`}>
            {item.type}
          </p>
          <p className="m-0 p-0 ">{item.state}</p>
          <p className="m-0 p-0 green ">{item.number}</p>
          <button
            onClick={() => navigate("/deals")}
            className={`tahoma fs18 ${style.btn}`}
          >
            <MdOutlineArrowBackIosNew />
            <span className="mt-1">عرض النتائج</span>
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
