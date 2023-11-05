import React from "react";
import { useTranslation } from "react-i18next";
const DealsDetails = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div>
      <h3 className="mx-0 mt-0 fs28 shamel mb-1 p-0  text-uppercase text-white fw-bolder">
        {data.title}
      </h3>
      <div className="d-flex align-items-center  gap-3 text-white  mb-3">
        <span>
          {i18n.language === "ar" ? "تم النشر" : "published"} :{" "}
          {data.Recommendation.updated_at}
        </span>
        <span>
          {i18n.language === "ar" ? "تم الانتهاء" : "completed"} :{" "}
          {data.Recommendation.end_date}
        </span>
      </div>
      <span className="d-inline-block mb-2 text-white">
        {i18n.language === "ar" ? "الشرح" : "explanation"} :
      </span>
      <p className="mx-0 mt-0 p-0 mb-2 text-white">
        {data.Recommendation.details}
      </p>
      <a className="fs-5 text-white fw-bold" target="_blank" href={data.link}>
        link
      </a>
    </div>
  );
};

export default DealsDetails;
