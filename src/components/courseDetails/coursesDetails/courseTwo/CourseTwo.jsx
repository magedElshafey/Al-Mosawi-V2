import React from "react";
import style from "../coursesDetails.module.css";
import doneIcon from "../../../../assets/done-round-svgrepo-com(3).png";
const CourseTwo = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div
          className={`p-3 mb-5 d-flex align-items-center gap-3 flex-column flex-md-row ${style.box}`}
          key={index}
        >
          <img
            className={style.courseImg}
            loading="lazy"
            alt="course"
            src={item.img}
          />
          <div>
            <p className="mx-0 mt-0 mb-3 green fw-bold fs24 p-0">
              {index + 1} - {item.title}
            </p>
            <p className="mx-0 mt-0 mb-3  fw-bold fs22 p-0">ماذا سنتعلم :</p>
            <div
              className={`d-block  d-md-flex flex-column flex-wrap gap-3 ${style.textContentTwo}`}
            >
              {item.details.map((detail, index) => (
                <div className="d-flex align-items-center gap-2" key={index}>
                  <img
                    src={doneIcon}
                    alt="done/icon"
                    loading="lazy"
                    className={style.doneIcon}
                  />
                  <p className="m-0 p-0 roboto fs22">{detail}</p>
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
