import React from "react";
import style from "./Header.module.css";
import { header } from "../../../fakers/data";
import { useTranslation } from "react-i18next";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Header = ({ title }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isTickMill = JSON.parse(localStorage.getItem("tickmillUser"));
  const type = JSON.parse(localStorage.getItem("type"));
  const accountType = JSON.parse(localStorage.getItem("accountType"));
  const handleNavigate = (item) => {
    if (
      (accountType === "pro_classic" || accountType === "pro_classic_max") &&
      item.title === "الإستشارات"
    ) {
      toast.error(
        i18n.language === "ar"
          ? "قسم الاستشارات غير متاح لعملاء pro classic"
          : "The consulting section is not available for Pro Classic customers"
      );
    } else if (
      (type === "course_user" && !isTickMill && item.title === "المدونة") ||
      (type === "course_user" &&
        !isTickMill &&
        item.title === "حاسبة الفوركس") ||
      (type === "course_user" &&
        item.title === "التقويم الاقتصادي" &&
        !isTickMill)
    ) {
      toast.error(
        i18n.language === "ar"
          ? "هذا القسم غير متاح لعملاء الكورسات"
          : "The blog is not available to course customers"
      );
    } else if (type === "prochart_user" && item.title === "التقويم الاقتصادي") {
      toast.error(
        i18n.language === "ar"
          ? "هذا القسم غير متاح لعملاء البروشارت"
          : "This section is not available to BroChart clients"
      );
    } else if (
      isTickMill &&
      type !== "prochart_user" &&
      item.title === "قسم البروشارت"
    ) {
      toast.error(
        i18n.language === "ar"
          ? "هذا القسم متاح لعملاء البروشارت فقط"
          : "This section is available to BroChart clients only"
      );
    } else if (type === null && accountType === null && !isTickMill) {
      toast.error(
        i18n.language === "ar"
          ? "لا يمكنك الدخول علي هذا القسم"
          : "You cannot access this section"
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
        {isTickMill ? (
          <p
            onClick={() => navigate("/forex-account/details")}
            className={`m-0  pointer ${style.link} `}
          >
            {i18n.language === "ar" ? "لوحة التحكم" : "dashboard"}
          </p>
        ) : null}
        {type === "prochart_user" ? (
          <p
            onClick={() => navigate("/user/prochart")}
            className={`m-0  pointer ${style.link} `}
          >
            {i18n.language === "ar" ? "لوحة التحكم" : "dashboard"}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Header;
/**
 *   if (isTickMill || type === "prochart_user") {
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
 */
