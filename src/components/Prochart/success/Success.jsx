import React from "react";
import style from "./success.module.css";
import mob1 from "../../../assets/mob-01.png";
import mob2 from "../../../assets/mob-02.png";
import DarkGreenTitle from "../../utils/darkGreenTitle/DarkGreenTitle";
const Success = () => {
  return (
    <div className="py-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <p
            className={`green fw-bold  m-0 p-0 d-inline-block ${style.text28}`}
          ></p>
          <p className={`mx-0 mb-2 fw-bold ${style.text30} green`}>
            النجاح في التداول
          </p>
          <p className={`${style.text28} fw-bold mx-1 d-inline-block my-2`}>
            يبدأ مع اختيارك
          </p>
          <p className={`${style.text28} fw-bold green d-inline-block my-2`}>
            لصفقان ناجحة
          </p>
          <p className="my-4 fw-bold lh">
            صفقات متميزة حققناها ... لا تتردد بالاطلاع عليها
          </p>
          <div className={`p-2 text-center ${style.textContainer}`}>
            <p
              className={`fs-3 fw-bold mb-3 mx-0 p-0 d-inline-block ${style.client}`}
            >
              صفقات العملاء
            </p>

            <p className="fw-bold mx-0 p-0 mb-3 lh">
              إذا كنت من محبي التداول على العملات مثل الدولار واليورو شاهد
              النقاط التي حققناها في هذه الصفقة
            </p>
          </div>
          <div className="mt-5 d-flex justify-content-center align-items-center gap-2">
            <span className={`${style.span}`}></span>
            <span className={`${style.span}`}></span>
            <span className={`${style.span}`}></span>
            <span className={`${style.span} ${style.active}`}></span>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex align-items-center gap-2 justify-content-center">
          <img
            alt="mob/img"
            src={mob1}
            loading="lazy"
            className={style.mobOne}
          />
          <img
            alt="mobile/img"
            src={mob2}
            loading="lazy"
            className={`d-none d-md-block ${style.mobTwo}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
