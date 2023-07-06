import React from "react";
import style from "./advantage.module.css";

import mob from "../../../assets/MOsawi-mob@2x.png";
const Advantage = ({ data }) => {
  return (
    <div className="py-5">
      <div className={`p-2 ${style.mainContainer}`}>
        <div className="text-center mb-4">
          <p className={`mx-0 mt-1 mb-3 p-0 green  fw-bold  ${style.text36}`}>
            مميزات البروشارت / prochart
          </p>
          <p className={`mt-4 mb-0 mx-0 p-0 roboto ${style.text28}`}>
            إن النجاح في عالم التداول يعتمد على التنبؤ الدقيق بالأسعار في الوقت
            المناسب... وهذا ما نقدمة لك
          </p>
        </div>
        <div className={` row p-4  ${style.mobContainer}`}>
          <div className="col-12 col-md-5 mb-4 mb-md-0">
            <p className={`m-0 p-0 fw-bold green ${style.text36}`}>
              لماذا prochart{" "}
            </p>
            <p className={`p-0 my-2   roboto ${style.text28}`}>
              اذا منت ترغب في الحصول علي فرصة مميزة لصفقات ناجحة ز ما عليك الا{" "}
              ان تضع الصفقات كأوامر معلقة و تنتظر تفعيل الصفقة
            </p>
            <p className={`m-0 p-0 fw-bold green ${style.text36}`}>
              ماذا نقدم لك
            </p>
            <div className="mt-2">
              {data.map((item, index) => (
                <p
                  className={`roboto  mx-0 mb-1 p-0 mt-0 ${style.text18}`}
                  key={index}
                >
                  {index + 1} - {item}
                </p>
              ))}
            </div>
          </div>
          <div className={`col-12 col-md-7 mb-4 mb-md-0 ${style.imgContainer}`}>
            <img
              alt="mob/img"
              src={mob}
              loading="lazy"
              className={style.mainImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
