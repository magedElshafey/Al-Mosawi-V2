import React from "react";
import style from "./whyus.module.css";
const WhyUs = ({ aboutCompany }) => {
  return (
    <div className="container py-5">
      <div className="row gap-5 align-items-center">
        <div className={`col-12 col-md-6  ${style.imgContainer}`}>
          <img
            alt="about/img"
            loading="lazy"
            src={aboutCompany.img}
            className={style.mainImg}
          />
        </div>
        <div className="col-12 col-md-5">
          {aboutCompany.whyUs.map((item, index) => (
            <div key={index} className="d-flex flex-column gap-1 mb-5">
              <p className="m-0 p-0 fw-bold fs22 shamel">{item.title}</p>
              <p className="m-0 p-0 ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
