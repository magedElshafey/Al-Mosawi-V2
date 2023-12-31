import React from "react";
import style from "./WeOffer.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
const WeOffer = ({ weOffer }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => navigate("/account/special");
  return (
    <div className="my-5  overflow-hidden">
      <div className={` ${style.imgContainer}`}>
        <img
          loading="lazy"
          alt="hero/img"
          src={weOffer.backgroundImage}
          className={style.mainImg}
        />
        <div className={style.overlay}>
          <div className="container z-3 pt-5 pt-md-0">
            <div className="pt-3 row justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6">
                <div
                  dangerouslySetInnerHTML={{ __html: weOffer.adSectionTitle1 }}
                />
                <div
                  dangerouslySetInnerHTML={{ __html: weOffer.adSectionDes1 }}
                />

                <button onClick={handleClick} className={style.btn}>
                  <div
                    className={`d-flex justify-content-center align-items-center p-2 ${style.arrowContainer}`}
                  >
                    {i18n.language === "ar" ? (
                      <MdArrowBackIosNew size={20} />
                    ) : (
                      <IoIosArrowForward size={20} />
                    )}
                  </div>

                  <span className={`text-white ${style.text}`}>
                    {weOffer.adSectionbuttonTitle1}
                  </span>
                </button>
              </div>
              <div className="col-12 col-md-6 pb-5 mb-md-0">
                <img
                  loading="lazy"
                  className={style.mob}
                  alt="mob/img"
                  src={weOffer.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
/**
 * <div className="pb-5 overflow-hidden">
      <div className={`${style.imgContainer}`}>
        <img
          loading="lazy"
          alt="hero/img"
          src={weOffer.backgroundImage}
          className={style.mainImg}
        />
        <div className={style.overlay}>
          <div className="container z-3">
            <div className="row justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <div
                  dangerouslySetInnerHTML={{ __html: weOffer.adSectionTitle1 }}
                />
                <div
                  dangerouslySetInnerHTML={{ __html: weOffer.adSectionDes1 }}
                />

                <button onClick={handleClick} className={style.btn}>
                  <div
                    className={`d-flex justify-content-center align-items-center p-2 ${style.arrowContainer}`}
                  >
                    <MdArrowBackIosNew size={20} />
                  </div>

                  <span className={`text-white ${style.text}`}>
                    {weOffer.adSectionbuttonTitle1}
                  </span>
                </button>
              </div>
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <img
                  loading="lazy"
                  className={style.mob}
                  alt="mob/img"
                  src={weOffer.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 */
