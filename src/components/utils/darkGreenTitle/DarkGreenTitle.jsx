import React from "react";
import style from "./darkgreentitle.module.css";
const DarkGreenTitle = ({ title }) => {
  return (
    <p className={` d-inline-block fw-bolder m-0 p-0 ${style.title}`}>
      {title}
    </p>
  );
};

export default DarkGreenTitle;
