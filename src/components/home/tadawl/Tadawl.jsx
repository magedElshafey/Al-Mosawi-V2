import React from "react";
import style from "./tadwal.module.css";
import tdwalImg from "../../../assets/Group 73340.png";
import GreentTitle from "../../utils/greenTitle/GreentTitle";
const Tadawl = ({ tadwal }) => {
  return (
    <div className="py-5 container">
      <div className="row gap-5 align-items-center">
        <div
          className={`col-12 col-md-6  position-relative ${style.imgContainer}`}
        >
          <img
            alt="tadwal/img"
            loading="lazy"
            src={tdwalImg}
            className={style.tadwalImg}
          />
          <div
            className={`pe-3 pe-md-5 ${style.textContent} d-flex flex-column  gap-2`}
          >
            <p className="m-0 p-0 text-white fw-bolder fs-2">تداول</p>
            <p className="m-0 p-0 text-white fs-3">علي اشهر</p>
            <div className="d-flex align-items-center gap-3">
              <GreentTitle isSlider={false} title="الأدوات المالية" />
              <p className="m-0 p-0 text-white fw-bold fs-3">في السوق</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 mb-3 mb-md-0">
          {tadwal.map((item, index) => (
            <div className="d-flex align-items-center gap-4 mb-3" key={index}>
              <img
                alt="icon/img"
                className={style.icon}
                src={item.img}
                loading="lazy"
              />
              <div className="d-flex flex-column gap-1">
                <p className="fw-bolder m-0 p-0 fs-4">{item.title}</p>
                <p className="m-0 p-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tadawl;
