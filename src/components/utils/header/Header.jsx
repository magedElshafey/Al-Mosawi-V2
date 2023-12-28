import React from "react";
import style from "./Header.module.css";
import { header } from "../../../fakers/data";
import { useTranslation } from "react-i18next";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Header = ({ title, accountDetails }) => {
  console.log("this is account details", accountDetails);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isTickMill = JSON.parse(localStorage.getItem("tickmillUser"));
  const type = JSON.parse(localStorage.getItem("type"));
  const accountType = JSON.parse(localStorage.getItem("accountType"));
  const handleNavigate = (item) => {
    if (
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
    } else if (
      type === null &&
      accountType === null &&
      !isTickMill &&
      item.title === "قسم البروشارت"
    ) {
      toast.error(
        i18n.language === "ar"
          ? "ليس لديك اشتراك حاليا"
          : "You do not currently have a subscription"
      );
    } else if (
      type === null &&
      accountType === null &&
      !isTickMill &&
      item.title !== "الدورات التعليمية" &&
      item.title !== "معلومات الحساب" &&
      item.title !== "الإستشارات"
    ) {
      toast.error(
        i18n.language === "ar"
          ? "هذا القسم متاح لعملاء tickmill فقط"
          : "This section is available to tickmill customers only"
      );
    } else if (
      type === "prochart_user" &&
      item.title === "التقويم الاقتصادي" &&
      accountDetails.plan !== "الباقة الذهبية"
    ) {
      toast.error(
        i18n.language === "ar"
          ? "هذا القسم  متاح لعملاء الخطة الذهبية فقط"
          : "This section is  available to Gold plan only"
      );
    } else {
      navigate(item.path);
    }
  };
  return (
    <>
      <div className={style.menu}>
        {isTickMill ? (
          <p
            onClick={() => navigate("/forex-account/details")}
            className={`m-0  pointer ${style.link} `}
          >
            {i18n.language === "ar"
              ? "الرجوع الي لوحة التحكم"
              : "back to dashboard"}
          </p>
        ) : null}
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
