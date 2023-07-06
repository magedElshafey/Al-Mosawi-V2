import React from "react";
import style from "./serviceCard.module.css";
const ServicesCard = ({ data }) => {
  return (
    <div className={`${style.mainCard} text-center `}>
      <div>
        <p className={`fw-bold fs24 m-0 p-0 text-white ${style.title}`}>
          {data.title}
        </p>
        {/*icon container*/}
        <div
          className={`m-0 p-0 ${style.iconContainer} d-flex align-items-center justify-content-center green `}
        >
          <div
            className={`${style.icon} d-flex align-items-center justify-content-center p-1`}
          >
            <img
              src={data.img}
              alt="icon/img"
              loading="lazy"
              className={style.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
