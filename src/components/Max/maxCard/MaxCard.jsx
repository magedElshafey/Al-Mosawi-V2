import React from "react";
import { maxCards } from "../../../fakers/data.js";
import style from "./maxCard.module.css";
import icon from "../../../assets/Arrow - Arrow_Circle_Left.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const MaxCard = () => {
  const navigate = useNavigate();
  return (
    <div className="py-5 container">
      <p className="fs36 shamel fw-bolder mx-0 mt-0 mb-1 p-0 text-center">
        انواع الحسابات
      </p>
      <p className="mx-0 mt-0 mb-3 p-0 text-center">
        حسابات متميزة نوفرها لكم.. لتناسب جميع احتياجاتكم
      </p>
      <div className="pb-5 d-flex justify-content-center gap-5 flex-wrap align-items-center">
        {maxCards.map((item, index) => (
          <div
            key={index}
            className={`mb-5 mb-md-3 ${style.mainContainer} `}
          >
            <div className={style.secondContainer}>
              <div className="text-center mb-2 fw-bold">
                <p
                  className={`d-inline-block m-0 p-0 fs24 shamel ${style.account}`}
                >
                  حساب
                </p>
                <p
                  className={`d-inline-block my-0 mx-1 p-0 fs36 shamel green ${style.title}`}
                >
                  {item.title}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}`}>
                الحد الأدنى للإيداع
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  {item.deposit}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                الحد الأدنى للرصيد
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  {item.credit}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                العملات الأساسية المتاحة
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0  fs18 fw-bold ${style.account}`}>
                  {item.currencies.join(" , ")}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>السبريد من</p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  نقطة {item.points}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                الحد الأقصي للرافعات المادية
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  {item.maximum}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>
                الحد الأدني للرافعات المادية
              </p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  نقطة {item.minmumm}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro}  `}>العمولات</p>
              <div className="mb-1 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18  fw-bold ${style.account}`}>
                  عمولات {item.commissions}
                </p>
              </div>
              <div className={`m-0 p-0 ${style.cardName}  fs48`}>
                {item.title}
              </div>
            </div>
            <div className="book d-flex justify-content-center">
              <button
                onClick={() => navigate("/forex-account")}
                className={style.btn}
              >
                <MdArrowBackIosNew size={20} />
                <span className="text-white mt-1">انشاء حساب</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaxCard;
