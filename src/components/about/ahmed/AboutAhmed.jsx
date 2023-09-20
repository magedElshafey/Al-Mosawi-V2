import React from "react";
import style from "./aboutAhmed.module.css";
import { useTranslation } from "react-i18next";
const AboutAhmed = ({ aboutAhmed, title, desc }) => {
  const { i18n } = useTranslation();
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-3">
          <p className="fw-bolder shamel fs28 mb-1 mx-0 p-0">
            {i18n === "en" ? "who is" : "من هو"}
          </p>
          <p className="mb-3 fs36 shamel fw-bolder p-0 mx-0">{title}</p>

          <p
            className="mx-0 m-0 roboto fs18 "
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
        <div className={` d-flex justify-content-center col-12 col-md-6`}>
          <div className={style.imgContainer}>
            <img
              alt="ahmed_El-Mosawi / img"
              loading="lazy"
              src={aboutAhmed.img}
              className={style.mainImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAhmed;
