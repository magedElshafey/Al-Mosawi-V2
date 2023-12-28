import React from "react";
import style from "./serviceCard.module.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
const ServicesCard = ({ data, planType }) => {
  console.log("plan type", planType);

  const isTickMill = JSON.parse(localStorage.getItem("tickmillUser"));
  const { i18n } = useTranslation();
  const type = JSON.parse(localStorage.getItem("type"));

  const accountType = JSON.parse(localStorage.getItem("accountType"));
  const navigate = useNavigate();
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
      planType !== "الباقة الذهبية"
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
    <div className="d-flex flex-wrap  align-items-center gap-5">
      {data.map((item, index) => (
        <div
          key={index}
          className={`${style.mainCard} text-center pointer  mb-2  `}
          onClick={() => handleNavigate(item)}
        >
          <div>
            <p className={`fw-bold shamel  m-0 p-0 text-white ${style.title}`}>
              {i18n.language === "ar" ? item.title : item.enTitle}
            </p>
            {/*icon container*/}
            <div
              className={`m-0 p-0 ${style.iconContainer} d-flex align-items-center justify-content-center green `}
            >
              <div
                className={`${style.icon} d-flex align-items-center justify-content-center p-1`}
              >
                <img
                  src={item.img}
                  alt="icon/img"
                  loading="lazy"
                  className={style.icon}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
/**
 *   if (isTickMill || type === "prochart_usersss") {
      navigate(item.path);
    }
    if (
      (!isTickMill && item.title === "حاسبة الفوركس") ||
      (!isTickMill && item.title === "المدونة") ||
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
