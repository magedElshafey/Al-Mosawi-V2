import React from "react";
import style from "./coursesDetails.module.css";
import doneIcon from "../../../assets/done-round-svgrepo-com(3).png";
const CoursesDetails = ({ data }) => {

  return (
    <div className="container py-3">
      <p className="mx-0 mt-0 fs30 p-0 mb-3 green fw-bold">
        تضم هذه الدورة {data.details.length} فصول للتعلم
      </p>
      <div className="mt-5 row">
        {data.details.map((item, index) => (
          <div
            className={`pb-3 col-12 col-md-8 mb-4 ${style.mainContainer}`}
            key={index}
          >
            <div className="d-flex flex-column flex-md-row  gap-5">
              {item.img && (
                <img
                  className={style.mainImg}
                  alt="course/img"
                  src={item.img}
                  loading="lazy"
                />
              )}
              <div>
                <p className="fs24  mx-0 mb-5 fw-bold green p-0">
                  {index + 1} - {item.title}
                </p>
                <p className="fs20 fw-bold mx-0 mb-4 p-0">ماذا سنتعلم : </p>
                <div
                  className={`d-flex flex-column align-items-center justify-content-center  gap-2 flex-wrap ${style.detailsContainer}`}
                >
                  {item.details.map((item, index) =>
                    data.hasIcons ? (
                      <div
                        key={index}
                        className="d-flex  flex-column align-items-center gap-2 mb-3"
                      >
                        <img
                          src={doneIcon}
                          alt="done/icon"
                          loading="lazy"
                          className={style.doneIcon}
                        />
                        <p className="m-0 p-0 roboto fs22">{item}</p>
                      </div>
                    ) : (
                      <p className="m-0 p-0 roboto fs22">{item}</p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesDetails;
/*
    <div className="container py-3">
     
      <div className="mt-5 row ">
        {data.details.map((item, index) => (
          <div
            key={index}
          
          >
            {data.hasImg ? (
              <div className="d-flex flex-column flex-md-row     ">
              
           
              </div>
            ) : (
              <div>
                <p className="fs-1 mx-0 mb-5 fw-bold green p-0">
                  {index + 1} - {item.title}
                </p>
                <p className="fs-3 fw-bold mx-0 mb-4 p-0">ماذا سنتعلم : </p>
                <div
                  className={`d-flex flex-column  gap-2 flex-wrap ${style.textContent}`}
                >
                  {item.details.map((item, index) =>
                    data.hasIcons ? (
                      <div
                        key={index}
                        className="d-flex align-items-center gap-3 mb-3"
                      >
                        <img
                          src={doneIcon}
                          alt="done/icon"
                          loading="lazy"
                          className={style.doneIcon}
                        />
                        <p className="m-0 p-0">{item}</p>
                      </div>
                    ) : (
                      <p>{item}</p>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
*/
