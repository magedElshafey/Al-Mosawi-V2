import React from "react";
import style from "./tadwal.module.css";
import tdwalImg from "../../../assets/Group 73340.png";
import { useTranslation } from "react-i18next";
const Tadawl = ({ tadwal }) => {
  const { t, i18n } = useTranslation();
  console.log("hiii this is the language", i18n.language);
  return (
    <div className={`pt-3 ${style.mainDiv}`}>
      <div className="d-md-none">
        <div className="container">
          <div className="row gap-5 align-items-center">
            <div className={`col-12  position-relative ${style.imgContainer}`}>
              <img
                alt="tadwal/img"
                loading="lazy"
                src={tadwal.homeMainImage}
                className={style.tadwalImg}
              />
              <div
                className={`${style.textContent} d-flex flex-column  gap-2 ${
                  i18n.language === "ar" ? "pe-3 pe-md-5" : "ps-3 ps-md-5"
                }`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: tadwal.homeMainTitle }}
                />
              </div>
            </div>
            <div className="col-12">
              {tadwal.features.map((item, index) => (
                <div
                  className="d-flex align-items-center gap-4 mb-3"
                  key={index}
                >
                  <img
                    alt="icon/img"
                    className={style.icon}
                    src={item.featureImage}
                    loading="lazy"
                  />
                  <div className="d-flex flex-column gap-1">
                    <p className="fw-bolder m-0 p-0 fs18 shamel">
                      {item.featuretitle}
                    </p>
                    <p className="m-0 p-0">{item.featureDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <div className="row align-items-center gap-5 ">
          <div className={`col-6 position-relative ${style.imgContainer}`}>
            <img
              alt="tadwal/img"
              loading="lazy"
              src={tadwal.homeMainImage}
              className={style.tadwalImg}
            />
            <div
              className={`${
                i18n.language === "ar" ? "pe-3 pe-md-5" : "ps-3 ps-md-5"
              } ${style.textContent} d-flex flex-column  gap-2 `}
            >
              <div dangerouslySetInnerHTML={{ __html: tadwal.homeMainTitle }} />
            </div>
          </div>
          <div className="col-5">
            {tadwal.features.map((item, index) => (
              <div className="d-flex align-items-center gap-3 mb-2" key={index}>
                <img
                  alt="icon/img"
                  className={style.icon}
                  src={item.featureImage}
                  loading="lazy"
                />
                <div className="d-flex flex-column ">
                  <p className="fw-bolder m-0 p-0 fs18 shamel">
                    {item.featuretitle}
                  </p>
                  <p className="m-0 p-0">{item.featureDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tadawl;
