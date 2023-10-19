import React from "react";
import style from "./HeroBox.module.css";
import DealsHeader from "../../deals/dealsHeader/DealsHeader";
import DealsDetails from "../../deals/dealsDetails/DealsDetails";
import charts from "../../../assets/Candles1.png";
import calender from "../../../assets/calender.svg";
import prochartImg from "../../../assets/prochartImg.png";
import RecommendationCard from "../../recommendations/RecommendationCard";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import HistoryDetails from "../../history/historyDetails/HistoryDetails";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import ReactPlayer from "react-player";
const HeroBox = ({
  isHistory,
  isVideo,
  isRecommendations,
  data,
  dealsData,
}) => {
  const { i18n } = useTranslation();
  return (
    <div className={`m-0 p-0 ${style.mainDiv}`}>
      <div className="z-3 container  mt-5 pt-5 mb-0 pb-0">
        {!isRecommendations && !isVideo && !isHistory && (
          <div className="m-0 p-0">
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
                <div dangerouslySetInnerHTML={{ __html: data.mainTitle }} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: data.mainDes }} />
              <div className={style.videoContainer}>
                <ReactPlayer
                  url={data.link}
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        )}
        {isHistory && !isVideo && !isRecommendations && (
          <div className=" mt-5 pt-4 pb-3">
            <div className=" d-flex justify-content-between align-items-center flex-column flex-md-row gap-3 gap-md-0 mb-4">
              <p className="z-3 shamel m-0 p-0 text-white fw-bolder fs20">
                {i18n.language === "ar"
                  ? "تاريخ التوصيات"
                  : "History of recommendations"}
              </p>
              <div className="d-flex align-items-center flex-wrap gap-3">
                <select className={`${style.box2}`}>
                  <option>نوع الصفقة - الكل</option>
                  <option>نوع الصفقة - الكل</option>
                  <option>نوع الصفقة - الكل</option>
                  <option>نوع الصفقة - الكل</option>
                  <option>نوع الصفقة - الكل</option>
                </select>
                <select className={`${style.box2}`}>
                  <option>حالة الصفقة - الكل</option>
                  <option>حالة الصفقة - الكل</option>
                  <option>حالة الصفقة - الكل</option>
                  <option>حالة الصفقة - الكل</option>
                  <option>حالة الصفقة - الكل</option>
                </select>

                <input
                  type="date"
                  className={`text-center bg-light ${style.box2} ${style.inp}`}
                />

                <button className={`book ${style.box} ${style.btn2}`}>
                  <AiOutlineSearch />
                  <span className="mx-0 mt-1 p-0">
                    {i18n.language === "en" ? "show result" : "عرض النتائج"}
                  </span>
                </button>
              </div>
            </div>
            <HistoryDetails data={data} />
          </div>
        )}
        {!isVideo && isRecommendations && !isHistory && (
          <>
            <p className={`m-0 p-0  text-white   fs30 fw-bold ${style.reco}`}>
              {i18n.language === "ar"
                ? "قسم التحليلات و التوصيات"
                : "Analysis and recommendations section"}
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
