import React from "react";
import style from "./reviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import coma from "../../../assets/coma.svg";

const Reviews = ({ data }) => {
  const { t, i18n } = useTranslation();
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    vertical: false,
    responsive: [
      {
        breakpoint: 540, // For mobile devices
        settings: {
          slidesToShow: 1, // Change to 1 slide for mobile devices
          slidesToScroll: 1, // Change to scroll 1 slide at a time
          vertical: false,
        },
      },
    ],
  };
  return (
    <div className="py-3  mt-3 ">
      <p className="mb-3 mx-0 p-0 green fs26  fw-bold">{t("rev")}</p>
      <Slider className="col-12 " {...settings}>
        {data.map((item, index) => (
          <div key={index} className={style.mainBox}>
            <div className="d-flex justify-content-between align-items-center">
              <img alt="coma" src={coma} className={style.coma} />
              <div className="d-flex flex-column align-items-center">
                <div
                  className={`d-flex gap-2 ${
                    i18n.language === "ar" ? style.rev : null
                  }`}
                >
                  <img
                    loading="lazy"
                    alt="person/img"
                    src={item.photo}
                    className={style.avImg}
                  />
                  <div className="d-flex flex-column align-items-center">
                    <p className="m-0 p-0 mb-2 fw-bolder">{item.name}</p>
                    <p className="m-0 p-0 ">{item.position}</p>
                  </div>
                </div>
                <p className={`lh p-0 m-0 mt-2`}>{item.review}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
/**
 *   <div
            key={index}
            className={`position-relative ${style.mainBox} ${
              i18n.language === "ar" ? "me-5" : "ms-5"
            }`}
          >
            <div className={`d-flex gap-2 `}>
              <img
                loading="lazy"
                alt="person/img"
                src={item.photo}
                className={style.avImg}
              />
              <div>
                <p className="m-0 p-0 mb-2 fw-bolder">{item.name}</p>
                <p className="m-0 p-0 ">{item.position}</p>
              </div>
            </div>

            <p
              className={`lh p-0 m-0 mt-3 ${
                i18n.language === "ar" ? "me-5" : "ms-5"
              }`}
            >
              {item.review}
            </p>
          </div>
 */
