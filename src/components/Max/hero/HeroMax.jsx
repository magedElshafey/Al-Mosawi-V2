import React, { useState } from "react";
import style from "./heroMax.module.css";
const HeroMax = () => {
  const [showMain, setShowMain] = useState(true);
  const [showMax, setShowMax] = useState(false);
  return (
    <div className={`mb-5 ${style.mainContainer}`}>
      <div className="w-100 z-3 container">
        <p className="mx-0  fw-bold d-inline-block text-white fs36">الحسابات</p>
        <p
          className={`mx-0 fw-bold  p-0 d-inline-block whiteGreen fs52 ${style.greenWord}`}
        >
          {showMain ? "الأساسية" : "MAX"}
        </p>
        <div className="mt-3 text-white fs24">
          غير نظرتك في التداول .. و تداول بالحسابات{" "}
          <span className="fw-bold whiteGreen">
            {showMain ? "الأساسية" : "MAX"} ذات النظام المميز
          </span>
          <p>حسابات صممت خصيصا لتوفر لك نص تجريبي يستبدل بالنص الأصل</p>
        </div>
        <div
          className={`${style.btnContainer} fs24 d-flex align-items-center gap-3 justify-content-center`}
        >
          <button
            onClick={() => {
              setShowMain(false);
              setShowMax(true);
            }}
            className={`${style.btn}  text-white ${
              showMax ? style.active : null
            }`}
          >
            حسابات <span className="green text-uppercase">max</span>
          </button>
          <button
            onClick={() => {
              setShowMain(true);
              setShowMax(false);
            }}
            className={`${style.btn} text-white ${
              showMain ? style.active : null
            }`}
          >
            الحسابات الأساسية
          </button>
        </div>
        <p className={`m-0 p-0 ${style.pageName}`}>
          {showMain ? "الاساسية" : "MAX"}
        </p>
      </div>
    </div>
  );
};

export default HeroMax;
