import React from "react";
import style from "../coursesDetails.module.css";
import doneIcon from "../../../../assets/done-round-svgrepo-com(3).png";
import { useTranslation } from "react-i18next";
const CourseTwo = ({ data }) => {
  const [t] = useTranslation();
  return (
    <div >
      {data.map((item, index) => (
        <div
          className={`p-3 mb-3 d-flex align-items-center gap-3 flex-column flex-md-row ${style.box}`}
          key={index}
        >
          <img
            className={style.courseImg}
            loading="lazy"
            alt="course"
            src={item.img}
          />
          <div>
            <p className="mx-0 mt-0 mb-2 green fw-bold  shamel fs20 p-0">
              {index + 1} - {item.title}
            </p>
            <p className="mx-0 mt-0 mb-3  fw-bold fs18 shamel p-0">
              {t("whatLearn")}
            </p>
            <div
              className={`d-block d-lg-flex mb-2 mb-md-0 flex-column flex-wrap gap-1  ${style.textContentTwo}`}
            >
              {item.details.map((detail, index) => (
                <div className="d-flex align-items-center gap-2" key={index}>
                  <img
                    src={doneIcon}
                    alt="done/icon"
                    loading="lazy"
                    className={style.doneIcon}
                  />
                  <p className="m-0 p-0  fs18">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseTwo;
