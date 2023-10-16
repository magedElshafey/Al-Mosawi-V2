import React from "react";
import style from "./success.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Success = ({ data }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: true,
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
        className="mySwiper w-100 text-center"
        modules={[Autoplay, Navigation, Pagination]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="row justify-content-center">
            <div className="m-0 p-0  col-12 col-md-7 mb-2 mb-md-0 ">
              <div dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className={`fs28 m-0 p-0 mx-5 `}>{item.des}</p>
              <div className={`p-4 text-center ${style.textContainer}`}>
                <div>
                  <p
                    className={`fs20 d-block shamel fw-bold m-0 mb-2 p-0  ${style.client}`}
                  >
                    {item.content.title}
                  </p>
                  <p className="d-block mx-0 p-0 mb-2">{item.content.des}</p>
                </div>
              </div>
            </div>
            <div className="col-12  col-md-5 mb-3 mb-md-0 gap-2">
              <img
                loading="lazy"
                alt="slide/img"
                src={item.image}
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
  <SwiperSlide key={index} className="row justify-content-center">
            <div className="text-center col-12 col-md-6 mb-3 mb-md-0">
             
              

              
            </div>
          
          </SwiperSlide>
   
*/
