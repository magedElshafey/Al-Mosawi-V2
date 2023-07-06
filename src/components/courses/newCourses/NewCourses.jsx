import React from "react";
import style from "./newCourses.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import timer from "../../../assets/timer.png";
const NewCourses = ({ newCourses }) => {
  return (
    <div>
      <h3 className="mx-0 mt-0 mb-3 p-0 fs36 fw-bolder">جديد الدورات</h3>
      <div className="my-3">
        {newCourses.map((item, index) => (
          <div
            key={index}
            className={`py-3 ${style.mainCaontainer} d-flex align-items-center gap-3`}
          >
            <img
              alt="main/img"
              loading="lazy"
              src={item.img}
              className={style.mainImg}
            />
            <div>
              <p className="fw-bold fs18 mx-0 mb-4 p-0">{item.title}</p>
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex align-items-center gap-2 fs18">
                  <img
                    alt="timer/icon"
                    loading="lazy"
                    className={style.timer}
                    src={timer}
                  />
                  <p className="p-0 mx-0 mb-1 mt-1">{item.time}</p>
                </div>
                <p className="whiteGreen fw-bold fs24 m-0 p-0">{item.price}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCourses;
