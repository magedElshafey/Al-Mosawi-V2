import React, { useState } from "react";
import style from "./HistoryDetails.module.css";
import { MdOutlineArrowBackIosNew, MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const HistoryDetails = ({ data }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div
        className={`${style.mainContainer} mb-3 d-flex justify-content-center  justify-content-md-between align-items-center gap-3 gap-md-0 flex-wrap`}
      >
        <p className="m-0 p-0   ">
          {i18n.language === "ar" ? "العملة" : "currency"}
        </p>
        <p className="m-0 p-0   ">
          {i18n.language === "ar" ? "تاريخ التوصية" : "Recommendation date"}
        </p>
        <p className="m-0 p-0   ">
          {i18n.language === "ar" ? "نوع الصفقة" : "Transaction type"}
        </p>
        <p className="m-0 p-0   ">
          {i18n.language === "ar" ? "حالة الصفقة" : "Transaction status"}
        </p>
        <p className="m-0 p-0   ">
          {i18n.language === "ar"
            ? "عدد النقاط المحققة"
            : "Number of points achieved"}
        </p>
        <p className="m-0 p-0   ">
          {i18n.language === "ar" ? "معاينة الصفقة" : "Preview deal"}
        </p>
      </div>
      {data.slice(0, showMore ? data.length : 3).map((item, index) => {
        console.log("this is the item", item);
        return (
          <div
            key={index}
            className={`${style.mainContainer} mb-3  d-flex justify-content-center justify-content-md-between align-items-center gap-3 flex-wrap`}
          >
            <p className="m-0 p-0 ">{item.title}</p>
            <p className="m-0 p-0 ">{item?.Recommendation?.updated_at}</p>
            <p
              className={`m-0 p-0 ${
                item?.Recommendation?.type === "شراء"
                  ? `${style.title}`
                  : `${style.buy}`
              }   `}
            >
              {item?.Recommendation?.type}
            </p>
            <p className="m-0 p-0 ">{item?.Recommendation?.status}</p>
            <p className={`m-0 p-0 ${style.point}`}>
              {item?.Recommendation?.point}
            </p>
            <button
              onClick={() => navigate(`/deals/${item.id}`)}
              className={`${style.btn}`}
            >
              <MdOutlineArrowBackIosNew />
              <span>{i18n.language === "ar" ? "عرض الصفقة" : "View deal"}</span>
            </button>
            <div
              className={`${style.arrowContainer} ${
                item?.Recommendation.type === "شراء" ? style.green : style.red
              }`}
            ></div>
          </div>
        );
      })}
      {data.length > 3 && (
        <button
          className={`mx-auto z-3 d-flex justify-content-center align-items-center text-white  gap-2 ${style.moreBtn}`}
          onClick={toggleShowMore}
        >
          <MdKeyboardArrowDown size={20} />
          <span>
            {showMore
              ? i18n.language === "ar"
                ? "عرض صفقات اقل"
                : "Show Fewer Deals"
              : i18n.language === "ar"
              ? "عرض صفقات اكتر"
              : "Show More Deals"}
          </span>
        </button>
      )}
    </div>
  );
};

export default HistoryDetails;
