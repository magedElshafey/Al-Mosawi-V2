import React from "react";
import style from "../coursesDetails.module.css";
import doneIcon from "../../../../assets/done-round-svgrepo-com(3).png";
const CourseOne = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div className={`p-3 mb-3 ${style.box}`} key={index}>
          <p
            className={`green fw-bold ${style.text24} green mb-5 mt-0 px-0 pb-0 pt-3`}
          >
            {index + 1} - {item.title}
          </p>
          <p className="mx-0 mt-0 mb-4 p-0 fs22 fw-bold">ماذا سنتعلم : </p>
          <div
            className={`d-block d-md-flex mb-4 mb-md-0 flex-column flex-wrap gap-3 ${style.textContent}`}
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
      ))}
    </div>
  );
};

export default CourseOne;
