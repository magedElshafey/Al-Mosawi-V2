import React from "react";
import style from "./mt4.module.css";
const MT4 = ({ img }) => {
  return (
    <div className=" py-3">
      <div className="row ">
        <div className={`col-12  ${style.imgContainer}`}>
          <img
            loading="lazy"
            alt="mt4/img"
            className={style.mainImg}
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default MT4;
