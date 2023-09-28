import React from "react";
import style from "./reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { BsArrowRightCircle } from "react-icons/bs";
import coma from "../../../assets/coma.svg";
import "swiper/css";
const Reviews = ({ data }) => {
  const [t] = useTranslation();
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
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
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
      <div className="">
        <div>
          <p className="mb-3 mx-0 p-0 green fs26 shamel fw-bold">{t("rev")}</p>
          <div className="row justify-content-center">
            <Swiper
            
              className="col-12 position-relative px-5 px-md-4"
              {...swiperOptions}
            >
              {data.map((item, index) => (
                <SwiperSlide className= {style.main} key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        loading="lazy"
                        alt="person/img"
                        src={item.img}
                        className={style.avImg}
                      />
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column align-items-center gap-1">
                          <p className="m-0 p-0 fw-bold shamel fs16">
                            {item.name}
                          </p>
                          <p className="m-0 p-0 ">{item.jobTitle}</p>
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

                  <p className="lh p-0 m-0">{item.opinion}</p>
                </SwiperSlide>
              ))}
              <BsArrowRightCircle className={style.arrow} size={20} />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
