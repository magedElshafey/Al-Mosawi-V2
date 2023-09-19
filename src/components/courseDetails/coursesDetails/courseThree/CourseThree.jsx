import React from "react";
import style from "../coursesDetails.module.css";
const CourseThree = ({ data }) => {
  return (
    <div>
      <p className={`green fw-bold mb-3 mx-0 mt-0 p-0 shamel fs22`}>
        تضم هذه الدورة {data.length} فصول للتعلم
      </p>
      {data.map((item, index) => (
        <div
          className={`${style.box} mb-3 p-3 d-flex align-items-center gap-3 flex-column flex-md-row`}
          key={index}
        >
          <img
            alt="courseImg"
            loading="lazy"
            className={style.courseImg}
            src={item.img}
          />
          <div>
            <p className="mb-2 mt-0 p-0 fw-bold green shamel fs20">
              {index + 1} - {item.title}
            </p>
            {item.details.map((detail, index) => (
              <p key={index} className="mx-0 my-2 p-0  fs18">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseThree;
