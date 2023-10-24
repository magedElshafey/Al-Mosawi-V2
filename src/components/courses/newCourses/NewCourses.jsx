import React from "react";
import style from "./newCourses.module.css";
import { useTranslation } from "react-i18next";

import timer from "../../../assets/timer.png";
const NewCourses = ({ newCourses }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      {newCourses.length ? (
        <div className="py-5">
          <h3 className="mx-0 mt-0 mb-2 p-0 fs26 shamel fw-bolder">
            {t("newCourses")}
          </h3>
          <div>
            {newCourses.map((item, index) => (
              <div
                key={index}
                className={`p-2 ${style.mainCaontainer} mb-3 d-flex align-items-center gap-3`}
              >
                <img
                  alt="main/img"
                  loading="lazy"
                  src={item.header_img}
                  className={style.mainImg}
                />
                <div>
                  <p className="fw-bold mx-0 mb-2 p-0 shamel ">{item.title}</p>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        alt="timer/icon"
                        loading="lazy"
                        className={`mb-1 ${style.timer}`}
                        src={timer}
                      />
                      <p className="p-0 m-0 book">
                        {item.hours}{" "}
                        {i18n.language === "ar" ? "ساعات" : "hours"}
                      </p>
                    </div>
                    <p className="whiteGreen fw-bold shamel m-0 p-0">
                      {item.price_after_discount
                        ? item.price_after_discount
                        : item.price}{" "}
                      $
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewCourses;
