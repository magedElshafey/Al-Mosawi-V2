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
  const { t, i18n } = useTranslation();
  const [activeDay, setActiveDay] = useState(null);
  const [activeDate, setActiveDate] = useState(null);
  const [activeTime, setActiveTime] = useState(null);
  const [status, setStatus] = useState(null);
  const handleAppointmentClick = (appointment, status, time) => {
    setActiveDay(appointment.day);
    setActiveDate(appointment.date);
    setStatus(status);
    setActiveTime(time);
  };
  const swiperOptions = {
    loop: false,
    centeredSlides: false,
    spaceBetween: 10,
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
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
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
      method: "POST",
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
      localStorage.setItem("day", JSON.stringify(activeDay));
      localStorage.setItem("time", JSON.stringify(activeTime));
    },
    onError: (data) => {
      console.log("this is the data at error", data);
    },
  });
  const handleClick = () => {
    if (+status) {
      toast.error(
        i18n.language === "ar"
          ? "لقد تم حجز هذا الميعادمن قبل "
          : "This appointment has already been booked"
      );
    } else {
      const userAppoitment = {
        day: activeDay,
        date: activeDate,
        time: activeTime,
      };
      mutate(userAppoitment);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-5 row justify-content-center">
          <div className={`col-12 col-md-9  ${style.mainDiv}`}>
            <div className="my-2">
              <div className="d-flex flex-column align-items-center gap-1">
                <p className="m-0 p-0 fw-bold fs24 shamel">{title}</p>
                <p>{desc}</p>
              </div>
              <Swiper modules={[Autoplay, Navigation]} {...swiperOptions}>
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <p className={`mx-0  mt-0 mb-2 ${style.border}`}>
                      {item.date === today
                        ? i18n.language === "ar"
                          ? "اليوم"
                          : "today"
                        : item.date === tomorrow
                        ? i18n.language === "ar"
                          ? "غدا"
                          : "tomorrow"
                        : item.day}{" "}
                      : {formatDate(item.date)}
                    </p>
                    {item.schedule.map((day, indexTwo) => (
                      <p
                        onClick={() =>
                          handleAppointmentClick(
                            item,
                            day.appointment_status,
                            day.time
                          )
                        }
                        key={indexTwo}
                        className={`m-0 p-0 mb-1 ${style.border} ${
                          +day.appointment_status ? style.dark : null
                        } ${+day.appointment_status ? null : "pointer"} ${
                          !+day.appointment_status &&
                          activeDay === item.day &&
                          activeDate === item.date &&
                          activeTime === day.time
                            ? style.greenBorder
                            : null
                        } `}
                      >
                        {day.time}
                      </p>
                    ))}
                    <button
                      disabled={
                        (activeDay !== item.day && activeDate !== item.date) ||
                        +status
                      }
                      onClick={handleClick}
                      className={`${style.btn}`}
                    >
                      <MdArrowBackIosNew size={20} />
                      <span>{t("book")}</span>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const formatDate = (dateString) => {
  const options = { month: "numeric", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
export default ChooseAppointment;
/**
 *   <Swiper modules={[Autoplay, Navigation]} {...swiperOptions}>
                {data.map((day, index) => (
                  <SwiperSlide key={index}>
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
                      : {formatDate(day.date)}
                    </p>
                    {day.schedule.map((item, indexTwo) => (
                      <p
                        onClick={() => {
                          setAppointmentDay(item);
                          setDayId(index);
                          setTimeId(indexTwo);
                          setDay(day.day);
                          setTime(item.time);
                        }}
                        key={indexTwo}
                        className={`  mx-0 mt-0  mb-1 ${style.border} ${
                          timeId === indexTwo &&
                          dayId === index &&
                          !+item.appointment_status
                            ? style.greenBorder
                            : null
                        } ${
                          !+item.appointment_status
                            ? "pointer"
                            : `${style.dark}`
                        }`}
                      >
                        {item.time}
                      </p>
                    ))}
                    <button
                      onClick={() => handleClick(day)}
                      disabled={
                        !dayId && !+appointmentDay.appointment_status && !timeId
                      }
                      className={`book ${style.btn} ${
                        dayId === index && !+appointmentDay.appointment_status
                          ? style.bgGreen
                          : null
                      }`}
                    >
                      <MdArrowBackIosNew size={20} />
                      <span>{t("book")}</span>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
 */
