import React, { useState } from "react";
import style from "./WeOffer.module.css";
import DarkGreenTitle from "../../utils/darkGreenTitle/DarkGreenTitle";
import MainBtn from "../../utils/mainBtn/MainBtn";
import { MdArrowBackIosNew } from "react-icons/md";
const WeOffer = ({ weOffer }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [detailsId, setDetailsId] = useState(null);
  const handleMouseEnter = (id) => {
    setShowDetails(true);
    setDetailsId(id);
  };
  const handleMouseLeave = () => {
    setShowDetails(false);
    setDetailsId(null);
  };
  return (
    <div className="container py-5">
      <div className="row gap-3 gap-md-5">
        <div className="col-12 col-md-7 d-flex flex-column gap-3">
          <div className="text-center text-md-end">
            <p
              className={`m-0 text-center text-md-start p-0 d-inline-block  ${style.title}`}
            >
              {weOffer.title}
            </p>
            <DarkGreenTitle title={weOffer.greenTitle} />
          </div>

          <p className=" fs-5 fs-md-3 m-0 p-0  fw-bolder text-center text-md-end">
            {weOffer.desc}
          </p>
          <p className={` m-0 p-0 text-center text-md-end  ${style.subDesc}`}>
            {weOffer.subDesc}
          </p>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end">
          <MainBtn text="أعرف أكثر" />
        </div>
      </div>
      <div className="pt-4 row justify-content-center  gap-3">
        {weOffer.accounts.map((account, index) => (
          <div
            key={index}
            className={`col-12 col-md-5 position-relative ${style.mainContainer}`}
          >
            <img
              className={style.mainImg}
              alt="account/img"
              loading="lazy"
              src={account.img}
            />
            <div className={style.text}>
              <p className="m-0 p-0 fw-bold fs-4">{account.title}</p>
              <p className="m-0 p-0 fw-bold fs-1">{account.desc}</p>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="d-flex align-items-center gap-3"
              >
                <button
                  className={`d-flex align-items-center gap-2 text-white ${style.btn}`}
                >
                  <div className={`p-2 ${style.arrowContainer}`}>
                    <MdArrowBackIosNew size={20} />
                  </div>
                  <span>افتح حساب</span>
                </button>
                <button
                  className={`${
                    showDetails && detailsId === index ? style.show : style.hide
                  } d-flex align-items-center gap-2 text-white ${
                    style.secondBtn
                  }`}
                >
                  <MdArrowBackIosNew size={20} />

                  <span>افتح حساب</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeOffer;
