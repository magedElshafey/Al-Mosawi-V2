import React from "react";
import style from "./HistoryFilter.module.css";
import { AiOutlineSearch } from "react-icons/ai";
const HistoryFilter = () => {
  return (
    <div className="d-flex mb-4 align-items-center justify-content-between flex-column flex-md-row">
      <p className="z-3 m-0 p-0 text-white fw-bold fs36">تاريخ التوصيات</p>
      <div className="d-flex align-items-center flex-wrap gap-3">
        <select className={`fs18 tahoma ${style.box}`}>
          <option>نوع الصفقة - الكل</option>
          <option>نوع الصفقة - الكل</option>
          <option>نوع الصفقة - الكل</option>
          <option>نوع الصفقة - الكل</option>
          <option>نوع الصفقة - الكل</option>
        </select>
        <select className={`fs18 tahoma ${style.box}`}>
          <option>حالة الصفقة - الكل</option>
          <option>حالة الصفقة - الكل</option>
          <option>حالة الصفقة - الكل</option>
          <option>حالة الصفقة - الكل</option>
          <option>حالة الصفقة - الكل</option>
        </select>
        <div className={`fs18 tahoma  bg-light ${style.box}`}>
          4/7/1998 - 4/7/2023
        </div>
        <button className={`${style.box} ${style.btn}`}>
          <AiOutlineSearch />
          <span className="mx-0 mt-1 p-0">عرض النتائج</span>
        </button>
      </div>
    </div>
  );
};

export default HistoryFilter;
