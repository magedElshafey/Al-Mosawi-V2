import React from "react";
import style from "./maxCard.module.css";
import icon from "../../../assets/Arrow - Arrow_Circle_Left.svg";
import { MdArrowBackIosNew, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
const MaxCard = ({ maxTitle, maxDesc, mainTitle, mainDesc, accounts }) => {
  const { test } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  return (
    <div className="py-5 container">
      <p className="fs36 shamel fw-bolder mx-0 mt-0 mb-1 p-0 text-center">
        {test === "max" ? maxTitle : mainTitle}
      </p>
      <p className="mx-0 mt-0 mb-3 p-0 text-center">
        {test === "max" ? maxDesc : mainDesc}
      </p>
      <div className="pb-5 d-flex justify-content-center gap-5 flex-wrap align-items-center">
        {accounts.map((item, index) => (
          <div key={index} className={`mb-5 mb-md-3 ${style.mainContainer} `}>
            <div className={style.secondContainer}>
              <div className="text-center mb-2 fw-bold">
                <p
                  className="m-0 p-0"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}`}>
                {i18n.language === "en"
                  ? "Limit for deposit"
                  : " الحد الأدنى للإيداع"}
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  {item.min_deposit}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                {i18n.language === "en"
                  ? "Minimum balance"
                  : " الحد الأدنى للرصيد"}
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  {item.min_balance}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                {i18n.language === "en"
                  ? "Base currencies available"
                  : "العملات الأساسية المتاحة"}
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0  fs18 fw-bold ${style.account}`}>
                  {item.currencies}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                {i18n.language === "en" ? "spread from" : " السبريد من"}
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  {i18n.language === "en" ? item.spread_en : item.spread_ar}{" "}
                  {i18n.language === "en" ? "points" : "نقطة"}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                {i18n.language === "en"
                  ? "Maximum physical leverage"
                  : "الحد الأقصي للرافعات المادية"}
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  {item.max}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                {i18n.language === "en"
                  ? "minimum physical leverage"
                  : "الحد الأدني للرافعات المادية"}
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  {item.min} {i18n.language === "en" ? "points" : "نقطة"}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                {i18n.language === "en" ? "Commissions" : "العمولات"}
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  {item.commissions}{" "}
                  {i18n.language === "en" ? "Commissions" : "عمولات"}{" "}
                </p>
              </div>
              {/** <div className={`m-0 p-0 ${style.cardName}  fs48`}>
                {item.title}
              </div> */}
            </div>
            <div className="book d-flex justify-content-center">
              <button
                onClick={() => navigate("/forex-account")}
                className={style.btn}
              >
                {i18n.language === "en" ? (
                  <MdKeyboardArrowRight size={20} />
                ) : (
                  <MdArrowBackIosNew size={20} />
                )}
                <span className="text-white">
                  {i18n.language === "en" ? "create account" : "انشاء حساب"}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaxCard;
