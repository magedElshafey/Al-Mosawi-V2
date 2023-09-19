import React from "react";
import style from "../coursesDetails/coursesDetails.module.css";
import { useTranslation } from "react-i18next";
const AboutCourse = ({ data }) => {
  const [t] = useTranslation();
  return (
    <div className="pb-3 pt-5">
      <div className="row ">
        <div className="col-12">
          <p
            className={`text-center text-md-end green fw-bolder mx-0 p-0 mb-3  fs28 shamel`}
          >
            {t("courseInfo")}
          </p>
          <div>
            {data.map((item, index) => (
              <p
                key={index}
                className={`${style.aboutCourseDesc} p-0 mx-0  mb-3 text-center text-md-end`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
