import React from "react";
import ReactPlayer from "react-player";
import style from "./video.module.css";
import { useTranslation } from "react-i18next";
const Video = ({ data }) => {
  const [t] = useTranslation();
  return (
    <div className="container">
      <div className={style.videocontainer}>
        <ReactPlayer
          url="https://player.vimeo.com/video/867338027"
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
        />
        <div className={style.overlay}>
          <div className={`w-100 ${style.text}`}>
            <div className="w-100 row juistify-content-center align-items-center">
              <div className="col-12 col-md-10 mb-3 mb-md-0">
                <div
                  dangerouslySetInnerHTML={{ __html: data.adSectionTitle2 }}
                />
                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{ __html: data.adSectionDes2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
/**
 * https://player.vimeo.com/video/867338027
 * <div className={style.videoBackground}>
      

     
    </div>
 */
/**
 *   <div
      style={{ backgroundImage: `url(${data.videoLink})` }}
      className={`${style.mainDiv} pb-4`}
    >
     
    </div>
 */
/*
   <div className={`${style.mainDiv}`}>
      <div className={` w-100 ${style.text}`}>
        <div className="row justify-content-center gap-3 gap-md-5 w-100 align-items-center ">
          <div className="mb-3 mb-md-0 col-12 col-md-8 ">
            <p className="m-0 p-0 fw-bold fs-4 fs-md-1">
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

           
          </div>

          <div className="col-12 col-md-3 justify-content-center">
           
          </div>
        </div>
      </div>
    </div>
*/
/**
 *   <div className={style.videoBackground}>
      <iframe
        src="https://player.vimeo.com/video/867338027"
        className={style.videoFrame}
        allow="autoplay; fullscreen;"
        allowFullScreen
      ></iframe>
    </div>
 */
