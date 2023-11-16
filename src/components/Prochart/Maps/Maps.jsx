import React from "react";
import style from "./maps.module.css";
import ProchartMapCard from "../../utils/prochartMapCard/ProchartMapCard";
import { useTranslation } from "react-i18next";
const Maps = ({ data, showModal, action, setShowModal }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={`py-2 ${style.main}`}>
      <div className="mb-2 text-center">
        <p className={`my-2 fw-bold  green  shamel  fs28`}>
          {i18n.language === "ar"
            ? "خطط البروشارت / prochart"
            : "prochart plans"}
        </p>
        <p className="mt-0 mb-3 p-0">
          {i18n.language === "ar"
            ? "نوفر لك خطط متميزة تناسب احتياجاتك.. اختر خطتك الان وابدا بتجربة صفقات"
            : "We provide you with distinct plans that suit your needs. Choose your plan now and start trying out deals Distinguished with us"}
        </p>
      </div>
      <div
        className={`pt-4 pb-2 d-flex flex-wrap justify-content-center gap-2 ${style.mainDiv}`}
      >
        {data.map((item, index) => (
          <ProchartMapCard
            action={action}
            showModal={showModal}
            text={t("subscribe ")}
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Maps;
