import React from "react";
import { forexAccDetails } from "../../../fakers/data.js";
import ServicesCard from "../serviceCard/ServicesCard";
import style from "./services.module.css";

import PdfBtn from "../../utils/pdfBtn/PdfBtn.jsx";
import RecommendationHistoryCard from "../../utils/recommendationHistoryCard/RecommendationHistoryCard.jsx";
const Services = ({ isProchart }) => {
  return (
    <div>
      {!isProchart && (
        <p className="mt-5 mx-0 p-0 mb-3 fw-bold fs-4 text-center text-white">
          الوصول السريع لعملاء tickmill
        </p>
      )}
      {isProchart && (
        <div className="mt-5">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
            <div>
              <p
                className={`d-inline-block m-0 p-0  fw-bolder  text-white ${style.text}`}
              >
                لوحة تحكم
              </p>
              <h3
                className={`d-inline-block my-0 mx-2 whiteGreen p-0  fw-bolder  ${style.text}`}
              >
                البروشارت
              </h3>
              <h3
                className={`d-inline-block my-0 mx-2 whiteGreen p-0  fw-bolder  ${style.text}`}
              >
                / prochart
              </h3>
            </div>
            <PdfBtn text="تحميل خطة ادارة راس المال" />
          </div>
          <RecommendationHistoryCard />
        </div>
      )}
      <div className="d-flex align-items-center gap-5 flex-wrap justify-content-center mt-5 ">
        {forexAccDetails.map((item, index) => (
          <ServicesCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
