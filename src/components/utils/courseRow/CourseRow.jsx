import React from "react";
import style from "./courseRow.module.css";

import eyeIcon from "../../../assets/eye.png";
const CourseRow = ({ item, newCount }) => {
  return (
    <div
      className={`d-flex justify-content-between flex-wrap gap-3 align-items-center ${style.mainCaontainer} py-3`}
    >
      <div className="d-flex align-items-center gap-3">
        <img
          loading="lazy"
          alt="course/img"
          className={style.mainImg}
          src={item.img}
        />
        <p className="fs18 fw-bold m-0 p-0">{item.title}</p>
      </div>

      <button className={style.viewsBtn}>
        <img
          alt="eye/icon"
          loading="lazy"
          src={eyeIcon}
          className={style.eyeIcon}
        />
        <p className="mx-0 mb-0 mt-1 p-0">{item.btnText}</p>
      </button>
    </div>
  );
};

export default CourseRow;
