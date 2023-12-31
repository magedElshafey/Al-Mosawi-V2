import React from "react";
import style from "./expertsLevel.module.css";
import pdfIcon from "../../../../assets/pdfIcon.svg";
import CourseRow from "../../../utils/courseRow/CourseRow";
import { useTranslation } from "react-i18next";

const ExpertsLevel = ({ expertCourses }) => {
  const { i18n, t } = useTranslation();
  return (
    <div className="py-3">
      <h3 className="fs26 shamel fw-bolder mb-2 mx-0 mt-0 p-0">
        {t("courses")}
      </h3>
      {expertCourses.length ? (
        <div>
          {expertCourses.map((course, index) => (
            <div className="mb-3" key={index}>
              <div className="d-flex justify-content-between align-items-center mb-1 flex-column flex-md-row gap-1 gap-md-0">
                <div
                  className="green fw-bolder fs-5"
                  dangerouslySetInnerHTML={{ __html: course.title }}
                />

                <button className={`book ${style.btn}`}>
                  <img
                    alt="pdf/icon"
                    loading="lazy"
                    src={pdfIcon}
                    className={style.mainImg}
                  />
                  <p
                    className={`mx-0 mb-0 mt-1 p-0 text-white ${style.downLoad}`}
                  >
                    {t("downloadCertificate")}
                  </p>
                </button>
              </div>
              <p className="text-black m-0 p-0 mb-2">{course.afterPay_des}</p>
              {course.CourseClasses.map((item, index) => (
                <CourseRow item={item} key={index} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <h4>
          {i18n.language === "ar"
            ? "ليس لديك دورات متاحة الان"
            : "no courses available now"}
        </h4>
      )}
    </div>
  );
};

export default ExpertsLevel;
/**
 *  
      
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="d-inline-block m-0 p-0 fw-bold fs18 shamel">
            مستوي الخبراء
          </p>
          <p className="mx-1 my-0 d-inline-block fw-bold p-0 shamel green fs20">
            / Expert
          </p>
        </div>
       
      </div>
      <div className="py-3">
      
      </div>
 */
