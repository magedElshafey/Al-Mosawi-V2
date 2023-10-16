import React from "react";
import ReactPlayer from "react-player";

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
  btnText,
  isSmallHero,
  isMediumHero,
  isBigHero,
  isRow,
  secondImg,
  intro,
  bigDesc,
  isBtn,
  video,
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
                  <p
                    className=" shamel fw-bolder m-0 p-0 "
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                ) : null}

                <div dangerouslySetInnerHTML={{ __html: desc }} />

                {isBtn && (
                  <div className="py-2 mt-4">
                    <button
                      className={`book ${style.btnTwo}`}
                      onClick={onClick}
                    >
                      <MdOutlineArrowBackIos size={20} />
                      <span className="mt-1">{btnText}</span>
                    </button>
                  </div>
                )}
                {pageName ? (
                  <p
                    className={`z-3 ${
                      i18n.language === "ar"
                        ? style.pageNamear
                        : style.pageNameen
                    } `}
                  >
                    {pageName}
                  </p>
                ) : null}
              </div>
              <div
                className={`${style.secondImgContainer} col-12 col-md-6 mb-3 mb-md-0`}
              >
                <iframe
                  src="https://player.vimeo.com/video/867338027"
                  className={style.videoFrame}
                  allow="autoplay; fullscreen;"
                  allowFullScreen
                ></iframe>
                {/**                <AiOutlinePlayCircle size={70} className={style.videoPlayer} />
                 */}
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
                <p
                  className=" shamel fw-bolder m-0 p-0 "
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              ) : null}

              <div
                className={`text-white ${style.desc}`}
                dangerouslySetInnerHTML={{ __html: desc }}
              />

              {pageName ? (
                <p
                  className={`z-3 ${
                    i18n.language === "ar" ? style.pageNamear : style.pageNameen
                  } `}
                >
                  {pageName}
                </p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
