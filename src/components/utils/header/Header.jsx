import React, { useState } from "react";
import style from "./Header.module.css";
import { header } from "../../../fakers/data";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Header = () => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 0,

    autoplay: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 7,
      },
    },
  };
  const [clickedLinkId, setClickedLinkId] = useState(null);
  const handleClick = (id, title) => {
    setClickedLinkId(id);
  };
  return (
    <>
      <div className={style.menu}>
        {header.map((item, index) => (
          <Link
            onClick={() => handleClick(index, item.title)}
            to={`${item.path}`}
            className={`  pointer  ${style.link} ${
              clickedLinkId === index ? style.active : null
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
/*
   <Swiper {...swiperOptions} className={`mt-4 ${style.mainDiv} text-center`}>
      {header.map((item, index) => (
        <SwiperSlide key={index}>
         
        </SwiperSlide>
      ))}
    </Swiper>
*/
