import React from "react";
import style from "./calcDetails.module.css";
const ForexCalcDetails = () => {
  return (
    <div className={` ${style.mainContainer}  py-4 col-12`}>
      <p className="fw-bold mx-0 mt-0 p-0 mb-2 fs-5">حاسبة الفوركس</p>
      <p className="mx-0 mt-0 p-0 mb-2">
        احسب الهامش المطلوب و سعر النقطة و فوائد التثبيت لنقطة معينة{" "}
      </p>
      <div className="row mt-4">
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
          <label className="d-block  mb-1" htmlFor="cuurancy">
            عملة الحساب
          </label>
          <select id="cuurancy" className="inp rounded">
            <option>EUR</option>
            <option>USD</option>
            <option>SAR</option>
            <option>L.E</option>
          </select>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
          <label className="d-block  mb-1" htmlFor="financial">
            الأداة المالية
          </label>
          <select id="financial" className="inp rounded">
            <option>EUR/USD</option>
            <option>SAR/L.E</option>
          </select>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
          <label className="d-block  mb-1" htmlFor="ratio">
            الرافعة المالية للحساب
          </label>
          <select id="ratio" className="inp rounded">
            <option>1:1</option>
            <option>1:2</option>
            <option>5:2</option>
          </select>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
          <label className="d-block  mb-1" htmlFor="volum">
            حجم اللوت
          </label>
          <input type="number" className="inp rounded" id="volum" />
          <div className="my-3 text-start">
            <input className="d-inline-block ms-2" type="checkbox" id="calc" />
            <label htmlFor="calc" className="text-black-50 d-inline-block pb-1">
              حساب الربح
            </label>
          </div>
          <button className={style.btn}>احسب</button>
          <div
            className={`w-100 my-4 ${style.beniftsContainer} d-flex justify-content-between align-items-center`}
          >
            <div className="d-flex flex-column align-items-center gap-2">
              <p className="m-0 p-0 fs2"> فوائد تثبيت الشراء</p>
              <h4 className="m-0 p-0 fw-bolder fs-5">0.00</h4>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <p className="m-0 p-0 fs2"> فوائد تثبيت البيع</p>
              <h4 className="m-0 p-0 fw-bolder fs-5">0.00</h4>
            </div>
          </div>
          <div className="w-100 my-3 d-flex justify-content-between align-items-center ">
            <p className="m-0 p-0 fs2">نوع فوائد التثبيت</p>
            <p className="m-0 p-0 fs2"> فوائد تثبيت 3 أيام</p>
          </div>
        </div>
      </div>
      <div className={`pt-3  row  ${style.others}`}>
        <div className="col-12 col-md-6 mb-3 mb-md-0 text-black-50 text-center">
          قيمة فوائد التبييت بعملة الحساب
        </div>
        <div className="col-12 col-md-6 text-black-50 text-center">
          حسابات اخري
        </div>
      </div>
      <div className="mt-5 mb-2 row gap-4 justify-content-center">
        <div
          className={`p-2 col-12 col-md-5 col-lg-2 mb-3 mb-md-0 d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className="text-black-50 m-0 p-0">فوائد التثبيت شراء</p>
          <p className="m-0 p-0 fw-bold fs-5">0.00</p>
        </div>
        <div
          className={`p-2 col-12 col-md-5 col-lg-2 mb-3 mb-md-0 d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className="text-black-50 m-0 p-0">فوائد التثبيت بيع</p>
          <p className="m-0 p-0 fw-bold fs-5">0.00</p>
        </div>
        <div
          className={`p-2 col-12 col-md-5 col-lg-2  d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className="text-black-50 m-0 p-0">الهامش المطلوب</p>
          <p className="m-0 p-0 fw-bold fs-5">0.00</p>
        </div>
        <div
          className={`p-2 col-12 col-md-5 col-lg-2  d-flex flex-column align-items-center gap-2 ${style.border}`}
        >
          <p className="text-black-50 m-0 p-0">قيمة النقطة</p>
          <p className="m-0 p-0 fw-bold fs-5">0.00</p>
        </div>
      </div>
    </div>
  );
};

export default ForexCalcDetails;
