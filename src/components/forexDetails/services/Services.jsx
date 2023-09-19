import React from "react";
import { userProchart } from "../../../fakers/data.js";
import ServicesCard from "../serviceCard/ServicesCard";
import style from "./services.module.css";
import tickmillLogo from "../../../assets/Tickmill_logo_red&grey@2x.png";
import PdfBtn from "../../utils/pdfBtn/PdfBtn.jsx";
import RecommendationHistoryCard from "../../utils/recommendationHistoryCard/RecommendationHistoryCard.jsx";
import { useTranslation } from "react-i18next";
const Services = ({ isProchart }) => {
  const [t] = useTranslation();
  return (
    <div>
      {!isProchart && (
        <div className="d-flex align-items-center  gap-2 mb-3">
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
        <div className="my-5">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
            <div>
              <p
                className={`d-inline-block m-0 p-0  fw-bolder  text-white fs24 shamel`}
              >
                {t("control ")}
              </p>
              <h3
                className={`d-inline-block shamel my-0 mx-2 whiteGreen p-0  fw-bolder   fs24`}
              >
                {t("prochart")}
              </h3>
              <h3
                className={`shamel d-inline-block my-0 mx-2 whiteGreen p-0  fw-bolder   fs24`}
              >
                / prochart
              </h3>
            </div>
            <PdfBtn text={t("downloadPlan")} />
          </div>
          <RecommendationHistoryCard />
        </div>
      )}
      <div className="row gap-3 ">
        <ServicesCard data={userProchart} />
       
      </div>
    </div>
  );
};

export default Services;
