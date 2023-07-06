import React from "react";
import style from "./managment.module.css";
import DarkGreenTitle from "../../utils/darkGreenTitle/DarkGreenTitle";
import { MdKeyboardArrowDown } from "react-icons/md";
const Management = ({ action }) => {
  return (
    <div className="py-5">
      <div className={style.mainContainer}>
        <div className="d-flex align-items-center justify-content-between px-4 py-3">
          <p className={`${style.text30} m-0 p-0 fw-bold green`}>
            ادارة محافظ التداول
          </p>
          <MdKeyboardArrowDown onClick={action} className="pointer" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Management;
