import React from "react";
import style from "./video.module.css";
import videoPlayer from "../../../assets/video.png";
import GreentTitle from "../../utils/greenTitle/GreentTitle";
import { MdArrowBackIosNew } from "react-icons/md";
const Video = () => {
  return (
    <div className={`${style.mainDiv}`}>
      <div className={` w-100 ${style.text}`}>
        <div className="row justify-content-center gap-3 gap-md-5 w-100 align-items-center ">
          <div className="mb-3 mb-md-0 col-12 col-md-8 ">
            <p className="m-0 p-0 fw-bold fs-4 fs-md-1">
              احصل على نتائج هائلة لتداولاتك
            </p>

            <p
              className={`d-inline-block p-0 mx-0 my-3 fw-bold ${style.success}`}
            >
              بنسبة نجاح عالية للصفقات تتجاوز
            </p>
            <p
              className={`fw-bolder d-inline-block whiteGreen me-2 my-0 p-0 ${style.percentage}`}
            >
              80%
            </p>
            <p
              className={`mt-5 d-inline-block p-0 mx-0  fw-bold ${style.percentage} text-center text-md-end`}
            >
              اشترك الآن بقسم ال
            </p>
            <p
              className={`${style.percentage} text-uppercase me-2 whiteGreen mt-5 d-inline-block p-0 mx-0 my-2 fw-bold `}
            >
              prochart
            </p>
            <p className={`m-0 p-0  fw-bold ${style.chances}`}>
              واستفيد من الفرص القوية و المتميزة
            </p>

            <button
              className={`mt-5  d-flex align-items-center  gap-2 text-white ${style.btn}`}
            >
              <div className={`p-2 ${style.arrowContainer}`}>
                <MdArrowBackIosNew size={20} />
              </div>
              <span> اعرف اكثر</span>
            </button>
          </div>

          <div className="col-12 col-md-3 justify-content-center">
            <img
              alt="videoPlayerImg"
              src={videoPlayer}
              loading="lazy"
              className={`pointer ${style.playerImg} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
