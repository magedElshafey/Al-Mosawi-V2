import React, { useState } from "react";
import style from "./chooseAppointment.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import Spinner from "../utils/Spinner/Spinner";
import { request } from "../utils/axios";
import toast from "react-hot-toast";
const ChooseAppointment = ({ data, title, desc, today, tomorrow }) => {
  const [dayId, setDayId] = useState(null);
  const [timeId, setTimeId] = useState(null);
  const [time, setTime] = useState(null);
  const { t, i18n } = useTranslation();
  const [day, setDay] = useState(null);
  const swiperOptions = {
    loop: false,
    centeredSlides: false,
    spaceBetween: 20,
    navigation: true,

    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };
  const navigate = useNavigate();
  const book = (data) => {
    const headers = {
      userId: JSON.parse(localStorage.getItem("userId")),
    };
    return request({
      url: "/consultation/store",
      method: "post",
      data,
      headers,
    });
  };
  const { isLoading, mutate } = useMutation(book, {
    onSuccess: (data) => {
      console.log("this is the data at Sucess", data);
      navigate("/booking/success");
      toast.success(
        i18n.language === "ar" ? "تم الحجز بنجاح" : "booked succfully"
      );
      localStorage.setItem("day", JSON.stringify(day));
      localStorage.setItem("time", JSON.stringify(time));
      setDayId(null);
      setTime(null);
      setTimeId(null);
    },
    onError: (data) => {
      console.log("this is the data at error", data);
    },
  });
  const handleClick = (appointment) => {
    const userAppoitment = {
      day: appointment.day,
      date: appointment.date,
      time,
    };
    mutate(userAppoitment);
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-5 row justify-content-center">
          <div className={` col-12 col-md-9 p-4 ${style.mainDiv}`}>
            <div className="my-2 text-center">
              <div className="d-flex flex-column align-items-center gap-1">
                <p className="m-0 p-0 fw-bold fs24 shamel">{title}</p>
                <p>{desc}</p>
              </div>
              <div className="row justify-content-center">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...swiperOptions}
                  className="mySwiper col-12 col-md-11"
                >
                  {data.map((day, index) => (
                    <SwiperSlide
                      className={`position-relative ${
                        i18n.language === "ar" ? "me-5 pe-5" : "ms-5 ps-5"
                      }`}
                      key={index}
                    >
                      <p className={`mx-0  mt-0 mb-2 ${style.border}`}>
                        {day.date === today
                          ? i18n.language === "ar"
                            ? "اليوم"
                            : "today"
                          : day.date === tomorrow
                          ? i18n.language === "ar"
                            ? "غدا"
                            : "tomorrow"
                          : day.day}{" "}
                        : {day.date}
                      </p>
                      {day.schedule.map((item, indexTwo) => (
                        <p
                          onClick={() => {
                            setDayId(index);
                            setTimeId(indexTwo);
                            setDay(day.day);
                            setTime(item.time);
                          }}
                          key={indexTwo}
                          className={` book pointer mx-0 mt-0  mb-1 ${
                            style.border
                          } ${
                            timeId === indexTwo && dayId === index
                              ? style.greenBorder
                              : null
                          } ${!item.appointment_status ? null : style.dark}`}
                        >
                          {item.time}
                        </p>
                      ))}
                      <button
                        onClick={() => handleClick(day)}
                        disabled={!dayId && !timeId && !time}
                        className={`book ${style.btn} ${
                          dayId === index ? style.bgGreen : style.disabled
                        }`}
                      >
                        <MdArrowBackIosNew size={20} />
                        <span className="mt-1">{t("book")}</span>
                      </button>

                      {/* Next button */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChooseAppointment;
