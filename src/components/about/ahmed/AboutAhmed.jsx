import React from "react";
import style from "./aboutAhmed.module.css";
const AboutAhmed = ({ aboutAhmed }) => {
  return (
    <div className="container py-5 mb-3">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-3">
          <p className="fw-bolder fs-2 mb-2 mx-0 p-0">{aboutAhmed.intro}</p>
          <p className="mb-4 fs-1 fw-bolder p-0 mx-0">{aboutAhmed.name}</p>
          <p className="mx-0 mb-5 lh">{aboutAhmed.desc1}</p>
          <p
            className="mx-0 m-0 lh"
            dangerouslySetInnerHTML={{ __html: aboutAhmed.desc2 }}
          ></p>
        </div>
        <div className={`${style.imgContainer} col-12 col-md-6`}>
          <img
            alt="ahmed_El-Mosawi / img"
            loading="lazy"
            src={aboutAhmed.img}
            className={style.mainImg}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutAhmed;
