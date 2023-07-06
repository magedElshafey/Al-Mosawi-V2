import React from "react";
import style from "./authImg.module.css";
import heroImg from "../../../assets/hhh.png";
import logo from "../../../assets/Logo.svg";
import { MdOutlineCallToAction } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const AuthImg = ({ desc, desc2, showWelcome }) => {
  return (
    <div className={style.imgContainer}>
      <img
        alt="auth/img"
        src={heroImg}
        loading="lazy"
        className={style.mainImg}
      />
      <div className={style.overlay}>
        <div className="container  d-flex flex-column gap-3 align-items-center">
          <img
            alt="logo/img"
            src={logo}
            loading="lazy"
            className={style.logo}
          />
          {showWelcome && (
            <p className={`fw-bold text-white  mx-0 mt-3 p-0 ${style.text36}`}>
              اهلا و مرحبا بكم
            </p>
          )}
          <div className="mb-5 d-flex flex-column align-items-center gap-1">
            <p
              className={` lh m-0 p-0 w-100 ${style.text24} tahoma  text-center ${style.desc2}`}
            >
              {desc ? desc : null}
            </p>
            {desc2 && (
              <p
                className={`lh m-0 p-0 ${style.desc2} tahoma fs18  text-center`}
              >
                {desc2}
              </p>
            )}
          </div>
          <div className={style.box}>
            <div className="d-flex align-items-center  gap-3 mb-3">
              <MdOutlineCallToAction size={30} className={style.icon} />
              <div className={style.text20}>
                <p className="d-inline-block  ms-2 fw-bold text-white m-0 p-0 ">
                  تواصل معنا{" "}
                </p>
                <span className="whiteGreen fw-bold ">لتقديم المساعدة</span>
              </div>
            </div>
            <div
              className={`whiteGreen fw-bold d-flex align-items-center justify-content-center gap-1 ${style.text36}`}
            >
              <span className="p-0 mt-1">25281720</span>
              <IoIosCall />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthImg;
/*
   <div >
      <div className="container">
        
        <div>
          <div className="">
           
          
           
          
          </div>
        </div>
      </div>
    </div>
*/
