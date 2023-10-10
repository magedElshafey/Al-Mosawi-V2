import React from "react";
import style from "./HeroBox.module.css";
import DealsHeader from "../../deals/dealsHeader/DealsHeader";
import DealsDetails from "../../deals/dealsDetails/DealsDetails";
import charts from "../../../assets/Candles1.png";
import prochartImg from "../../../assets/prochartImg.png";
import RecommendationCard from "../../recommendations/RecommendationCard";
import { AiOutlinePlayCircle } from "react-icons/ai";

import HistoryDetails from "../../history/historyDetails/HistoryDetails";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const HeroBox = ({
  isHistory,
  isVideo,
  isRecommendations,
  data,
  dealsData,
}) => {
  return (
    <div className={`m-0 p-0 ${style.mainDiv}`}>
      <div className="z-3 container mb-0 pb-0 mt-5 pt-5">
        {!isRecommendations && !isVideo && !isHistory && (
          <div>
            <div className={`p-2 pb-0 m-0 ${style.dealsBox}`}>
              <DealsHeader data={dealsData} />
              <div className={`pt-2 my-4 z-3 row align-items-center `}>
                <div className="z-3  position-relative col-12 col-md-6  mb-md-0">
                  <img
                    alt="bitcoin/img"
                    loading="lazy"
                    src={charts}
                    className={` ${style.chartsImg}`}
                  />
                </div>
                <div className="z-3 col-12 col-md-6  mb-md-0">
                  <DealsDetails data={dealsData} />
                </div>
              </div>
            </div>
          </div>
        )}
        {isVideo && !isRecommendations && !isHistory && (
          <div className="p-0 m-0 z-3 row justify-content-center align-items-center">
            <div className="p-0 m-0z-3 col-12 col-md-8 d-flex flex-column  align-items-center  position-relative">
              <div>
                <p className="p-0 mt-0 mb-1 me-2 d-inline-block fs36 text-white shamel">
                  فيديو
                </p>
                <p className="p-0 my-0  fw-bolder d-inline-block fs36 text-uppercase whiteGreen ">
                  البروشارت / prochart
                </p>
              </div>
              <p
                className={`mx-0 mt-0 mb-3 p-0 fs18 text-white tahoma ${style.desc}`}
              >
                تعرف على جميع مميزات بروشارت وكيفية الحصول على افضل النتائج
              </p>
              <img
                alt="prochart/video/img"
                loading="lazy"
                src={prochartImg}
                className={style.prochartImg}
              />
              <AiOutlinePlayCircle size={70} className={style.videoPlayer} />
            </div>
          </div>
        )}
        {isHistory && !isVideo && !isRecommendations && (
          <div className=" mt-5 pt-4 pb-3">
            <div className=" d-flex justify-content-between align-items-center flex-column flex-md-row gap-3 gap-md-0 mb-4">
              <p className="z-3 shamel m-0 p-0 text-white fw-bolder fs24">
                تاريخ التوصيات
              </p>
              <div className="d-flex align-items-center flex-wrap gap-3">
                <select className={`fs18 tahoma ${style.box2}`}>
                  <option>نوع الصفقة - الكل</option>
                  <option>نوع الصفقة - الكل</option>
                  <option>نوع الصفقة - الكل</option>
                  <option>نوع الصفقة - الكل</option>
                  <option>نوع الصفقة - الكل</option>
                </select>
                <select className={`fs18 tahoma ${style.box2}`}>
                  <option>حالة الصفقة - الكل</option>
                  <option>حالة الصفقة - الكل</option>
                  <option>حالة الصفقة - الكل</option>
                  <option>حالة الصفقة - الكل</option>
                  <option>حالة الصفقة - الكل</option>
                </select>
                <div className={`fs18 tahoma  bg-light ${style.box2}`}>
                  4/7/1998 - 4/7/2023
                </div>
                <button className={`book ${style.box} ${style.btn2}`}>
                  <AiOutlineSearch />
                  <span className="mx-0 mt-1 p-0">عرض النتائج</span>
                </button>
              </div>
            </div>
            <HistoryDetails data={data} />
            <button
              className={`mx-auto z-3  d-flex justify-content-center align-items-center text-white book gap-2 ${style.moreBtn}`}
            >
              <MdKeyboardArrowDown size={20} />
              <span className="mt-1">عرض صفقات اكتر</span>
            </button>
          </div>
        )}
        {!isVideo && isRecommendations && !isHistory && (
          <>
            <p className={`m-0 p-0  text-white   fs30 fw-bold ${style.reco}`}>
              قسم و تحليلات و التوصيات
            </p>
            <div className="d-flex flex-wrap  align-items-center gap-4 mt-3 justify-content-center">
              {data.map((item, index) => (
                <RecommendationCard data={item} key={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroBox;
