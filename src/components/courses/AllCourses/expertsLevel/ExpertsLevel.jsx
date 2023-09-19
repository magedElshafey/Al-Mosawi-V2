import React from "react";
import style from "./expertsLevel.module.css";
import pdfIcon from "../../../../assets/pdfIcon.svg";
import CourseRow from "../../../utils/courseRow/CourseRow";
import { useTranslation } from "react-i18next";

const ExpertsLevel = ({ expertCourses }) => {
  const newCount = expertCourses.map((item) => Math.floor(item.ratio / 25));
  const [t] = useTranslation();
  return (
    <div className="py-3">
      <h3 className="fs26 shamel fw-bolder mb-2 mx-0 mt-0 p-0">
        {t("courses")}
      </h3>
      <p className="mb-2 mx-0 mt-0 p-0">يتم كتابة وصف عن الدورة التعليمية</p>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="d-inline-block m-0 p-0 fw-bold fs18 shamel">
            مستوي الخبراء
          </p>
          <p className="mx-1 my-0 d-inline-block fw-bold p-0 shamel green fs20">
            / Expert
          </p>
        </div>
        <button className={`book ${style.btn}`}>
          <img
            alt="pdf/icon"
            loading="lazy"
            src={pdfIcon}
            className={style.mainImg}
          />
          <p className={`mx-0 mb-0 mt-1 p-0 text-white ${style.downLoad}`}>
            {t("downloadCertificate")}
          </p>
        </button>
      </div>
      <div className="py-3">
        {expertCourses.map((item, index) => (
          <CourseRow item={item} key={index} newCount={newCount} />
        ))}
      </div>
    </div>
  );
};

export default ExpertsLevel;
