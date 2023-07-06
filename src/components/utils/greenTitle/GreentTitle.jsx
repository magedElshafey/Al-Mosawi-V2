import React from "react";
import style from "./greenTitle.module.css";
const GreentTitle = ({ title, isSlider }) => {
  return (
    <p
      className={`fs48 d-inline-block m-0 fw-bolder p-0 ${style.title} ${
        isSlider ? style.bigTitle : style.smallTitle
      }`}
    >
      {title}
    </p>
  );
};

export default GreentTitle;
