import React from "react";
import style from "./Header.module.css";
import { header } from "../../../fakers/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Header = ({ title }) => {
  const navigate = useNavigate();

  const { i18n } = useTranslation();
  const isTickMill = JSON.parse(localStorage.getItem("tickmillUser"));
  const type = JSON.parse(localStorage.getItem("accountType"));
  const handleNavigate = (item) => {
    if (isTickMill || type === "prochart_user") {
      navigate(item.path);
    }
    if (
      (!isTickMill && item.title === "حاسبة الفوركس") ||
      (!isTickMill && item.title === "التقويم الاقتصادي") ||
      (!isTickMill && item.title === "قسم البروشارت")
    ) {
      toast.error(
        i18n.language === "ar"
          ? "هذة الصفحة متاحة لعملاء tickmill فقط تحتاج الي الاشتراك اولا "
          : "this page is available for tickmill client only you need to subscripe"
      );
    } else {
      navigate(item.path);
    }
  };
  return (
    <>
      <div className={style.menu}>
        {header.map((item, index) => (
          <p
            key={index}
            onClick={() => handleNavigate(item)}
            className={`m-0  pointer ${style.link} ${
              title === item.title ? style.active : null
            }`}
          >
            {i18n.language === "ar" ? item.title : item.enTitle}
          </p>
        ))}
      </div>
    </>
  );
};

export default Header;
