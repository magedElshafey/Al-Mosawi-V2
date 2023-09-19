import React from "react";
import style from "../coursesDetails.module.css";
import doneIcon from "../../../../assets/done-round-svgrepo-com(3).png";
import { useTranslation } from "react-i18next";
const CourseOne = ({ data }) => {
  const [t] = useTranslation();
  return (
    <div >
      {data.map((item, index) => (
        <div className={`p-3 mb-5 ${style.box}`} key={index}>
          <p
            className={`green fw-bold shamel fs20 green mb-3 mt-0 px-0 pb-0 pt-3`}
          >
            {index + 1} - {item.title}
          </p>
          <p className="mx-0 mt-0 mb-3 p-0 fs18 shamel fw-bold">
            {t("whatLearn")}
          </p>
          <div
            className={`d-block d-md-flex mb-2 mb-md-0 flex-column flex-wrap gap-1 ${style.textContent}`}
          >
            {item.details.map((detail, index) => (
              <div className="d-flex align-items-center gap-2" key={index}>
                <img
                  src={doneIcon}
                  alt="done/icon"
                  loading="lazy"
                  className={style.doneIcon}
                />
                <p className="m-0 p-0 fs18">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseOne;
