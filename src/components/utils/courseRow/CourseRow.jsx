import React from "react";
import style from "./courseRow.module.css";
import { useTranslation } from "react-i18next";

import eyeIcon from "../../../assets/eye.png";
const CourseRow = ({ item }) => {
  console.log("cart img", item.header_img);
  const [t] = useTranslation();
  return (
    <div
      className={`d-flex justify-content-between flex-wrap gap-1 align-items-center ${style.mainCaontainer} p-2 mb-4`}
    >
      <div className="d-flex align-items-center gap-3">
        {item.img && (
          <img
            loading="lazy"
            alt="course/img"
            className={style.mainImg}
            src={item.img}
          />
        )}
        <p className="fw-bold m-0 p-0 shamel">{item.name}</p>
      </div>

      <button className={`book ${style.viewsBtn}`}>
        <img
          alt="eye/icon"
          loading="lazy"
          src={eyeIcon}
          className={style.eyeIcon}
        />
        <p className="mx-0 mb-0 mt-1 p-0">{t("continue")}</p>
      </button>
    </div>
  );
};

export default CourseRow;
