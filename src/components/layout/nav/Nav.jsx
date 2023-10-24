import React, { useState, useEffect } from "react";
import style from "./nav.module.css";
import { BiLogOut } from "react-icons/bi";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsGlobe,
  BsFillCartCheckFill,
} from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import callIcon from "../../../assets/help-desk-log-svgrepo-com.svg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiFillUnlock, AiFillEdit } from "react-icons/ai";
import pyramids from "../../../assets/aboutCourses/pyramidsDefault.png";
import energy from "../../../assets/aboutCourses/energyDefault.png";
import person from "../../../assets/aboutCourses/personDefault.png";
import { useTranslation } from "react-i18next";
import ahmed from "../../../assets/a7medAv.png";
import chat from "../../../assets/chat-bubble-check-svgrepo-com.png";
import menu from "../../../assets/menu.svg";
import close from "../../../assets/cross.png";
import back from "../../../assets/back.svg";
import down from "../../../assets/down.svg";
import avatar from "../../../assets/avatar.png";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { request } from "../../utils/axios";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { logout, removePip, removeName } from "../../../Redux/auth.js";
const Nav = ({ data, phoneNum, menus }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProchart, setShowPorchart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const { pathname } = useLocation();
  const [showLogo, setShowLogo] = useState(true);
  const [showAsk, setShowAsk] = useState(false);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  const [showBack, setShowBack] = useState(false);
  const { isLogin, name, profilePhoto } = useSelector(
    (state) => state.authSlice
  );
  const tickmillUser = JSON.parse(localStorage.getItem("tickmillUser"));
  useEffect(() => {
    if (
      pathname === "/forget" ||
      pathname === "/login" ||
      pathname === "/new-password" ||
      pathname === "/reg"
    ) {
      setShowLogo(false);
    } else {
      setShowLogo(true);
    }
  }, [pathname]);
  useEffect(() => {
    if (pathname === "/forex-account/details") {
      setShowAsk(true);
    } else {
      setShowAsk(false);
    }
  }, [pathname]);
  useEffect(() => {
    if (pathname === "/recommendation-details") {
      setShowMenu(false);
      setShowBack(true);
    } else {
      setShowMenu(true);
      setShowBack(false);
    }
  }, [pathname]);

  // handle logout
  const handleLogout = (data) => {
    return request({ url: "/auth/logout", method: "post", data });
  };
  const { mutate } = useMutation(handleLogout, {
    onSuccess: (data) => {
      if (data.data.status) {
        toast.success(
          i18n.language === "en"
            ? "you are logout successfulyy"
            : "تم تسجيل خروجك بنجاح"
        );
        dispatch(logout(false));
        dispatch(removeName());
        dispatch(removePip());
      } else {
        toast.error(
          i18n.language === "en"
            ? "there is an error occurred , please try again"
            : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
        );
      }
    },
  });
  const handleClick = async () => {
    const userData = {};
    await mutate(userData);
  };
  return (
    <>
      <div>
        <div className={style.navContainer}>
          <div className="container py-3 ">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Link className={`${showLogo ? "d-block" : "d-none"}`} to="/">
                  <img
                    alt="logo/img"
                    loading="lazy"
                    src={data.logo}
                    className={style.logo}
                  />
                </Link>
                <div className="dropdown">
                  <button
                    className={`${style.none} dropdown-toggle`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BsGlobe size={30} className="pointer whiteGreen" />
                  </button>
                  <ul class="dropdown-menu">
                    <li
                      onClick={() => {
                        window.location.reload();
                        i18n.changeLanguage("ar");
                        window.localStorage.setItem(
                          "lang",
                          JSON.stringify("ar")
                        );
                      }}
                      className="dropdown-item pointer"
                    >
                      ar
                    </li>
                    <li
                      onClick={() => {
                        window.location.reload();
                        i18n.changeLanguage("en");
                        window.localStorage.setItem(
                          "lang",
                          JSON.stringify("en")
                        );
                      }}
                      className="dropdown-item pointer"
                    >
                      EN
                    </li>
                  </ul>
                </div>
                <Link
                  to="/cart"
                  className="position-relative d-inline-block mx-3 "
                >
                  <BsFillCartCheckFill size={30} className="whiteGreen" />
                  <p className={style.length}>
                    {JSON.parse(localStorage.getItem("cart")).length}
                  </p>
                </Link>
              </div>
              {showAsk ? (
                <div className="d-flex align-items-center gap10">
                  <div className="position-relative">
                    <Link to="/ask" className={style.rec}>
                      <img src={chat} alt="chat/icon" className={style.chat} />
                      <p className={`fs text-white m-0 p-0 book ${style.ask}`}>
                        اسأل احمد الموسوي
                      </p>
                    </Link>
                    <div className={style.circle}>
                      <img
                        className={style.ahmed}
                        alt="ahmed/img"
                        src={ahmed}
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => setShowSidebar(true)}
                    className={`d-flex align-items-center gap-1 pointer ${
                      showLogo ? null : "me-auto"
                    }`}
                  >
                    <div
                      className={` position-relative ${style.spanContainer}`}
                    >
                      <span className={`${style.span} ${style.first}`}></span>
                      <span className={`${style.span} ${style.second}`}></span>
                      <span className={`${style.span} ${style.third}`}></span>
                    </div>
                    <h3 className="text-white fs22 mt-3 book">القائمة</h3>
                  </div>
                </div>
              ) : (
                <div className="d-flex align-items-center gap-1">
                  {!isLogin && (
                    <button
                      onClick={() => navigate("/login")}
                      className={`mx-3 ${style.btn}`}
                    >
                      {i18n.language === "ar" ? "تسجيل الدخول" : "login"}
                    </button>
                  )}
                  {showMenu && (
                    <div
                      onClick={() => setShowSidebar(true)}
                      className={`pointer ${showLogo ? null : "me-auto"}`}
                    >
                      <img
                        alt="menu/icon"
                        className={style.menu}
                        src={menu}
                        loading="lazy"
                      />
                    </div>
                  )}
                  {showBack && (
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center gap-2 ">
                        <img alt="back" src={avatar} className={style.av} />
                        <p className="m-0 p-0 text-white">MeGz</p>
                        <img alt="back" src={down} className={style.down} />
                      </div>
                      <div
                        onClick={() => navigate(-1)}
                        className="d-flex align-items-center pointer "
                      >
                        <p className="m-0 p-0 text-white">
                          {i18n.language === "ar" ? "العودة" : "back"}
                        </p>
                        <img alt="back" src={back} className={style.back} />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${style.sidebar} ${
            showSidebar ? style.show : style.hide
          }`}
        >
          <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center">
              <p className="p-0 m-0 fw-bold fs22 shamel text-white">
                {t("menu")}
              </p>

              <div className="d-flex align-items-center gap-2">
                {isLogin ? (
                  <div className="d-flex align-items-center gap-3">
                    <div class="dropdown">
                      <button
                        className={`dropdown-toggle d-flex align-items-center gap-2 ${style.menuBtn}`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          alt="profile/img"
                          className={style.pp}
                          src={profilePhoto}
                        />
                        <p className="text-white m-0 p-0 fw-bolder">{name}</p>
                        <IoIosArrowDown size={15} className="text-white" />
                      </button>
                      <ul class="dropdown-menu">
                        <li onClick={() => setShowSidebar(false)}>
                          <Link
                            className="dropdown-item"
                            to={
                              tickmillUser
                                ? "/forex-account/details"
                                : "/account"
                            }
                          >
                            {i18n.language === "ar" ? "حسابي" : "profile"}
                          </Link>
                        </li>
                        <li
                          className="dropdown-item pointer"
                          onClick={() => {
                            setShowSidebar(false);
                            handleClick();
                          }}
                        >
                          {i18n.language === "ar" ? "تسجيل الخروج" : "logout"}
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        onClick={() => setShowSidebar(false)}
                        loading="lazy"
                        alt="close/icon"
                        className={`${style.closeIcon} pointer`}
                        src={close}
                      />
                      <p className="text-white m-0 p-0 book fs18">إغلاق</p>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex align-items-center gap-2">
                    <img
                      onClick={() => setShowSidebar(false)}
                      loading="lazy"
                      alt="close/icon"
                      className={`${style.closeIcon} pointer`}
                      src={close}
                    />
                    <p className="text-white m-0 p-0 book fs18">إغلاق</p>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-5 row justify-content-center">
              <div className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3">
                <p className="m-0 p-0 text-white fw-bold shamel ">
                  {t("courses")}
                </p>
                <div className={`${style.box} mb-4`}>
                  <img
                    alt="prochart/img"
                    loading="lazy"
                    src="https://images.pexels.com/photos/5716016/pexels-photo-5716016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={style.imgTwo}
                  />
                  <p className={style.contentThree}>{t("creativity")}</p>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/course/1"
                    className={`d-block book  text-white p-1 ${style.border} ${style.link}`}
                  >
                    <img
                      className={style.imgIcon}
                      loading="lazy"
                      src={pyramids}
                      alt="levels/img"
                    />
                    <span>{t("marketLevel")}</span>
                  </Link>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/course/2"
                    className={`d-block   text-white p-1 book ${style.border} ${style.link}`}
                  >
                    <img
                      className={style.imgIcon}
                      loading="lazy"
                      src={person}
                      alt="levels/img"
                    />
                    <span>{t("ProfessionalLevel")}</span>
                  </Link>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/course/3"
                    className={`d-block  text-white p-1 book ${style.link}`}
                  >
                    <img
                      className={style.imgIcon}
                      loading="lazy"
                      src={energy}
                      alt="levels/img"
                    />
                    <span>{t("ExpertLevel")}</span>
                  </Link>
                </div>
                <div className={`position-relative mt-3 ${style.box}`}>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/about"
                    className={`${style.aboutContainer} ${
                      showAbout ? style.showBox : style.hideBox
                    }`}
                  >
                    {t("about")}
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
                    className={`book d-block text-white p-1 ${style.link}`}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("aboutCompany")}
                  </Link>
                </div>
              </div>
              <div className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3">
                <p className="m-0 p-0 text-white fw-bold shamel">
                  {t("tradingAccounts")}
                </p>
                <div className={style.box}>
                  <img
                    alt="prochart/img"
                    loading="lazy"
                    src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={style.imgimg}
                  />
                  <p className={style.contentTwo}>{t("tadwl")}</p>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/account/special"
                    className={`book d-block  text-white p-1 ${style.border} ${style.link}`}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("specialAccounts")}
                  </Link>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/account/max"
                    className={`book d-block text-white p-1 ${style.link} `}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("safeAccount")}
                  </Link>
                </div>
                <div
                  onMouseEnter={() => setShowPorchart(true)}
                  onMouseLeave={() => setShowPorchart(false)}
                  className={`mt-3 pt-2 ${style.box} position-relative`}
                >
                  <img
                    alt="prochart/img"
                    loading="lazy"
                    src="https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={style.imgTwo}
                  />
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/contact"
                    className={`book d-block  text-white p-1 ${style.link}`}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("sendMsg")}
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
              <div className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3  position-relative">
                <p className="m-0 p-0 text-white fw-bold shamel">
                  {t("prochart")}
                </p>
                <div className={`${style.box} `}>
                  <img
                    alt="prochart/img"
                    loading="lazy"
                    src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={style.mainImg}
                  />

                  <p className={`m-0 p-0 ${style.content}`}>{t("prochart")}</p>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/prochart"
                    className={`book d-block  text-white p-1 ${style.link}`}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("prochart")}
                  </Link>
                </div>
              </div>
              <div className={`col-12 col-md-6 col-lg-3 `}>
                <ul className=" m-0 p-0">
                  {!isLogin ? (
                    <>
                      {" "}
                      <li className="mb-2">
                        <Link
                          onClick={() => setShowSidebar(false)}
                          className={`book text-white  ${style.link}`}
                          to="/login"
                        >
                          <BiLogOut
                            className="green d-inline-block mx-1 "
                            size={20}
                          />
                          {t("login")}
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          onClick={() => setShowSidebar(false)}
                          className={`book text-white ${style.link}`}
                          to="/reg"
                        >
                          <BsFillPersonFill
                            className="green d-inline-block mx-1 "
                            size={20}
                          />
                          {t("reg")}
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      {" "}
                      <li className="mb-2">
                        <Link
                          onClick={() => setShowSidebar(false)}
                          className={`book text-white  ${style.link}`}
                          to="/forget"
                        >
                          <AiFillUnlock
                            className="green d-inline-block mx-1 "
                            size={20}
                          />
                          {i18n.language === "ar"
                            ? "تغيير كلمة المرور"
                            : "change password"}
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          onClick={() => setShowSidebar(false)}
                          className={`book text-white ${style.link}`}
                          to="/edit"
                        >
                          <AiFillEdit
                            className="green d-inline-block mx-1 "
                            size={20}
                          />
                          {i18n.language === "ar"
                            ? "تعديل بيانات الحساب"
                            : "edit account"}
                        </Link>
                      </li>
                    </>
                  )}
                  {menus.length
                    ? menus.map((item, index) => (
                        <li key={index} className="mb-2">
                          <Link
                            onClick={() => setShowSidebar(false)}
                            className={`book text-white ${style.link}`}
                            to={item.link}
                          >
                            <MdKeyboardArrowLeft
                              className="green d-inline-block mx-1 "
                              size={25}
                            />
                            {item.title}
                          </Link>
                        </li>
                      ))
                    : null}
                </ul>
                <div
                  className={`mx-auto  p-3  d-flex flex-column align-items-center gap-1 ${style.contactContainer}`}
                >
                  <img
                    loading="lazy"
                    alt="contact/icon"
                    src={callIcon}
                    className="mb-2"
                  />

                  <p className="text-white m-0 p-0 book">{t("contact us")}</p>
                  <p className="fw-bold m-0 p-0 green shamel fs22">
                    {t("help")}
                  </p>
                  <p className="green m-0 p-0 d-flex gap-1 align-items-center">
                    <span className="fw-bold shamel fs22 mt-1 ">
                      {phoneNum}
                    </span>
                    <BsFillTelephoneFill size={20} />{" "}
                  </p>
                </div>
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
  <select onChange={handleChangeLanguage} className="py-5">
            <option></option>
            <option>en</option>
          </select>
*/
