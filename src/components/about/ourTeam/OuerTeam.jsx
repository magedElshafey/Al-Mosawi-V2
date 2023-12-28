import React, { useState } from "react";
import style from "./ourtTeam.module.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OuerTeam = ({ team }) => {
  const [showOriginalText, setShowOriginalText] = useState(true);
  const [cardId, setCardId] = useState(null);
  const { i18n } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,

    slidesToScroll: 2,
    initialSlide: 0,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="container py-5">
      <p className="m-0 p-0 fw-bolder fs36 shamel text-center">
        {i18n.language === "en" ? "team members" : "فريق العمل"}
      </p>
      <p className="mx-0 p-0 my-1 text-center">{team.teamWorkDes}</p>
      <Slider {...settings}>
        {team.data.map((item, index) => (
          <div
            onMouseEnter={() => {
              setShowOriginalText(false);
              setCardId(index);
            }}
            onMouseLeave={() => {
              setShowOriginalText(true);
              setCardId(index);
            }}
            key={index}
            className={style.mainCard}
          >
            <img
              alt="team/img"
              loading="lazy"
              src={item.photo}
              className={style.mainImg}
            />
            <div className={style.overlay}>
              <div
                className={` d-flex flex-column align-items-center justify-content-start ${
                  style.text
                } ${
                  cardId === index && !showOriginalText
                    ? style.hide
                    : style.show
                } ${i18n.language === "ar" ? style.rtl : style.ltr}`}
              >
                <p className="m-0 p-0 text-center">{item.position}</p>
                <p className="m-0 p-0 fs-5 fw-bold">{item.name}</p>
              </div>
              <p
                className={`w-100 m-0 p-0 ${
                  style.quote
                } text-white text-center ${
                  cardId === index && !showOriginalText
                    ? style.show
                    : style.hide
                }`}
              >
                {item.quote}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OuerTeam;
/**
 *  <div
                className={`${style.text}  ${
                  i18n.language === "ar" ? style.rtl : style.ltr
                }`}
              >
                <p
                  className={`m-0 p-0  ${
                    cardId === index && !showOriginalText
                      ? style.show
                      : style.hide
                  }`}
                >
                  {item.quote}
                </p>
              </div>
 */
