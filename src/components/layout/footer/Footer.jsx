import React from "react";
import style from "./footer.module.css";
import logo from "../../../assets/Logo.svg";
import leftArrow from "../../../assets/leftArrow.svg";
import { Link } from "react-router-dom";
const Footer = ({ social, aboutUs }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 mb-3 mb-md-0 col-md-6 col-lg-3 d-flex flex-column align-items-center gap-5 pt-2">
            <img loading="lazy" alt="logo/img" src={logo} />
            <div className="d-flex align-items-center gap-4">
              {social.map((item, index) => (
                <div className={style.socialContainer} key={index}>
                  <a target="_blank" rel="noreferrer" href={item.path}>
                    <img loading="lazy" alt="socialmedia/img" src={item.img} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 mb-3 mb-md-0 col-md-6 col-lg-3 d-flex flex-column align-items-center gap-4">
            <h3 className="fw-bolder fs24">عن الموقع</h3>
            <div className="d-flex flex-column align-items-center gap-2">
              {aboutUs.map((item, index) => (
                <div key={index} className="d-flex align-items-center gap-1">
                  <img alt="arrow/img" src={leftArrow} loading="lazy" />
                  <Link className="m-0 p-0" to={item.path}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 mb-3 mb-md-0 col-md-6 col-lg-3 d-flex flex-column align-items-center gap-4">
            <h3 className="fw-bolder fs24">أهم الروابط</h3>
            <div className="d-flex flex-column align-items-center  gap-2">
              {aboutUs.map((item, index) => (
                <div key={index} className="d-flex align-items-center gap-1">
                  <img alt="arrow/img" src={leftArrow} loading="lazy" />
                  <Link className="m-0 p-0" to={item.path}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column gap-4 align-items-center">
            <h3 className="fw-bolder fs24">للتواصل معنا</h3>
            <p className={`fw-bold fs-3 green`}>25281720</p>
          </div>
        </div>
      </div>
      {/*lower footer*/}
      <div className={`mt-5 ${style.copyContainer}`}>
        <div>
          <a
            className={`p-0 m-0 ${style.copyLink}`}
            href="www.google.com"
            target="_blank"
            rel="noreferrer"
          >
            جميع الحقوق محفوظة لشركة أحمد الموسوي
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
