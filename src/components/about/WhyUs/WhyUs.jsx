import React from "react";
import style from "./whyus.module.css";
const WhyUs = ({ aboutCompany }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className={`col-12 col-md-7 mb-3 mb-md-0 ${style.imgContainer}`}>
          <img
            alt="about/img"
            loading="lazy"
            src={aboutCompany.img}
            className={style.mainImg}
          />
        </div>
        <div className="col-12 col-md-5">
          {aboutCompany.whyUs.map((item, index) => (
            <div key={index} className="d-flex flex-column gap-2 mb-4">
              <p className="m-0 p-0 fw-bold fs24">{item.title}</p>
              <p className="m-0 p-0 lh ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
