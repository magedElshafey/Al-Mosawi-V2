import React from "react";
import style from "./stats.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
const Stats = () => {
  return (
    <div className={style.mainContainer}>
      <div className="container py-2">
        <div
          className={`d-flex justify-content-center gap-3 align-items-center  ${style.statContainer}`}
        >
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropup />
            </span>
            <span className="text-uppercase text-white ">wwe</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropdown />
            </span>
            <span className="text-uppercase text-white ">dr</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropdown />
            </span>
            <span className="text-uppercase text-white ">tesla</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="green">
              0.77%
              <IoMdArrowDropdown />
            </span>
            <span className="text-uppercase text-white ">btc</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="green">
              0.77%
              <IoMdArrowDropdown />
            </span>
            <span className="text-uppercase text-white ">eth</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropup />
            </span>
            <span className="text-uppercase text-white ">mmm</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropup />
            </span>
            <span className="text-uppercase text-white ">mmm</span>
          </div>

          <span className="p-0   text-white">popular</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
/**
 *
 */
