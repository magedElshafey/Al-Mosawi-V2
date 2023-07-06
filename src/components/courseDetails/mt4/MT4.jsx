import React from "react";
import style from "./mt4.module.css";
const MT4 = ({ img }) => {
  return (
    <div className=" mb-5">
      <div className="row ">
        <div className={`col-12 col-md-9 ${style.imgContainer}`}>
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
