import React, { useState } from "react";
import style from "./Header.module.css";
import { header } from "../../../fakers/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "swiper/css";
const Header = ({ title }) => {
  const { i18n } = useTranslation();

  return (
    <>
      <div className={style.menu}>
        {header.map((item, index) => (
          <Link
            key={index}
            to={`${item.path}`}
            className={`${style.link} ${
              title === item.title ? style.active : null
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
