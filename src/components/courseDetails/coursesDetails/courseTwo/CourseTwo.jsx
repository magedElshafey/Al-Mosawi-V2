import React from "react";
import style from "../coursesDetails.module.css";
import doneIcon from "../../../../assets/done-round-svgrepo-com(3).png";
const CourseTwo = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className={`${style.box} mx-0 mt-0 mb-3 p-3`}>
          <p className="mx-0 mt-0 mb-3 green fw-bold   fs22 p-0">
            {index + 1} - {item.name}
          </p>
          <div
            className={`p-3 mb-3 d-flex align-items-center gap-3 flex-column flex-md-row`}
          >
            {item.image && (
              <img
                className={style.courseImg}
                loading="lazy"
                alt="course"
                src={item.image}
              />
            )}
            <div className="row">
              {item.ClassContent.map((detail, index) => (
                <div
                  className={`col-12 ${
                    item.ClassContent.length === 1 && item.image
                      ? "col-md-12"
                      : item.ClassContent.length > 1 && item.image
                      ? "col-md-6"
                      : item.ClassContent.length > 1 && !item.image
                      ? "col-md-6 col-lg-4"
                      : ""
                  } }  `}
                  key={index}
                >
                  <div className="d-flex gap-2">
                    {detail.content && (
                      <img
                        src={doneIcon}
                        alt="done/icon"
                        loading="lazy"
                        className={`mt-1 ${style.doneIcon}`}
                      />
                    )}

                    <p className="m-0 p-0">{detail.content}</p>
                  </div>
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
/**
 *   {data.map((item, index) => (
        <div key={index} className={`${style.box} mx-0 my-4 p-3`}>
          <p className="mx-0 mt-0 mb-3 green fw-bold   fs22 p-0">
            {index + 1} - {item.name}
          </p>
          
          <div
            className={`p-3 mb-3 d-flex align-items-center gap-3 flex-column flex-md-row`}
            key={index}
          >
            {item.image && (
              <img
                className={style.courseImg}
                loading="lazy"
                alt="course"
                src={item.image}
              />
            )}
            
          </div>
        </div>
      ))}
 */
