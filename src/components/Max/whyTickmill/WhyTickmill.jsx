import React from "react";
import style from "./whyTickmill.module.css";
import arrow from "../../../assets/arrowTop.png";
import check from "../../../assets/check.png";
import { whyTickmill, media } from "../../../fakers/data";
import buyImg from "../../../assets/buy-svgrepo-com.png";
const WhyTickmill = () => {
  return (
    <div className="py-4 row gap-3">
      <div className={`col-12 col-md-7 p-2 ${style.mainContainer}`}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-2 fs28">
            <p className={`m-0 p-0 fw-bold ${style.blue}`}>لماذا تختار</p>
            <p className="m-0 p-0 red fw-bold">Tickmill</p>
          </div>
          <img
            loading="lazy"
            className={style.arrow}
            alt="arrow/img"
            src={arrow}
          />
        </div>
        <div>
          {whyTickmill.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="mb-2 d-flex align-items-center gap-2 mb-2">
                <img
                  loading="lazy"
                  src={check}
                  className={style.check}
                  alt="check/img"
                />
                <p className={`m-0 p-0 fs22 fw-bold ${style.blue}`}>
                  {item.title}
                </p>
              </div>
              <p className="m-0 p-0 roboto fs18 ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`px-5 py-3 col-12 col-md-4 ${style.mediaContainer}`}>
        <p className="fs28 text-white mx-0 mt-0 mb-1 p-0">وسائل</p>
        <p className="fs36 green mx-0 mt-0 mb-5 p-0">السحب والإيداع</p>
        {media.details.map((item, index) => (
          <div className="mb-4 d-flex align-items-center gap-2" key={index}>
            <img
              alt="check/img"
              loading="lazy"
              className={style.check}
              src={check}
            />
            <p className="m-0 p-0 text-white">{item.title}</p>
          </div>
        ))}
        <p className="text-white">{media.partener.join(" - ")}</p>
        <div className="d-flex justify-content-center py-3">
          <img
            loading="lazy"
            className={style.buyImg}
            src={buyImg}
            alt="buy / img"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyTickmill;
