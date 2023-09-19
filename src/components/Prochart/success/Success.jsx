import React from "react";
import style from "./success.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { successSlider } from "../../../fakers/data";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
const Success = () => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 10,
    navigation: true,
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
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div className="py-5">
      <Swiper
        {...swiperOptions}
        className="mySwiper w-100"
        modules={[Autoplay, Navigation, Pagination]}
      >
        {successSlider.map((item, index) => (
          <SwiperSlide key={index} className="row justify-content-center">
            <div className="text-center col-12 col-md-6 mb-3 mb-md-0">
              <p
                className={`mx-0 mt-0 mb-2 text-center text-md-end  fw-bolder shamel fs36 green`}
              >
                {item.static.title}
              </p>
              <p
                className={`fs28 shamel text-center text-md-end  fw-bolder mx-1 d-inline-block mb-2 mt-0 mb-0`}
              >
                {item.static.desc}
              </p>
              <p
                className={`fs28 shamel text-center text-md-end fw-bold green d-inline-block  p-0 m-0`}
              >
                {item.static.desc2}
              </p>
              <p className="my-2 text-center text-md-end fs18">
                {item.static.desc3}
              </p>
              <div className={`p-4 text-center ${style.textContainer}`}>
                <div>
                  <p
                    className={`fs20  shamel fw-bold mb-2 mt-0 mx-0 p-0 d-inline-block ${style.client}`}
                  >
                    {item.slides.title}
                  </p>
                  <p className="mx-0 p-0 mb-2">{item.slides.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center text-md-end col-md-6 mb-3 mb-md-0 gap-2">
              <img
                loading="lazy"
                alt="slide/img"
                src={item.slides.img}
                className={style.img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Success;
/*
  <div className="py-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <p className={`mx-0 mt-0 mb-2  fw-bolder shamel fs36 green`}>
            النجاح في التداول
          </p>
          <p
            className={`fs28 shamel  fw-bolder mx-1 d-inline-block mb-2 mt-0 mb-0`}
          >
            يبدأ مع اختيارك
          </p>
          <p className={`fs28 shamel fw-bold green d-inline-block  p-0 m-0`}>
            لصفقات ناجحة
          </p>
          <p className="my-2 fs18">
            صفقات متميزة حققناها ... لا تتردد بالاطلاع عليها
          </p>
          <div className={`p-2 text-center ${style.textContainer}`}>
            <p
              className={`fs20  shamel fw-bold mb-2 mt-0 mx-0 p-0 d-inline-block ${style.client}`}
            >
              صفقات العملاء
            </p>

            <p className="mx-0 p-0 mb-2">
              إذا كنت من محبي التداول على العملات مثل الدولار واليورو شاهد
              النقاط التي حققناها في هذه الصفقة
            </p>
          </div>
          <div className="mt-3 d-flex justify-content-center align-items-center gap-2">
            <span className={`${style.span}`}></span>
            <span className={`${style.span}`}></span>
            <span className={`${style.span}`}></span>
            <span className={`${style.span} ${style.active}`}></span>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex align-items-center gap-2 justify-content-center">
          <img
            alt="mob/img"
            src={mob1}
            loading="lazy"
            className={style.mobOne}
          />
          <img
            alt="mobile/img"
            src={mob2}
            loading="lazy"
            className={`d-none d-md-block ${style.mobTwo}`}
          />
        </div>
      </div>
    </div>
*/
