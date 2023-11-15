import React from "react";
import style from "./reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css";
// import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import coma from "../../../assets/coma.svg";
SwiperCore.use([Navigation]);
const Reviews = ({ data }) => {
  const { t, i18n } = useTranslation();
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
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <div className="py-3  mt-3 ">
      <p className="mb-3 mx-0 p-0 green fs26  fw-bold">{t("rev")}</p>
      <Swiper
        className="col-12  px-5 px-md-4"
        {...swiperOptions}
        modules={[Autoplay, Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`position-relative ${style.mainBox} ${
              i18n.language === "ar" ? "me-5" : "ms-5"
            }`}
          >
            <div className={`d-flex gap-2 `}>
              <img
                loading="lazy"
                alt="person/img"
                src={item.photo}
                className={style.avImg}
              />
              <div>
                <p className="m-0 p-0 mb-2 fw-bolder">{item.name}</p>
                <p className="m-0 p-0 ">{item.position}</p>
              </div>
            </div>
            <img
              alt="comma"
              src={coma}
              loading="lazy"
              className={`${style.coma} ${
                i18n.language === "ar" ? style.rtl : style.ltr
              }`}
            />

            <p
              className={`lh p-0 m-0 mt-3 ${
                i18n.language === "ar" ? "me-5" : "ms-5"
              }`}
            >
              {item.review}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
/**
 *  {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-center gap-1">
                     
                    
                    </div>
                   
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
 */
