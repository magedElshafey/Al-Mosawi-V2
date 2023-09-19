import React, { useState } from "react";
import style from "./courses.module.css";
import MainBtn from "../../utils/mainBtn/MainBtn";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Courses = ({ courses }) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [hoverd, setHoverd] = useState(false);
  const [boxId, setBoxId] = useState(null);
  const handleMouseEnter = (id) => {
    setHoverd(true);
    setBoxId(id);
  };
  const handleMouseLeave = () => {
    setHoverd(false);
    setBoxId(null);
  };
  return (
    <div className="py-5 container">
      <div className="text-center text-md-end">
        <p className="mx-0 mt-0 mb-1 green fw-bolder fs36 shamel">
          {courses.title}
        </p>
        <p className="p-0 mx-0  mt-0 fw-bolder fs24 shamel">{courses.desc}</p>
      </div>

      <div className="mt-3 row justify-content-center gap-5 pt-0 mt-md-5 pt-md-5">
        {courses.levels.map((level, index) => (
          <div
            style={{
              transform: `translateY(${level.Y_space})`,
            }}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`text-center col-10 col-md-3 text-md-end ${style.mainContainer} ${style.transform} py-4 px-2 position-relative`}
          >
            <img
              alt="bg/img"
              src={level.bgImg}
              className={`${style.bgImg} ${
                hoverd && boxId === index ? style.show : style.hide
              }`}
              loading="lazy"
            />
            <img
              alt="mainImg"
              src={
                hoverd && boxId === index ? level.hoverdImg : level.defaultImg
              }
            />
            <p className="p-0 mt-2 mb-4 fs18">{level.level}</p>
            <p
              className={`p-0 mb-3 fw-bolder shamel fs18 w-100 ${style.title}`}
            >
              {level.title}
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <MainBtn
                action={() => navigate(`${level.path}`)}
                text={t("learnBtn")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
/*
     <div className="py-5 container">
      
 
    </div>
*/
