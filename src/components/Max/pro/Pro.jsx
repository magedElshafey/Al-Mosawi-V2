import React from "react";
import style from "./pro.module.css";
import { proCards } from "../../../fakers/data";
import check from "../../../assets/check.png";
import BTN from "../../utils/btn/BTN";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Pro = () => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/forex-account");
  };
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div className="row px-2 py-5 gap-5 justify-content-center ">
          {proCards.map((item, index) => (
            <div
              key={index}
              className={`p-2 col-12 col-md-5 ${style.mainContainer}`}
            >
              <div className="d-flex flex-column align-items-center justify-content-center mb-2">
                <div className="fw-bold">
                  <p
                    className={`${style.title} green shamel fs48 my-0 mx-1 p-0 d-inline-block`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`${style.pro} fs36 shamel m-0 p-0 d-inline-block`}
                  >
                    pro
                  </p>
                </div>
                <p className="m-0 p-0 fs18 fw-bold ">{item.desc}</p>
              </div>
              {item.details.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center gap-2 mb-1"
                >
                  <img
                    loading="lazy"
                    className={style.check}
                    alt="check/img"
                    src={check}
                  />
                  <p className="m-0 p-0">{item}</p>
                </div>
              ))}
              <div className="d-flex justify-content-center mt-3">
                <BTN action={handleClick} text={t("reg")} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pro;
