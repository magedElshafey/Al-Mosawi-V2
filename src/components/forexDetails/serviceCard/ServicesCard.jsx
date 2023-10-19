import React from "react";
import style from "./serviceCard.module.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
const ServicesCard = ({ data, isTickMill }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    if (isTickMill) {
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
