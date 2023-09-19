import React from "react";
import style from "./serviceCard.module.css";
import { useNavigate } from "react-router-dom";
const ServicesCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-wrap  align-items-center gap-5">
      {data.map((item, index) => (
        <div
          key={index}
          className={`${style.mainCard} text-center pointer  mb-2  `}
          onClick={() => navigate(`${item.path}`)}
        >
          <div>
            <p
              className={`fw-bold shamel fs20 m-0 p-0 text-white ${style.title}`}
            >
              {item.title}
            </p>
            {/*icon container*/}
            <div
              className={`m-0 p-0 ${style.iconContainer} d-flex align-items-center justify-content-center green `}
            >
              <div
                className={`${style.icon} d-flex align-items-center justify-content-center p-1`}
              >
                <img
                  src={item.img}
                  alt="icon/img"
                  loading="lazy"
                  className={style.icon}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
