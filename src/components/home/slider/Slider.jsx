import React, { useState, useEffect, useRef } from "react";
import style from "./slider.module.css";
import { MdArrowBackIos } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
import NormalBtn from "./normalBtn/NormalBtn";
import group from "../../../assets/Group 73339.svg";
import rightGroup from "../../../assets/Group 36.svg";
import { useTranslation } from "react-i18next";
const Slider = ({ slider }) => {
  const { i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const isPreviousButtonDisabled = currentSlide === 0;
  const isNextButtonDisabled = currentSlide === slider.length - 1;
  const prevBtn = useRef();
  const nextBtn = useRef(null);
  const goToNextSlide = () => {
    if (currentSlide === slider.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  const goToPreviousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slider.length - 1);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };
  // handle slider autoplay
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (currentSlide < slider.length - 1) {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 5000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentSlide, slider.length]);
  return (
    <div className={style.mainContainer}>
      <div className="container pt-4 mt-4">
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className={` ${style.imgContainer}`}
        >
          <img
            alt="slider/img"
            loading="lazy"
            src={slider[currentSlide].image}
            className={style.mainImg}
          />
          <div className={style.overlay}>
            <div
              className={`d-flex flex-column text-white justify-content-center mt300  pb-4 ${
                i18n.language === "ar" ? "pr" : "pl"
              }`}
            >
              <p className="text-white d-inline-block m-0 p-0 fw-bold shamel  fs28">
                {slider[currentSlide].title}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: slider[currentSlide].des }}
              />
              {slider[currentSlide].buttonType === "solid" ? (
                <NormalBtn text={slider[currentSlide].buttonTitle} />
              ) : (
                <button className={`book mt-3 ${style.videoBtn}`}>
                  <div className={style.videoContainer}>
                    <TbPlayerPlay className={style.videoIcon} />
                  </div>
                  <span className="text-white">
                    {i18n.language === "en" ? "whatch now" : "شاهدها الان"}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="book pb-3 pt-2 d-flex justify-content-between align-items-center">
          <button
            disabled={isNextButtonDisabled}
            className={style.btn}
            onClick={goToNextSlide}
            ref={nextBtn}
          >
            {i18n.language === "ar" ? (
              <img
                className={`pointer ${style.nextBtn}`}
                alt="next/img"
                src={group}
                loading="lazy"
              />
            ) : (
              <img
                className={`pointer ${style.prevBtn}`}
                alt="prev/img"
                src={rightGroup}
                loading="lazy"
              />
            )}
          </button>
          <div className={`m-0 p-0`}>
            <span className="text-white-50 book">{`0${slider.length}`} /</span>
            <span className={`shamel ${style.number} text-white`}>{`0${
              currentSlide + 1
            }`}</span>
          </div>
          <button
            ref={prevBtn}
            onClick={goToPreviousSlide}
            className={style.btn}
            disabled={isPreviousButtonDisabled}
          >
            {i18n.language === "ar" ? (
              <img
                className={`pointer ${style.prevBtn}`}
                alt="prev/img"
                src={rightGroup}
                loading="lazy"
              />
            ) : (
              <img
                className={`pointer ${style.nextBtn}`}
                alt="next/img"
                src={group}
                loading="lazy"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
/**
 *  <div className={style.mainContainer}>
      <div className="container pt-4 mt-4">
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className={` ${style.imgContainer}`}
        >
          <img
            alt="slider/img"
            loading="lazy"
            src={slider[currentSlide].image}
            className={style.mainImg}
          />
          <div className={style.overlay}>
            <div
              className={`d-flex flex-column text-white justify-content-center mt300  pb-4 ${
                i18n.language === "ar" ? "pr" : "pl"
              }`}
            >
              {slider[currentSlide].greenTitle === "Prochart" ? (
                <div className="d-flex flex-column">
                  <p className="m-0 p-0 fw-bold shamel  fs28">
                    {slider[currentSlide].title}
                  </p>
                  <p className="m-0 p-0 fw-bold text-uppercase whiteGreen fs60">
                    {slider[currentSlide].greenTitle}
                  </p>
                </div>
              ) : (
                <div
                  className={` d-flex flex-wrap align-items-center gap-2 ${style.textContainer}`}
                >
                  <p className="mx-0 mt-2 mb-0  p-0 fw-bold fs28 shamel">
                    {slider[currentSlide].title}
                  </p>
                  {slider[currentSlide].greenTitle === "(مثلث التداول)" ? (
                    <p className="mx-0 mb-0 mt-2 p-0 shamel fw-bold whiteGreen  fs36">
                      {slider[currentSlide].greenTitle}
                    </p>
                  ) : slider[currentSlide].greenTitle === "MAX" ? (
                    <p className="mx-0 mt-0 mb-2 mb-md-4 p-0  fw-bolder  whiteGreen  fs60">
                      {slider[currentSlide].greenTitle}
                    </p>
                  ) : (
                    <p className="m-0  p-0 shamel  fw-bolder  whiteGreen  fs36">
                      {slider[currentSlide].greenTitle}
                    </p>
                  )}
                </div>
              )}
              <p className={`m-0 p-0 book  ${style.desc}`}>
                {slider[currentSlide].desc}
              </p>
              <div>
                {slider[currentSlide].desc2 ? (
                  <p className="text-white book d-inline-block mx-2">
                    {slider[currentSlide].desc2}
                  </p>
                ) : null}
                {slider[currentSlide].greenTitleTwo ? (
                  <p className="whiteGreen text-uppercase d-inline-block mx-1 book">
                    {slider[currentSlide].greenTitleTwo}
                  </p>
                ) : null}
                {slider[currentSlide].desc2 &&
                  slider[currentSlide].greenTitleTwo && (
                    <p className="book d-inline-block text-white mx-1 my-0 p-0">
                      لا يفوتك صفقاتنا
                    </p>
                  )}
              </div>
              {slider[currentSlide].normalBtn &&
                (slider[currentSlide].btnText === "افتح حساب MAX" ? (
                  <button
                    className={`book mt-3 gap-2 py-1  px-4 ${style.maxBtn}`}
                  >
                    <div className={style.arrowContainer}>
                      <MdArrowBackIos className="ms-1" size={20} />
                    </div>
                    <span className="d-inline-block">
                      افتح حساب <span className={style.text}>MAX</span>
                    </span>
                  </button>
                ) : (
                  <NormalBtn text={slider[currentSlide].btnText} />
                ))}
              {!slider[currentSlide].normalBtn && (
              
              )}
            </div>
          </div>
        </div>

       
      </div>
    </div>
 */
