import React from "react";
import style from "./WeOffer.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const WeOffer = ({ weOffer }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/account/special");
  return (
    <div className="py-5">
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
              <div className="col-12 col-md-7 mb-3 mb-md-0">
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
              <div className="col-12 col-md-5 mb-3 mb-md-0">
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
 * 
 * import React, { useState } from "react";
import style from "./WeOffer.module.css";
import MainBtn from "../../utils/mainBtn/MainBtn";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const WeOffer = ({ weOffer }) => {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [detailsId, setDetailsId] = useState(null);

  const handleMouseEnter = (id) => {
    setShowDetails(true);
    setDetailsId(id);
  };
  const handleMouseLeave = () => {
    setShowDetails(false);
    setDetailsId(null);
  };
  const handleCreateAccount = () => {
    navigate("/forex-account");
  };
  return (
    <div className="container mt-5 py-5">
      <div className="mb-3">
        
        <p className="mx-0 mt-0 mb-4 p-0 fw-bold shamel fs22">
          افتح حساب وأبدأ بتجربة متميزة في عالم التداول
        </p>
        <p className={`m-0 p-0 fs18 mb-5  ${style.desc}`}>
          سواء كنت مبتدأً في السوق أم متداول ذو خبرة نوفر لك جميع الخدمات
          لمساعدتك في الحصول على تجربة متميزة في السوق
        </p>
      </div>
      <div className=" d-flex justify-content-center justify-content-md-start mb-5">
        <MainBtn text={t("learnBtn")} />
      </div>

      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mt-5 mb-5">
        {weOffer.accounts.map((account, index) => (
          <div
            key={index}
            className={` position-relative ${style.mainContainer}`}
          >
            <img
              className={style.mainImg}
              alt="account/img"
              loading="lazy"
              src={account.img}
            />
            <div className={style.text}>
              <p className="m-0 p-0 fw-bold shamel fs28">{account.title}</p>
              <p className="m-0 p-0 fw-bold shamel fs36">{account.desc}</p>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <button
                  onClick={handleCreateAccount}
                  className={`d-flex align-items-center gap-2 text-white ${style.btn}`}
                >
                  <div className={`p-2 ${style.arrowContainer}`}>
                    <MdArrowBackIosNew size={20} />
                  </div>
                  <span className="fs20">{t("openReal")}</span>
                </button>
                <button
                  className={` d-flex align-items-center gap-2 text-white ${style.secondBtn}`}
                >
                  <MdArrowBackIosNew size={20} />

                  <span>{t("openDemo")}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeOffer;

 */
