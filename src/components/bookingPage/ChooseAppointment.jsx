import React, { useState } from "react";
import style from "./chooseAppointment.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const ChooseAppointment = ({ data }) => {
  const [dayId, setDayId] = useState(null);
  const [timeId, setTimeId] = useState(null);
  const [time, setTime] = useState(null);
  const [t] = useTranslation();
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  };
  const navigate = useNavigate();
  const handleClick = (day, time) => {
    navigate("/booking/success");
    window.localStorage.setItem("appoitment", JSON.stringify([day, time]));
  };
  return (
    <div className="mt-5 row justify-content-center">
      <div className={`col-12 col-md-9 p-4 ${style.mainDiv}`}>
        <div className="my-2 text-center">
          <div className="d-flex flex-column align-items-center gap-1">
            <p className="m-0 p-0 fw-bold fs24 shamel">{t("reservation")}</p>
            <p>{t("afterChoosing")}</p>
          </div>
          <div className="row justify-content-center">
            <Swiper
              modules={[Autoplay, Navigation]}
              {...swiperOptions}
              className="mySwiper col-12 col-md-11"
            >
              {data.map((day, index) => (
                <SwiperSlide key={index}>
                  <p className={`mx-0  mt-0 mb-2 ${style.border}`}>
                    {day.title}
                  </p>
                  {day.appointments.map((item, indexTwo) => (
                    <p
                      onClick={() => {
                        setDayId(day.title);
                        setTimeId(indexTwo);
                        setTime(item.time);
                      }}
                      key={indexTwo}
                      className={` book pointer mx-0 mt-0  mb-1 ${
                        style.border
                      } ${
                        dayId === day.title && timeId === indexTwo
                          ? style.greenBorder
                          : null
                      } ${item.dark ? style.dark : null}`}
                    >
                      {item.time}
                    </p>
                  ))}
                  <button
                    onClick={() => handleClick(dayId, time)}
                    disabled={!dayId && !timeId}
                    className={`book ${style.btn} ${
                      dayId === day.title ? style.bgGreen : style.disabled
                    }`}
                  >
                    <MdArrowBackIosNew size={20} />
                    <span className="mt-1">{t("book")}</span>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAppointment;
