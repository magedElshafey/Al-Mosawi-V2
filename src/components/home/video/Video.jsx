import React from "react";
import ReactPlayer from "react-player";
import style from "./video.module.css";
import { useMediaQuery } from "react-responsive";
const Video = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div
          className={`py-2 row align-items-center justify-content-center  ${style.mainContainer}`}
        >
          <div className="col-12 col-md-6">
            <div dangerouslySetInnerHTML={{ __html: data.adSectionTitle2 }} />
            <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: data.adSectionDes2 }}
            />
          </div>
          <div className={`col-12 col-md-6`}>
            <ReactPlayer
              url={data.videoLink}
              playing={true}
              loop={true}
              muted={true}
              controls
              width={isMobile ? "100%" : 600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
/**
 * 
 * <div className="d-flex justify-content-center">
          <div className="position-relative">
           
            <div className={`px-2 ${style.overlay}`}>
             
            </div>
          </div>
        </div>
 */
/**
 *  <div className="container">
      <div className={style.videocontainer}>
        <div className={style.overlay}>
        
          <div className={`w-100 ${style.text}`}>
            <div className="w-100 row juistify-content-center align-items-center">
              <div className="col-12 col-md-10 mb-3 mb-md-0">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 */
