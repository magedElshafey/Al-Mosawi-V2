import React, { useState, useEffect } from "react";
import style from "./footer.module.css";
import leftArrow from "../../../assets/leftArrow.svg";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import face from "../../../assets/social/face.svg";
import insta from "../../../assets/social/insta.svg";
import youtube from "../../../assets/social/youtube.svg";
import twitter from "../../../assets/social/twitter.svg";
import linkedin from "../../../assets/social/linkedin.svg";
import { FaSnapchatGhost, FaTiktok } from "react-icons/fa";
const Footer = ({
  generalData,
  socailData,
  aboutUs,
  phoneNum,
  footer1,
  footer2,
}) => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [showFooter, setShowFooter] = useState(true);
  useEffect(() => {
    if (
      pathname === "/prochart/video" ||
      pathname === "/forex-account/details" ||
      pathname.startsWith("/deals/") ||
      pathname === "/recommendation-details" ||
      pathname === "/user/prochart" ||
      pathname === "/recommendations"
    ) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [pathname]);
  return (
    <>
      {showFooter && (
        <div className={`footer pt-4 ${style.firstContainer}`}>
          <div className="container">
            <div className="row">
              {/*logo and social media*/}
              <div
                className={`col-12 ${
                  footer2.length ? "col-md-3" : "col-md-4"
                } mb-5 mb-md-0 d-flex flex-column align-items-center gap-4 pt-2`}
              >
                <img
                  loading="lazy"
                  alt="logo/img"
                  src={generalData.logo}
                  className={style.logo}
                />
                <div className="d-flex align-items-center gap-1">
                  {socailData.facebook && (
                    <a
                      className={style.socialContainer}
                      target="_blank"
                      rel="noreferrer"
                      href={socailData.facebook}
                    >
                      <img
                        className={style.socialMediaIcons}
                        loading="lazy"
                        alt="socialmedia/img"
                        src={face}
                      />
                    </a>
                  )}
                  {socailData.twitter && (
                    <div className={style.socialContainer}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={socailData.twitter}
                      >
                        <img
                          className={style.socialMediaIcons}
                          loading="lazy"
                          alt="socialmedia/img"
                          src={twitter}
                        />
                      </a>
                    </div>
                  )}
                  {socailData.linkedIn && (
                    <div className={style.socialContainer}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={socailData.linkedIn}
                      >
                        <img
                          className={style.socialMediaIcons}
                          loading="lazy"
                          alt="socialmedia/img"
                          src={linkedin}
                        />
                      </a>
                    </div>
                  )}
                  {socailData.instagram && (
                    <div className={style.socialContainer}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={socailData.instagram}
                      >
                        <img
                          className={style.socialMediaIcons}
                          loading="lazy"
                          alt="socialmedia/img"
                          src={insta}
                        />
                      </a>
                    </div>
                  )}
                  {socailData.youtube && (
                    <div className={style.socialContainer}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={socailData.youtube}
                      >
                        <img
                          className={style.socialMediaIcons}
                          loading="lazy"
                          alt="socialmedia/img"
                          src={youtube}
                        />
                      </a>
                    </div>
                  )}
                  {socailData.snapchat && (
                    <div className={style.socialContainer}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={socailData.snapchat}
                      >
                        <FaSnapchatGhost
                          className={style.socialMediaIcons}
                          size={20}
                        />
                      </a>
                    </div>
                  )}
                  {socailData.tiktok && (
                    <div className={style.socialContainer}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={socailData.tiktok}
                      >
                        <FaTiktok
                          className={style.socialMediaIcons}
                          size={20}
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              {/*about website*/}
              <div
                className={`col-6 ${
                  footer2.length ? "col-md-3" : "col-md-4"
                } mb-5 mb-md-0 d-flex flex-column align-items-center gap-4`}
              >
                <div
                  className={`${style.bg} ${style.border} ${
                    i18n.language === "ar" ? style.rtlStyle : style.ltrStyle
                  }`}
                >
                  <h3 className="pt-3 fw-bolder fs18 shamel">{t("aboutUs")}</h3>
                </div>
                <div className="d-flex flex-column  gap-1">
                  {footer1.map((item, index) => (
                    <div
                      key={index}
                      className="d-flex fs18 align-items-center gap-1"
                    >
                      <img alt="arrow/img" src={leftArrow} loading="lazy" />
                      <Link className="m-0 p-0" to={item.link}>
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {footer2.length ? (
                <div className="col-6 col-md-3 mb-5 mb-md-0 d-flex flex-column align-items-center gap-4">
                  <div
                    className={`${style.bg} ${style.border} ${
                      i18n.language === "ar" ? style.rtlStyle : style.ltrStyle
                    } `}
                  >
                    <h3 className="pt-3 fw-bolder fs18 shamel">{t("links")}</h3>
                  </div>
                  <div className="d-flex flex-column  gap-1">
                    {aboutUs.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex fs18 align-items-center gap-1"
                      >
                        <img alt="arrow/img" src={leftArrow} loading="lazy" />
                        <Link className="m-0 p-0" to={item.path}>
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              <div
                className={`col-12 ${
                  footer2.length ? "col-md-3" : "col-md-4"
                } mb-md-0 d-flex flex-column align-items-center gap-3`}
              >
                <div className={`${style.bg} `}>
                  <h3 className={` pt-3 fw-bolder fs18 shamel`}>
                    {t("contact us")}
                  </h3>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <p className={`fw-bold shamel fs22 green`}>{phoneNum}</p>
                  {i18n.language === "en" ? (
                    <AiFillPhone size={20} className="green mb-3" />
                  ) : (
                    <BsFillTelephoneFill size={20} className="green mb-3" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={`mt-5 ${style.copyContainer}`}>
            <div>
              <a
                className={`p-0 m-0 ${style.copyLink}`}
                href="www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                {generalData.copyright_}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
