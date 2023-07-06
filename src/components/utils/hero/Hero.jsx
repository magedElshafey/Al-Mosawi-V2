import React from "react";
import style from "./Hero.module.css";
import GreentTitle from "../greenTitle/GreentTitle";
import videoPlayer from "../../../assets/Component 31 – 1.svg";
import { MdArrowBackIosNew } from "react-icons/md";
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
}) => {
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
            <div className="mt-5 pt-5 row align-items-center">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                {intro && (
                  <p className="mx-0 p-0 pb-3 mb-2 text-white">{intro}</p>
                )}
                {title ? <GreentTitle title={title} /> : null}

                {desc ? (
                  <p
                    className={`mx-0 my-3 p-0 text-white lh ${
                      bigDesc ? "fs-2 fw-bold" : null
                    }`}
                  >
                    {desc}{" "}
                    {redTitle ? (
                      <p className={`d-inline-block m-0 p-0 ${style.red}`}>
                        {redTitle}
                      </p>
                    ) : null}
                  </p>
                ) : null}
                {desc2 ? (
                  <p className="mx-0 mt-3 mb-1 p-0 lh text-white">{desc2}</p>
                ) : null}
                {desc3 ? (
                  <p className="m-0 p-0 lh text-white">{desc3}</p>
                ) : null}
                {isBtn && (
                  <div className="py-3">
                    <button className={style.btn}>
                      <MdArrowBackIosNew />
                      <span className="mt-1 d-inline-block">
                        الباقات المتاحة
                      </span>
                    </button>
                  </div>
                )}
                {pageName ? <p className={style.pageName}>{pageName}</p> : null}
              </div>
              <div
                className={`${style.secondImgContainer} col-12 col-md-6 mb-4 mb-md-0`}
              >
                <img
                  className={style.secondImg}
                  alt="img/img"
                  loading="lazy"
                  src={secondImg}
                />
                <img
                  loading="lazy"
                  src={videoPlayer}
                  alt="video/img"
                  className={style.videoIcon}
                />
              </div>
            </div>
          ) : (
            <div className="mt-5 pt-5">
              {title ? <GreentTitle title={title} /> : null}

              {desc ? (
                <p
                  className={`d-inline-block mx-2 my-3 p-0 text-white lh ${style.desc}`}
                >
                  {desc}
                </p>
              ) : null}
              {redTitle ? (
                <p className={`d-inline-block m-0 p-0 ${style.red}`}>
                  {redTitle}
                </p>
              ) : null}
              {desc2 ? (
                <p className="mx-0 mt-3 mb-1 p-0 lh text-white">{desc2}</p>
              ) : null}
              {desc3 ? <p className="m-0 p-0 lh text-white">{desc3}</p> : null}
              {pageName ? <p className={style.pageName}>{pageName}</p> : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
