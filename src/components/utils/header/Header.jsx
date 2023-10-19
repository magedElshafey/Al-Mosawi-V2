import React, { useState } from "react";
import style from "./Header.module.css";
import { header } from "../../../fakers/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "swiper/css";
const Header = () => {
  const { i18n } = useTranslation();
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
            {i18n.language === "ar" ? item.title : item.enTitle}
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
