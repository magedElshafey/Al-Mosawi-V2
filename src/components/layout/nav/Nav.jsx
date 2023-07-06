import React, { useState } from "react";
import logo from "../../../assets/Logo.svg";
import style from "./nav.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineCallToAction,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import pyramids from "../../../assets/aboutCourses/pyramidsDefault.png";
import energy from "../../../assets/aboutCourses/energyDefault.png";
import person from "../../../assets/aboutCourses/personDefault.png";
const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProchart, setShowPorchart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <div className={style.navContainer}>
        <div className="container  py-3 ">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/">
              <img
                alt="logo/img"
                loading="lazy"
                src={logo}
                className={style.logo}
              />
            </Link>
            <div
              onClick={() => setShowSidebar(true)}
              className="d-flex align-items-center gap-1 pointer"
            >
              <div className={` position-relative ${style.spanContainer}`}>
                <span className={`${style.span} ${style.first}`}></span>
                <span className={`${style.span} ${style.second}`}></span>
                <span className={`${style.span} ${style.third}`}></span>
              </div>
              <h3 className="text-white fs22 mt-3">القائمة</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${style.sidebar} ${showSidebar ? style.show : style.hide}`}
      >
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center">
            <p className="p-0 m-0 fw-bold fs-2 text-white">قائمة الخدمات</p>

            <AiOutlineClose
              onClick={() => setShowSidebar(false)}
              className={`pointer ${style.closeIcon}`}
              size={30}
            />
          </div>

          <div className="pt-4 row justify-content-center">
            <div className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3 text-center">
              <p className="m-0 p-0 text-white fw-bold">الدورات التعليمية</p>
              <div className={style.box}>
                <img
                  alt="prochart/img"
                  loading="lazy"
                  src="https://images.pexels.com/photos/5716016/pexels-photo-5716016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={style.imgTwo}
                />
                <p className={style.contentThree}> تعلم ابداع</p>
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/course/1"
                  className={`d-block text-center fs-5 text-white px-1 py-2 ${style.border} ${style.link}`}
                >
                  <img
                    className={style.imgIcon}
                    loading="lazy"
                    src={pyramids}
                    alt="levels/img"
                  />
                  <span> مستوى متحدي السوق</span>
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/course/2"
                  className={`d-block text-center fs-5 text-white px-1 py-3 ${style.border} ${style.link}`}
                >
                  <img
                    className={style.imgIcon}
                    loading="lazy"
                    src={person}
                    alt="levels/img"
                  />
                  <span> مستوى المحترفين</span>
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/course/3"
                  className={`d-block text-center fs-5 text-white px-1 py-3 ${style.link}`}
                >
                  <img
                    className={style.imgIcon}
                    loading="lazy"
                    src={energy}
                    alt="levels/img"
                  />
                  <span> مستوى الخبراء</span>
                </Link>
              </div>
              <div className={`position-relative mt-5 ${style.box}`}>
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/about"
                  className={`${style.aboutContainer} ${
                    showAbout ? style.showBox : style.hideBox
                  }`}
                >
                  من نحن
                </Link>
                <img
                  onMouseEnter={() => setShowAbout(true)}
                  onMouseLeave={() => setShowAbout(false)}
                  alt="prochart/img"
                  loading="lazy"
                  src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={style.imgTwo}
                />
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/about"
                  className={`d-block fs-5 text-white px-1 py-3 ${style.link}`}
                >
                  <MdKeyboardArrowLeft size={30} className="green" /> عن شركة
                  احمد المسوي
                </Link>
              </div>
            </div>
            <div className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3 text-center">
              <p className="m-0 p-0 text-white fw-bold">حسابات التداول</p>
              <div className={style.box}>
                <img
                  alt="prochart/img"
                  loading="lazy"
                  src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={style.imgThree}
                />
                <p className={style.contentTwo}>تداول كالمحترفين</p>
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/"
                  className={`d-block text-center fs-5 text-white px-1 py-3 ${style.border} ${style.link}`}
                >
                  <MdKeyboardArrowLeft size={30} className="green" /> حسابات
                  الأداء المميز
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/"
                  className={`d-block text-center fs-5 text-white px-1 py-3 ${style.link} `}
                >
                  <MdKeyboardArrowLeft size={30} className="green" /> حسابات MAX
                  الامنة
                </Link>
              </div>
              <div className={`mt-5 ${style.box} position-relative`}>
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/contact"
                  className={`${style.contact} ${
                    showContact ? style.showBox : style.hideBox
                  }`}
                >
                  اتصل بنا
                </Link>
                <img
                  onMouseEnter={() => setShowContact(true)}
                  onMouseLeave={() => setShowContact(false)}
                  alt="prochart/img"
                  loading="lazy"
                  src="https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={style.imgTwo}
                />
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/contact"
                  className={`d-block fs-5 text-white px-1 py-3 ${style.link}`}
                >
                  <MdKeyboardArrowLeft size={30} className="green" /> أرسل لنا
                  استفسارك
                </Link>
              </div>
            </div>
            <div className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3 text-center position-relative">
              <p className="m-0 p-0 text-white fw-bold">prochart / بروشارت</p>
              <div
                onMouseEnter={() => setShowPorchart(true)}
                onMouseLeave={() => setShowPorchart(false)}
                className={`${style.box} `}
              >
                <img
                  alt="prochart/img"
                  loading="lazy"
                  src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className={style.mainImg}
                />

                <p className={`m-0 p-0 ${style.content}`}>بورشات porchart</p>
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/prochart"
                  className={`d-block fs-5 text-white px-1 py-3 ${style.link}`}
                >
                  <MdKeyboardArrowLeft size={30} className="green" /> prochart /
                  بروشارت
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  to="/prochart"
                  className={`text-white d-flex align-items-center justify-content-center p-2 ${
                    style.porchartBox
                  } ${showProchart ? style.showBox : style.hideBox}`}
                >
                  <p className="lh m-0 p-0">تواصل معنا</p>
                </Link>
              </div>
            </div>
            <div className={`col-12 col-md-6 col-lg-3 `}>
              <ul className=" m-0 p-0 text-center">
                <li className="mb-5">
                  <Link
                    onClick={() => setShowSidebar(false)}
                    className={`text-white ${style.link}`}
                    to="/login"
                  >
                    <BiLogOut className="green" size={20} /> دخول حسابي
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    onClick={() => setShowSidebar(false)}
                    className={`text-white ${style.link}`}
                    to="/reg"
                  >
                    <BsFillPersonFill className="green" size={20} /> إنشاء حساب
                    جديد
                  </Link>
                </li>
                <li className="mb-5 mt-5 pt-5">
                  <Link
                    onClick={() => setShowSidebar(false)}
                    className={`text-white ${style.link}`}
                    to="/ask"
                  >
                    <MdOutlineKeyboardDoubleArrowRight
                      className="green"
                      size={25}
                    />{" "}
                    استشارة مع أحمد المسوي
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    onClick={() => setShowSidebar(false)}
                    className={`text-white ${style.link}`}
                    to="/about"
                  >
                    <MdKeyboardArrowLeft className="green" size={25} /> من نحن
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    onClick={() => setShowSidebar(false)}
                    className={`text-white ${style.link}`}
                    to="/contact"
                  >
                    <MdKeyboardArrowLeft className="green" size={25} /> تواصل
                    معنا
                  </Link>
                </li>
              </ul>
              <div
                className={`mx-auto p-3  d-flex flex-column align-items-center gap-2 ${style.contactContainer}`}
              >
                <MdOutlineCallToAction size={30} className={style.callIcon} />
                <p className="text-white m-0 p-0">تواصل معنا</p>
                <p className="fw-bold m-0 p-0 green fs-5">لتقديم المساعدة</p>
                <p className="green m-0 p-0 d-flex gap-2 align-items-center">
                  <span className="fw-bold fs-4 ">252158</span>
                  <BsFillTelephoneFill size={25} />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
/*
     <div
            
          >
           
          </div>
*/
