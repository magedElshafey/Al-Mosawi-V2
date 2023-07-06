import React from "react";
import style from "./reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Reviews = ({ data }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: true,
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
    <div className="py-4">
      <div className="row position-relative">
        <div className="col-12 col-md-10">
          <p className="mb-5 mx-0 p-0 green fs-4 fw-bold">
            أراء الحاصلين علي الدورة
          </p>
          <div className="row justify-content-center">
            <Swiper className="col-12" {...swiperOptions}>
              {data.map((item, index) => (
                <SwiperSlide key={index} className="d-flex flex-column  gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      loading="lazy"
                      alt="person/img"
                      src={item.img}
                      className={style.avImg}
                    />
                    <div className="d-flex flex-column align-items-center gap-2">
                      <p className="m-0 p-0 fw-bold">{item.name}</p>
                      <p className="m-0 p-0 ">{item.jobTitle}</p>
                    </div>
                  </div>
                  <p className="lh p-0 m-0">{item.opinion}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
