import React from "react";
import { maxCards } from "../../../fakers/data.js";
import style from "./maxCard.module.css";
import icon from "../../../assets/Arrow - Arrow_Circle_Left.svg";
import { MdArrowBackIosNew } from "react-icons/md";
const MaxCard = () => {
  return (
    <div className="py-4">
      <p className="fs48 fw-bold mx-0 mt-0 mb-2 p-0 text-center">
        انواع الحسابات
      </p>
      <p className="fs26 roboto  mx-0 mt-0 mb-5 p-0 text-center">
        حسابات متميزة نوفرها لكم.. لتناسب جميع احتياجاتكم
      </p>
      <div className="pb-5 d-flex justify-content-center gap-5 flex-wrap align-items-center">
        {maxCards.map((item, index) => (
          <div key={index} className={`mb-5 ${style.mainContainer}`}>
            <div className={style.secondContainer}>
              <div className="text-center mb-3 fw-bold">
                <p className={`d-inline-block m-0 p-0 fs24 ${style.account}`}>
                  حساب
                </p>
                <p
                  className={`d-inline-block my-0 mx-1 p-0 fs36 green ${style.title}`}
                >
                  {item.title}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro} roboto fs18`}>
                الحد الأدنى للإيداع
              </p>
              <div className="mb-2 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18 roboto fw-bold ${style.account}`}>
                  {item.deposit}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro} roboto fs18`}>
                الحد الأدنى للرصيد
              </p>
              <div className="mb-2 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18 roboto fw-bold ${style.account}`}>
                  {item.credit}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro} roboto fs18`}>
                العملات الأساسية المتاحة
              </p>
              <div className="mb-2 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs16 roboto fw-bold ${style.account}`}>
                  {item.currencies.join(",")}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro} roboto fs18`}>
                السبريد من
              </p>
              <div className="mb-2 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18 roboto fw-bold ${style.account}`}>
                  نقطة {item.points}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro} roboto fs18`}>
                الحد الأقصي للرافعات المادية
              </p>
              <div className="mb-2 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18 roboto fw-bold ${style.account}`}>
                  {item.maximum}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro} roboto fs18`}>
                الحد الأدني للرافعات المادية
              </p>
              <div className="mb-2 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18 roboto fw-bold ${style.account}`}>
                  نقطة {item.minmumm}
                </p>
              </div>
              <p className={`mx-0 p-0 mb-1 ${style.intro} roboto fs18`}>
                العمولات
              </p>
              <div className="mb-2 d-flex align-items-center gap-1">
                <img
                  loading="lazy"
                  alt="icon/img"
                  src={icon}
                  className={style.icon}
                />
                <p className={`m-0 p-0 fs18 roboto fw-bold ${style.account}`}>
                  عمولات {item.commissions}
                </p>
              </div>
              <div className={`m-0 p-0 ${style.cardName}`}>{item.title}</div>
            </div>
            <div className="d-flex justify-content-center">
              {" "}
              <button className={style.btn}>
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
