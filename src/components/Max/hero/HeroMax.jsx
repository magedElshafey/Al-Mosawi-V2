import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./heroMax.module.css";
import { useTranslation } from "react-i18next";
const HeroMax = () => {
  const { t, i18n } = useTranslation();
  const [showArabicMain, setShowArabickMain] = useState(false);
  const [showEnglishMain, setShowEnglishMain] = useState(false);
  const [showArabicMax, setShowArabicMax] = useState(true);
  const [showEnglishMax, setShowEnglishMax] = useState(false);
  const { test } = useParams();
  useEffect(() => {
    if (test === "max" && i18n.language === "ar") {
      setShowArabicMax(true);
      setShowEnglishMax(false);
      setShowArabickMain(false);
      setShowEnglishMain(false);
    } else if (test === "max" && i18n.language === "en") {
      setShowEnglishMax(true);
      setShowArabicMax(false);
      setShowArabickMain(false);
      setShowEnglishMain(false);
    } else if (test === "special" && i18n.language === "ar") {
      setShowArabickMain(true);
      setShowEnglishMain(false);
      setShowEnglishMax(false);
      setShowArabicMax(false);
    } else if (test === "special" && i18n.language === "en") {
      setShowEnglishMain(true);
      setShowArabickMain(false);
      setShowEnglishMax(false);
      setShowArabicMax(false);
    } else {
      return false;
    }
  }, [test, i18n]);
  const handleShowMax = () => {
    if (i18n.language === "ar") {
      setShowArabicMax(true);
      setShowEnglishMax(false);
      setShowArabickMain(false);
      setShowEnglishMain(false);
    } else if (i18n.language === "en") {
      setShowEnglishMax(true);
      setShowArabicMax(false);
      setShowArabickMain(false);
      setShowEnglishMain(false);
    }
  };
  const handleShowMain = () => {
    if (i18n.language === "ar") {
      setShowArabickMain(true);
      setShowEnglishMain(false);
      setShowArabicMax(false);
      setShowEnglishMax(false);
    } else if (i18n.language === "en") {
      setShowEnglishMain(true);
      setShowArabickMain(false);
      setShowEnglishMax(false);
      setShowArabicMax(false);
    }
  };
  return (
    <div className={`mb-5 ${style.mainContainer}`}>
      <div className="w-100 z-3 container">
        <p className="mx-0  fw-bold d-inline-block text-white fs36 shamel">
          الحسابات
        </p>
        <p
          className={`mx-1 fw-bold  p-0 d-inline-block whiteGreen shamel fs48 ${style.greenWord}`}
        >
          {showArabicMax || showEnglishMax ? "MAX" : null}
        </p>
        <p
          className={`mx-1 fw-bold  p-0 d-inline-block whiteGreen shamel fs48 ${style.greenWord}`}
        >
          {showArabicMain && "الأساسية"}
        </p>
        <p
          className={`mx-1 fw-bold  p-0 d-inline-block whiteGreen shamel fs48 ${style.greenWord}`}
        >
          {showEnglishMain && "the basic"}
        </p>
        <div className={`mt-2 book text-white fs20 ${style.desc}`}>
          غير نظرتك في التداول .. و تداول بالحسابات{" "}
          <span className="fw-bold shamel whiteGreen">
            {showArabicMax || showEnglishMax ? "MAX" : null}
          </span>
          <span className="fw-bold shamel whiteGreen">
            {showArabicMain && "الأساسية"}
          </span>
          <span className="fw-bold shamel whiteGreen">
            {showEnglishMain && "the basic"}
          </span>
          <span className="mx-2 fw-bold shamel whiteGreen">
            ذات النظام المميز
          </span>
          <p className="">
            حسابات صممت خصيصا لتوفر لك نص تجريبي يستبدل بالنص الأصل
          </p>
        </div>
        <div
          className={`${style.btnContainer} fs20 d-flex align-items-center gap-3 justify-content-center`}
        >
          <button
            onClick={handleShowMax}
            className={`${style.btn} book text-white ${
              showArabicMax || showEnglishMax ? style.active : null
            }`}
          >
            حسابات <span className="green shamel text-uppercase">max</span>
          </button>
          <button
            onClick={handleShowMain}
            className={`${style.btn} shamel text-white ${
              showArabicMain || showEnglishMain ? style.active : null
            }`}
          >
            {showArabicMain || showArabicMax
              ? "الحسابات الاساسية"
              : "the basic account"}
          </button>
        </div>
        <p className={`m-0 p-0 ${style.pageName} shamel`}>
          {showArabicMax || showEnglishMax ? "MAX" : null}
          {showArabicMain && "الاساسية"}
          {showEnglishMain && "the basic"}
        </p>
      </div>
    </div>
  );
};

export default HeroMax;
