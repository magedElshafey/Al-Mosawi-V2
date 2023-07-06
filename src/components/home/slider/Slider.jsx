import React, { useState } from "react";
import style from "./slider.module.css";
import { MdArrowBackIos } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
import GreenTitle from "../../utils/greenTitle/GreentTitle";
import NormalBtn from "./normalBtn/NormalBtn";

import group from "../../../assets/Group 73339.svg";
import rightGroup from "../../../assets/Group 36.svg";
const Slider = ({ slider }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isPreviousButtonDisabled = currentSlide === 0;
  const isNextButtonDisabled = currentSlide === slider.length - 1;

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slider.length - 1 : prevSlide - 1
    );
  };
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slider.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className={style.mainContainer}>
      <div className="container pt-5 mt-5">
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className={`mt-5 ${style.imgContainer}`}
        >
          <img
            alt="slider/img"
            loading="lazy"
            src={slider[currentSlide].slide}
            className={style.mainImg}
          />
          <div className={style.overlay}>
            <div className="pr d-flex flex-column  gap-3 text-white justify-content-center mt200">
              {slider[currentSlide].intro ? (
                <div className="d-flex align-items-center gap-2 text-white">
                  <p className={`p-0 m-0 ${style.dot}`}></p>
                  <p className="p-0 m-0">{slider[currentSlide].intro}</p>
                </div>
              ) : null}
              {slider[currentSlide].greenTitle === "Prochart" ? (
                <div className="d-flex flex-column gap-1">
                  <p className="mx-0 mt-2 mb-3 p-0 fw-bold fs-2">
                    {slider[currentSlide].title}
                  </p>
                  <GreenTitle
                    isSlider={true}
                    title={slider[currentSlide].greenTitle}
                  />
                </div>
              ) : (
                <div
                  className={` d-flex flex-wrap align-items-center gap-2 ${style.textContainer}`}
                >
                  <p className="mx-0 mt-2 mb-3 p-0 fw-bold fs-2">
                    {slider[currentSlide].title}
                  </p>
                  <GreenTitle
                    isSlider={true}
                    title={slider[currentSlide].greenTitle}
                  />
                </div>
              )}
              <p className="m-0 p-0 lh w-50">{slider[currentSlide].desc}</p>
              <div>
                {slider[currentSlide].desc2 ? (
                  <p className="text-white d-inline-block mx-2">
                    {slider[currentSlide].desc2}
                  </p>
                ) : null}
                {slider[currentSlide].greenTitleTwo ? (
                  <p className="whiteGreen text-uppercase d-inline-block mx-1">
                    {slider[currentSlide].greenTitleTwo}
                  </p>
                ) : null}
                {slider[currentSlide].desc2 &&
                  slider[currentSlide].greenTitleTwo && (
                    <p className="d-inline-block text-white mx-1 my-0 p-0">
                      لا يفوتك صفقاتنا
                    </p>
                  )}
              </div>
              {slider[currentSlide].normalBtn &&
                (slider[currentSlide].btnText === "افتح حساب MAX" ? (
                  <button className={style.maxBtn}>
                    <div className={style.arrowContainer}>
                      <MdArrowBackIos />
                    </div>
                    <span className="d-inline-block mt-1">
                      افتح حساب <span className={style.text}>MAX</span>
                    </span>
                  </button>
                ) : (
                  <NormalBtn text={slider[currentSlide].btnText} />
                ))}
              {!slider[currentSlide].normalBtn && (
                <button className={style.videoBtn}>
                  <div className={style.videoContainer}>
                    <TbPlayerPlay className={style.videoIcon} />
                  </div>
                  <span className="text-white">شاهدها الان</span>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="py-5 d-flex justify-content-between align-items-center">
          <button
            disabled={isNextButtonDisabled}
            className={style.btn}
            onClick={goToNextSlide}
          >
            <img
              className={`pointer ${style.nextBtn}`}
              alt="next/img"
              src={group}
              loading="lazy"
            />
            <p className={`text-white m-0 p-0  pointer  ${style.title}`}>
              {slider[currentSlide].nextText}
            </p>
          </button>
          <div className={`m-0 p-0`}>
            <span className="text-white-50">{`0${slider.length}`} /</span>
            <span className={`${style.number} text-white`}>{`0${
              currentSlide + 1
            }`}</span>
          </div>
          <button
            onClick={goToPreviousSlide}
            className={style.btn}
            disabled={isPreviousButtonDisabled}
          >
            <p className={`text-white  pointer m-0 p-0  ${style.title}`}>
              {slider[currentSlide].prevText}
            </p>
            <img
              className={`pointer ${style.prevBtn}`}
              alt="prev/img"
              src={rightGroup}
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
/*
   
*/
