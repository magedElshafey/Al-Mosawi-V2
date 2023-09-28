import React from "react";
import style from "./spinner.module.css";
const Spinner = () => {
  return (
    <div className={style.spinnerContainer}>
      <div className={style.colorful}></div>
    </div>
  );
};

export default Spinner;
