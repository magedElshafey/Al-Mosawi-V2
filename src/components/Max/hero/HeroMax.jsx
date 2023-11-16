import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./heroMax.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const HeroMax = ({
  mainImg,
  maxImg,
  mainTitle,
  maxTitle,
  mainHeaderDescription,
  maxHeaderDescription,
}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [showArabicMain, setShowArabickMain] = useState(false);
  const [showEnglishMain, setShowEnglishMain] = useState(false);
  const [showArabicMax, setShowArabicMax] = useState(true);
  const [showEnglishMax, setShowEnglishMax] = useState(false);
  // handling data from api
  const [img, setImg] = useState(null);
  const [headerTitle, setHeaderTitle] = useState(null);
  const [headerDesc, setHeaderDesc] = useState(null);
  const { test } = useParams();
  useEffect(() => {
    if (test === "max" && i18n.language === "ar") {
      setShowArabicMax(true);
      setShowEnglishMax(false);
      setShowArabickMain(false);
      setShowEnglishMain(false);
      setImg(maxImg);
      setHeaderTitle(maxTitle);
      setHeaderDesc(maxHeaderDescription);
    } else if (test === "max" && i18n.language === "en") {
      setShowEnglishMax(true);
      setShowArabicMax(false);
      setShowArabickMain(false);
      setShowEnglishMain(false);
      setImg(maxImg);
      setHeaderTitle(maxTitle);
      setHeaderDesc(maxHeaderDescription);
    } else if (test === "special" && i18n.language === "ar") {
      setShowArabickMain(true);
      setShowEnglishMain(false);
      setShowEnglishMax(false);
      setShowArabicMax(false);
      setImg(mainImg);
      setHeaderTitle(mainTitle);
      setHeaderDesc(mainHeaderDescription);
    } else if (test === "special" && i18n.language === "en") {
      setShowEnglishMain(true);
      setShowArabickMain(false);
      setShowEnglishMax(false);
      setShowArabicMax(false);
      setImg(mainImg);
      setHeaderTitle(mainTitle);
      setHeaderDesc(mainHeaderDescription);
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
    navigate("/account/max");
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
    navigate("/account/special");
  };
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`mb-5 ${style.mainContainer}`}
    >
      <div className="w-100 z-3 container">
        <p
          className="m-0 p-0"
          dangerouslySetInnerHTML={{ __html: headerTitle }}
        />

        <p
          className={`fw-bolder m-0 p-0 ${style.desc}`}
          dangerouslySetInnerHTML={{ __html: headerDesc }}
        />
        <div
          className={`${style.btnContainer} fs20 d-flex align-items-center gap-3 justify-content-center`}
        >
          <button
            onClick={handleShowMax}
            className={`${style.btn} book text-white ${
              showArabicMax || showEnglishMax ? style.active : null
            }`}
          >
            <p
              className="m-0 p-0 text-center"
              dangerouslySetInnerHTML={{ __html: maxTitle }}
            />
          </button>
          <button
            onClick={handleShowMain}
            className={`${style.btn}  ${
              showArabicMain || showEnglishMain ? style.active : null
            }`}
          >
            <p
              className="m-0 p-0 text-center"
              dangerouslySetInnerHTML={{ __html: mainTitle }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMax;
