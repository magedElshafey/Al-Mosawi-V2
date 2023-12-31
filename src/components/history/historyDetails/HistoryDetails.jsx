import React, { useState } from "react";
import style from "./HistoryDetails.module.css";
import { MdOutlineArrowBackIos, MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";

const HistoryDetails = ({ data }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div className={`${style.mainContainer} mb-3 d-none d-md-block `}>
        <div className="row ">
          <div className="col-2">
            <p className="m-0 p-0">
              {i18n.language === "ar" ? "العملة" : "currency"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0   ">
              {i18n.language === "ar" ? "تاريخ التوصية" : "Recommendation date"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0   ">
              {i18n.language === "ar" ? "نوع الصفقة" : "Transaction type"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0 ">
              {i18n.language === "ar" ? "حالة الصفقة" : "Transaction status"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0   ">
              {i18n.language === "ar"
                ? "عدد النقاط المحققة"
                : "Number of points achieved"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0 ">
              {i18n.language === "ar" ? "معاينة الصفقة" : "Preview deal"}
            </p>
          </div>
        </div>
      </div>
      {data.slice(0, showMore ? data.length : 3).map((item, index) => {
        return (
          <div key={index} className={`${style.mainContainer} mb-3 `}>
            <div className="row">
              <div className="col-12 col-md-2 ">
                <div className="m-0 p-0 d-flex gap-1 justify-content-center justify-content-md-start">
                  <p className="m-0 p-0 d-md-none">
                    {i18n.language === "ar" ? "العملة" : "currency"} :
                  </p>
                  <p className="m-0 p-0"> {item.title}</p>
                </div>
              </div>
              <div className="col-12 col-md-2">
                <p
                  className={`m-0 p-0  ${style.date} d-flex gap-1 justify-content-center justify-content-md-start`}
                >
                  <p className="m-0 p-0 d-md-none">
                    {i18n.language === "ar"
                      ? "تاريخ التوصية"
                      : "Recommendation date"}{" "}
                    :
                  </p>
                  <p className="m-0 p-0">{item?.Recommendation?.updated_at}</p>
                </p>
              </div>
              <div className="col-12 col-md-2">
                <p
                  className={`m-0 p-0 ${
                    style.date
                  } d-flex gap-1 align-items-center justify-content-center justify-content-md-start ${
                    item?.Recommendation?.type === "شراء"
                      ? `${style.title}`
                      : `${style.buy}`
                  }   `}
                >
                  <p className="d-md-none m-0 p-0 text-white">
                    {i18n.language === "ar" ? "نوع الصفقة" : "Transaction type"}{" "}
                    :{" "}
                  </p>
                  <p className="m-0 p-0"> {item?.Recommendation?.type}</p>
                </p>
              </div>
              <div className="col-12 col-md-2">
                <p
                  className={`m-0 p-0 ${style.date} d-flex gap-1 justify-content-center justify-content-md-start`}
                >
                  <p className="m-0 p-0 d-md-none">
                    {i18n.language === "ar"
                      ? "حالة الصفقة"
                      : "Transaction status"}{" "}
                    :{" "}
                  </p>
                  <p className="m-0 p-0">{item?.Recommendation?.status}</p>
                </p>
              </div>
              <div className="col-12 col-md-2">
                <div
                  className={`m-0 p-0 ${style.date} d-flex gap-1 justify-content-center justify-content-md-start`}
                >
                  <p className="m-0 p-0 d-md-none">
                    {i18n.language === "ar"
                      ? "حالة الصفقة"
                      : "Transaction status"}{" "}
                    :{" "}
                  </p>
                  <p className="m-0 p-0">{item?.Recommendation?.point}</p>
                </div>
              </div>
              <div className="col-12 col-md-2 d-flex justify-content-center  justify-content-md-start">
                <button
                  onClick={() => navigate(`/deals/${item.id}`)}
                  className={`${style.btn} `}
                >
                  {i18n.language === "ar" ? (
                    <MdOutlineArrowBackIos size={20} />
                  ) : (
                    <IoIosArrowForward size={20} />
                  )}
                  <span>
                    {i18n.language === "ar" ? "عرض الصفقة" : "View deal"}
                  </span>
                </button>
              </div>
            </div>
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
/**
 * <div>
      <div className={`${style.mainContainer} mb-3 d-none d-md-block `}>
        <div className="row">
          <div className="col-2">
            <p className="m-0 p-0">
              {i18n.language === "ar" ? "العملة" : "currency"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0   ">
              {i18n.language === "ar" ? "تاريخ التوصية" : "Recommendation date"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0   ">
              {i18n.language === "ar" ? "نوع الصفقة" : "Transaction type"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0 ">
              {i18n.language === "ar" ? "حالة الصفقة" : "Transaction status"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0   ">
              {i18n.language === "ar"
                ? "عدد النقاط المحققة"
                : "Number of points achieved"}
            </p>
          </div>
          <div className="col-2">
            <p className="m-0 p-0 ">
              {i18n.language === "ar" ? "معاينة الصفقة" : "Preview deal"}
            </p>
          </div>
        </div>
      </div>
      {data.slice(0, showMore ? data.length : 3).map((item, index) => {
        return (
          <div key={index} className={`${style.mainContainer} mb-3 `}>
            <div className="row">
              <div className="col-2">
                <p className="m-0 p-0 d-flex gap-1">
                  <p className="m-0 p-0 d-md-none">
                    {i18n.language === "ar" ? "العملة" : "currency"} :
                  </p>
                  <p className="m-0 p-0"> {item.title}</p>
                </p>
              </div>
              <div className="col-2">
                <p className={`m-0 p-0  ${style.date} d-flex gap-1`}>
                  <p className="m-0 p-0 d-md-none">
                    {i18n.language === "ar"
                      ? "تاريخ التوصية"
                      : "Recommendation date"}{" "}
                    :
                  </p>
                  <p className="m-0 p-0">{item?.Recommendation?.updated_at}</p>
                </p>
              </div>
              <div className="col-2">
                <p
                  className={`m-0 p-0 ${
                    style.date
                  } d-flex gap-1 align-items-center ${
                    item?.Recommendation?.type === "شراء"
                      ? `${style.title}`
                      : `${style.buy}`
                  }   `}
                >
                  <p className="d-md-none m-0 p-0 text-white">
                    {i18n.language === "ar" ? "نوع الصفقة" : "Transaction type"}{" "}
                    :{" "}
                  </p>
                  <p className="m-0 p-0"> {item?.Recommendation?.type}</p>
                </p>
              </div>
              <div className="col-2">
                <p className={`m-0 p-0 ${style.date} d-flex gap-1`}>
                  <p className="m-0 p-0 d-md-none">
                    {i18n.language === "ar"
                      ? "حالة الصفقة"
                      : "Transaction status"}{" "}
                    :{" "}
                  </p>
                  <p className="m-0 p-0">{item?.Recommendation?.status}</p>
                </p>
              </div>
              <div className="col-2">
                <div>
                  <p className="m-0 p-0">{item?.Recommendation?.point}</p>
                </div>
              </div>
              <div className="col-2">
                <button
                  onClick={() => navigate(`/deals/${item.id}`)}
                  className={`${style.btn}`}
                >
                  <MdOutlineArrowBackIosNew />
                  <span>
                    {i18n.language === "ar" ? "عرض الصفقة" : "View deal"}
                  </span>
                </button>
              </div>
            </div>
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
 */
