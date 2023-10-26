import React from "react";
import style from "./reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import coma from "../../../assets/coma.svg";
import "swiper/css";
const Reviews = ({ data }) => {
  const [t] = useTranslation();
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
      <p className="mb-3 mx-0 p-0 green fs26 shamel fw-bold">{t("rev")}</p>
      <div className={`row justify-content-center ${style.main} p-2`}>
        <Swiper
          className="col-12 position-relative px-5 px-md-4"
          {...swiperOptions}
          modules={[Autoplay, Navigation]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <img
                    loading="lazy"
                    alt="person/img"
                    src={item.photo}
                    className={style.avImg}
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-center gap-1">
                      <p className="m-0 p-0 fw-bolder">{item.name}</p>
                      <p className="m-0 p-0 fw-bold ">{item.position}</p>
                      <p className="lh p-0 m-0">{item.review}</p>
                    </div>
                    <img
                      alt="comma"
                      src={coma}
                      loading="lazy"
                      className={style.coma}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/**   <BsArrowRightCircle className={style.arrow} size={20} /> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
