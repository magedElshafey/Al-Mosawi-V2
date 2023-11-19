import React from "react";
import style from "./Hero.module.css";
import { MdOutlineArrowBackIos } from "react-icons/md";
const Hero = ({
  img,
  title,
  pageName,
  desc,
  btnText,
  isSmallHero,
  isMediumHero,
  isBigHero,
  isRow,
  intro,
  isBtn,
  onClick,
  isStatic,
}) => {
  return (
    <div
      className={`${style.imgContainer} ${
        isMediumHero && !isBigHero && !isSmallHero && style.mediumHeight
      } ${isSmallHero && !isBigHero && !isMediumHero && style.smallHeight} ${
        isBigHero && !isSmallHero && !isMediumHero && style.bigHeight
      }`}
    >
      <img loading="lazy" alt="hero/img" src={img} className={style.mainImg} />
      <div className={style.overlay}>
        <div className="container">
          {isRow ? (
            <div className="pt-3 row align-items-center">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                {intro && (
                  <p
                    className={`mx-0 p-0 pb-2 book  text-white ${style.intro}`}
                  >
                    {intro}
                  </p>
                )}
                {title ? (
                  <p
                    className=" m-0 p-0 "
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                ) : null}

                <div dangerouslySetInnerHTML={{ __html: desc }} />

                {isBtn && (
                  <div className="py-2 mt-4">
                    <button
                      className={`book ${style.btnTwo}`}
                      onClick={onClick}
                    >
                      <MdOutlineArrowBackIos size={20} />
                      <span className="mt-1">{btnText}</span>
                    </button>
                  </div>
                )}
              </div>
              <div
                className={`${style.secondImgContainer} col-12 col-md-6 mb-3 mb-md-0`}
              >
                <iframe
                  src="https://player.vimeo.com/video/867338027"
                  className={style.videoFrame}
                  allow="autoplay; fullscreen;"
                  allowFullScreen
                  title="prochart video"
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="pt-3">
              {intro && (
                <p className={`mx-0 p-0 pb-2 book  text-white ${style.intro}`}>
                  {intro}
                </p>
              )}
              {title && !isStatic ? (
                <p dangerouslySetInnerHTML={{ __html: title }} />
              ) : null}
              {title && isStatic ? (
                <p className="fw-bolder whiteGreen fs30">{title}</p>
              ) : null}
              <div
                className={`text-white ${style.desc}`}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
