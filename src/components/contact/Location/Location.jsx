import React from "react";
import style from "./location.module.css";
import map from "../../../assets/contactPage/map.png";
const Location = () => {
  return (
    <div className="container py-5">
      <p
        className={`fs-2 text-center fw-bold mb-3 p-0 mt-0 p-0 ${style.mainTitle}`}
      >
        &#8222; نعمل لأجلكم ... شكرا لإختياركم موقعنا. &#8222;
      </p>
      <div className={`mt-5 mb-3 ${style.imgContainer}`}>
        <img alt="map/img" src={map} className={style.mainImg} loading="lazy" />
      </div>
    </div>
  );
};

export default Location;
