import React from "react";
import style from "./maps.module.css";
import ProchartMapCard from "../../utils/prochartMapCard/ProchartMapCard";

const Maps = ({ data, showModal, action }) => {
  return (
    <div className={style.main}>
      <div className="mb-4 text-center">
        <p className={`mt-5 mb-2 fw-bold  green ${style.text}`}>
          خطط البروشارت / prochart
        </p>
        <p className="mt-4 fw-bold mb-0 p-0">
          نوفر لك خطط متميزة تناسب احتياجاتك.. اختر خطتك الان وابدا بتجربة صفقات
          متميزة معنا
        </p>
      </div>
      <div className="py-5 d-flex flex-wrap justify-content-center gap-4">
        {data.map((item, index) => (
          <ProchartMapCard
            action={action}
            showModal={showModal}
            text="اشترك الان"
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Maps;
