import React from "react";
import style from "./advantage.module.css";
import WHY from "../why/WHY";
const Advantages = ({ img, question, details, data }) => {
  return (
    <div className="py-3">
      <div className="row">
        <div
          className={`position-relative col-12 col-md-10 ${style.imgContainer}`}
        >
          <img
            loading="lazy"
            src={img}
            alt="advantage/img"
            className={style.mainImg}
          />
          <div className={style.contentContainer}>
            <p className="pt-2 pb-0 px-0 mb-2 mt-0 mx-0 green fw-bold fs36">
              مميزات الدورة
            </p>
            <div className="my-4">
              <p className="mx-0 roboto fs24 mb-2 p-0 fw-bold">{question}</p>
              {details.map((detail, index) => (
                <p key={index} className="mx-0 roboto fs22  mb-2 p-0 ">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
