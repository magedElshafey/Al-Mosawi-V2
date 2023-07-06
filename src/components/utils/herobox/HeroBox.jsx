import React from "react";
import style from "./HeroBox.module.css";
import heroImg from "../../../assets/hhh.png";
import DealsHeader from "../../deals/dealsHeader/DealsHeader";
import DealsDetails from "../../deals/dealsDetails/DealsDetails";
import charts from "../../../assets/Candles1.png";
import GreentTitle from "../greenTitle/GreentTitle";
import prochartImg from "../../../assets/prochartImg.png";
import RecommendationCard from "../../recommendations/RecommendationCard";
import { AiOutlinePlayCircle } from "react-icons/ai";
import HistoryFilter from "../../history/historyFilter/HistoryFilter";
import HistoryDetails from "../../history/historyDetails/HistoryDetails";
const HeroBox = ({ isHistory, isVideo, isRecommendations, data }) => {
  return (
    <div className={style.mainDiv}>
      <div className={`container `}>
        <div className={`pt-5 ${style.content}`}>
          {!isVideo && !isRecommendations && !isHistory && (
            <>
              <div className={` ${style.box} mt-5 pt-5`}>
                <DealsHeader />
                <div className="z-3 mt-5 row align-items-center">
                  <div className="z-3 col-12 col-md-6 mb-3 mb-md-0">
                    <img
                      alt="bitcoin/img"
                      loading="lazy"
                      src={charts}
                      className={` ${style.chartsImg}`}
                    />
                  </div>
                  <div className="z-3 col-12 col-md-6 mb-3 mb-md-0">
                    <DealsDetails />
                  </div>
                </div>
              </div>
            </>
          )}
          {isVideo && !isRecommendations && !isHistory && (
            <div className="w-100 d-flex flex-column align-items-center gap-3">
              <div>
                <p className="fs36 p-0 my-0 mx-2 text-white fw-bold d-inline-block ">
                  فيديو{" "}
                </p>
                <GreentTitle isSlider={false} title=" البروشارت" />
                <GreentTitle isSlider={false} title="/ prochart" />
              </div>
              <p className="fs24 tahoma m-0 p-0 text-white">
                تعرف على جميع مميزات بروشارت وكيفية الحصول على افضل النتائج
              </p>
              <div className="w-100 row justify-content-center">
                <div
                  className={`col-12 position-relative  ${style.prochartContainer}`}
                >
                  <img
                    alt="prochart/video/img"
                    loading="lazy"
                    src={prochartImg}
                    className={style.prochartImg}
                  />
                  <AiOutlinePlayCircle
                    size={70}
                    className={style.videoPlayer}
                  />
                </div>
              </div>
            </div>
          )}
          {!isVideo && isRecommendations && !isHistory && (
            <div className={`container  mt-5 pt-5`}>
              <h3
                className={`z-4 text-white fs-3 fw-bolder mb-3 ${style.text}`}
              >
                قسم و تحليلات و التوصيات{" "}
              </h3>
              <div className="d-flex flex-wrap  align-items-center gap-4 mt-5">
                {data.map((item, index) => (
                  <RecommendationCard data={item} key={index} />
                ))}
              </div>
            </div>
          )}
          {isHistory && !isVideo && !isRecommendations && (
            <div className={`mt-5 pt-5 ${style.content}`}>
              <HistoryFilter />
              <HistoryDetails data={data} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
/*
  <div className={`mb-4 ${style.mainContainer}`}>
      <img
        loading="lazy"
        alt="hero/img"
        src={heroImg}
        className={style.mainImg}
      />
      <div className={style.overlay}>
       
      </div>
    </div>
*/
