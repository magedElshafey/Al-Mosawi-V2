import React from "react";
import style from "./heroForex.module.css";
import AccountDetails from "../../forexDetails/accountDetails/AccountDetails";
import tickmillLogo from "../../../assets/Tickmill_logo_red&grey@2x.png";
import RecommendationHistoryCard from "../recommendationHistoryCard/RecommendationHistoryCard";
import PdfBtn from "../pdfBtn/PdfBtn";
import { useTranslation } from "react-i18next";
import ServicesCard from "../../forexDetails/serviceCard/ServicesCard";
const HeroForex = ({ isProchart, data, accountDetails, lang }) => {
  const { t, i18n } = useTranslation();
  const isTickMill = JSON.parse(localStorage.getItem("tickmillUser"));
  return (
    <div className={`${style.mainDiv} m-0 p-0`}>
      <div className="container">
        <div className="row justify-content-center justify-content-md-start">
          <div className=" mt100 z-3 col-12 col-md-3">
            <AccountDetails data={accountDetails} lang={lang} />
          </div>
          <div className="z-3 mt-100  col-12 col-md-9">
            {!isProchart && (
              <div
                className={`d-flex align-items-center  gap-2 mb-5 ${style.desc}`}
              >
                <p className="fw-bolder shamel fs24 text-white mx-0 mt-1 mb-0 p-0">
                  {t("quick")}
                </p>
                <img
                  src={tickmillLogo}
                  alt="tickmill/logo"
                  className={style.tickmillLogo}
                  loading="lazy"
                />
              </div>
            )}
            {isProchart && (
              <div>
                <div className="mb-5">
                  <div
                    className={`d-flex justify-content-between align-items-center flex-wrap`}
                  >
                    <div>
                      <p
                        className={`d-inline-block m-0 p-0  fw-bolder  text-white fs20 shamel`}
                      >
                        {i18n.language === "ar" ? "لوحة تحكم" : "Control Panel"}
                      </p>
                      <h3
                        className={`d-inline-block shamel my-0 mx-2 whiteGreen p-0  fw-bolder   fs20`}
                      >
                        {t("prochart")}
                      </h3>
                    </div>
                    <PdfBtn text={t("downloadPlan")} />
                  </div>
                  <RecommendationHistoryCard />
                </div>
              </div>
            )}
            <ServicesCard data={data} isTickMill={isTickMill} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroForex;
/**
 * 
 *  <div>
      <div className="container">
        <div >
         
          <div >
            <Services isProchart={isProchart} />
          </div>
        </div>
      </div>
    </div>
 */
