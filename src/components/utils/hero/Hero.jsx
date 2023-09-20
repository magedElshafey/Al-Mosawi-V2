import React from "react";
import style from "./Hero.module.css";
import videoPlayer from "../../../assets/Component 31 – 1.svg";
import BTN from "../../utils/btn/BTN";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
const Hero = ({
  img,
  title,
  pageName,
  desc,
  redTitle,
  desc2,
  desc3,
  isSmallHero,
  isMediumHero,
  isBigHero,
  isRow,
  secondImg,
  intro,
  bigDesc,
  isBtn,
  action,
  onClick,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${style.imgContainer} ${
        isMediumHero && !isBigHero && !isSmallHero && style.mediumHeight
      } ${isSmallHero && !isBigHero && !isMediumHero && style.smallHeight} ${
        isBigHero && !isSmallHero && !isMediumHero && style.bigHeight
      }`}
    >
      <img loading="lazy" alt="hero/img" src={img} className={style.mainImg} />
      <div className={style.overlay}>
        <div className="container">
          {isRow ? (
            <div className="pt-4 row align-items-center">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                {intro && (
                  <p
                    className={`mx-0 p-0 pb-2 book  text-white ${style.intro}`}
                  >
                    {intro}
                  </p>
                )}
                {title ? (
                  <p className="fs28 shamel fw-bolder m-0 p-0 whiteGreen">
                    {title}
                  </p>
                ) : null}

                <div dangerouslySetInnerHTML={{ __html: desc }} />
                {desc2 ? (
                  <p
                    className={`mx-0 mt-2 mb-1 p-0 book  text-white ${style.desc3}`}
                  >
                    {desc2}
                  </p>
                ) : null}
                {desc3 ? (
                  <p className={`m-0 p-0 book  text-white ${style.desc2}`}>
                    {desc3}
                  </p>
                ) : null}
                {isBtn && (
                  <div className="py-2 mt-4">
                    <button
                      className={`book ${style.btnTwo}`}
                      onClick={onClick}
                    >
                      <MdOutlineArrowBackIos size={20} />
                      <span className="mt-1">الباقات المتاحة</span>
                    </button>
                  </div>
                )}
                {pageName ? (
                  <p className={`${style.pageName}`}>{pageName}</p>
                ) : null}
              </div>
              <div
                className={`${style.secondImgContainer} col-12 col-md-6 mb-3 mb-md-0`}
              >
                <img
                  className={style.secondImg}
                  alt="img/img"
                  loading="lazy"
                  src={secondImg}
                />
                <AiOutlinePlayCircle size={70} className={style.videoPlayer} />
              </div>
            </div>
          ) : (
            <div className="pt-3">
              {intro && (
                <p className={`mx-0 p-0 pb-2 book  text-white ${style.intro}`}>
                  {intro}
                </p>
              )}
              {title ? (
                <p className="fs26 shamel fw-bolder my-0  ms-0  p-0 whiteGreen shamel">
                  {title}
                </p>
              ) : null}

              <div
                className={`text-white ${style.desc}`}
                dangerouslySetInnerHTML={{ __html: desc }}
              />

              {pageName ? (
                <p className={` ${style.pageName}`}>{pageName}</p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
