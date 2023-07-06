import React, { useState } from "react";
import style from "./courses.module.css";
import DarkGreenTitle from "../../utils/darkGreenTitle/DarkGreenTitle";
import MainBtn from "../../utils/mainBtn/MainBtn";
import { useNavigate } from "react-router-dom";
const Courses = ({ courses }) => {
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
    <div className="container py-5">
      <div className="text-center text-md-end">
        <DarkGreenTitle title={courses.title} />
      </div>
      <p className="p-0 mx-0 my-3 fw-bold fs-4">{courses.desc}</p>
      <div className="mt-5 pt-5 row justify-content-center gap-4">
        {courses.levels.map((level, index) => (
          <div
            style={{
              transform: `translateY(${level.Y_space})`,
            }}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`text-center text-md-end col-12 col-md-5 col-lg-3 ${style.mainContainer} py-4 px-2 position-relative`}
          >
            {/* bg img*/}
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
            <p className="p-0 mt-2 mb-4">{level.level}</p>
            <p className={`p-0 mb-4 fw-bolder w-100 ${style.title}`}>
              {level.title}
            </p>
            <div className="d-flex justify-content-center justify-content-md-end">
              <MainBtn
                action={() => navigate(`${level.path}`)}
                text="اعرف اكثر"
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
     <div className=""></div>
*/
