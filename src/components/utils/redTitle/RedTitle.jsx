import React from "react";
import style from "./redTitle.module.css";
const RedTitle = ({ title }) => {
  return <p className={`fs-1 fw-bolder m-0 p-0 ${style.title}`}>{title}</p>;
};

export default RedTitle;
