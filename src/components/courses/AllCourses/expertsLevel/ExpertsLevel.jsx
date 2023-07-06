import React from "react";
import style from "./expertsLevel.module.css";
import pdfIcon from "../../../../assets/pdfIcon.svg";
import CourseRow from "../../../utils/courseRow/CourseRow";
const ExpertsLevel = ({ expertCourses }) => {
  const newCount = expertCourses.map((item) => Math.floor(item.ratio / 25));

  return (
    <div className="mb-4">
      <h3 className="fs36 fw-bolder mb-3 mx-0 mt-0 p-0">الدورات التعليمية</h3>
      <p className="fs22 roboto  mb-3 mx-0 mt-0 p-0">
        يتم كتابة وصف عن الدورة التعليمية
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="d-inline-block m-0 p-0 fw-bold fs24">مستوي الخبراء</p>
          <p className="mx-1 my-0 d-inline-block fw-bold p-0 green fs24">
            / Expert
          </p>
        </div>
        <button className={style.btn}>
          <img
            alt="pdf/icon"
            loading="lazy"
            src={pdfIcon}
            className={style.mainImg}
          />
          <p className={`mx-0 mb-0 mt-1 p-0 text-white ${style.downLoad}`}>
            تحميل الشهادة
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
