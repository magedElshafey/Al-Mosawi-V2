import React from "react";
import style from "../coursesDetails.module.css";
import doneIcon from "../../../../assets/done-round-svgrepo-com(3).png";
import { useTranslation } from "react-i18next";
const CourseTwo = ({ data }) => {
  console.log("this is the data from course details page", data);
  const [t] = useTranslation();
  return (
    <div>
      {data.map((item, index) => (
        <div className={`${style.box} mx-0 my-4 p-3`}>
          <p className="mx-0 mt-0 mb-3 green fw-bold  shamel fs22 p-0">
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
            {item.ClassContent.map((detail, index) => (
              <div className="d-flex align-items-center gap-2" key={index}>
                <img
                  src={doneIcon}
                  alt="done/icon"
                  loading="lazy"
                  className={style.doneIcon}
                />
                <p className="m-0 p-0  fs18">{detail.content}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseTwo;
/**
 *
 * {data.map((item, index) => {
        item.image ? (
          <div
           
            key={index}
          >
            <img
             
            />
            <div>
             
              <p className="mx-0 mt-0 mb-3  fw-bold fs18 shamel p-0">
                {item.why_des}
              </p>
              <div
                className={`d-block d-lg-flex mb-2 mb-md-0 flex-column flex-wrap gap-1  ${style.textContentTwo}`}
              >
                
              </div>
            </div>
          </div>
        ) : (
          <div className={`p-3 mb-5 ${style.box}`} key={index}>
            <p
              className={`green fw-bold shamel fs20 green mb-3 mt-0 px-0 pb-0 pt-3`}
            >
              {index + 1} - {item.name}
            </p>
            <p className="mx-0 mt-0 mb-3 p-0 fs18 shamel fw-bold">
              {item.why_des}
            </p>
            <div
              className={`d-block d-md-flex mb-2 mb-md-0 flex-column flex-wrap gap-1 ${style.textContent}`}
            >
              {item.ClassContent.map((detail, index) => (
                <div className="d-flex align-items-center gap-2" key={index}>
                  <img
                    src={doneIcon}
                    alt="done/icon"
                    loading="lazy"
                    className={style.doneIcon}
                  />
                  <p className="m-0 p-0 fs18">{detail.content}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
 */
