import React, { useState, useEffect } from "react";
import style from "./footer.module.css";
import logo from "../../../assets/Logo.svg";
import leftArrow from "../../../assets/leftArrow.svg";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import phone from "../../../assets/phoneCall.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

const Footer = ({ social, aboutUs }) => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const [showFooter, setShowFooter] = useState(true);
  useEffect(() => {
    if (
      pathname === "/prochart/video" ||
      pathname === "/forex-account/details" ||
      pathname === "/deals" ||
      pathname === "/recommendation-details" ||
      pathname === "/user/prochart"
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
              <div className=" col-12 col-md-3 mb-5 mb-md-0 d-flex flex-column align-items-center gap-4 pt-2">
                <img loading="lazy" alt="logo/img" src={logo} />
                <div className="d-flex align-items-center gap-1">
                  {social.map((item, index) => (
                    <div className={style.socialContainer} key={index}>
                      <a target="_blank" rel="noreferrer" href={item.path}>
                        <img
                          className={style.socialMediaIcons}
                          loading="lazy"
                          alt="socialmedia/img"
                          src={item.img}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {/*about website*/}
              <div className="col-6 col-md-3 mb-5 mb-md-0 d-flex flex-column align-items-center gap-4">
                <div
                  className={`${style.bg} ${style.border} ${
                    i18n.language === "ar" ? style.rtlStyle : style.ltrStyle
                  }`}
                >
                  <h3 className="pt-3 fw-bolder fs18 shamel">{t("aboutUs")}</h3>
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
              <div className="col-12 col-md-3 mb-md-0 d-flex flex-column align-items-center gap-3">
                <div className={`${style.bg} `}>
                  <h3 className={` pt-3 fw-bolder fs18 shamel`}>
                    {t("contact us")}
                  </h3>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <p className={`fw-bold shamel fs22 green`}>25281720</p>
                  {i18n.language === "en" ? (
                    <AiFillPhone size={30} className="green mb-4" />
                  ) : (
                    <BsFillTelephoneFill size={30} className="green mb-4" />
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
                {t("copyRight")} &#169; {currentYear}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
