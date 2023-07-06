import React from "react";
import style from "../coursesDetails/coursesDetails.module.css";
const AboutCourse = ({ data }) => {
  return (
    <div className=" py-5">
      <div className="row ">
        <div className="col-12 col-md-9">
          <p
            className={`text-center text-md-end green fw-bold mx-0 p-0 mb-3  ${style.text36}`}
          >
            معلومات عن محتوي الدورة
          </p>
          <div className="mt-4">
            {data.map((item, index) => (
              <p
                key={index}
                className={`roboto fs18 ${style.aboutCourseDesc} p-0 mx-0 lh mb-5 text-center text-md-end`}
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
