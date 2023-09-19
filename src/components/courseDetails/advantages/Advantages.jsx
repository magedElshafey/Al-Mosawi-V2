import React from "react";
import style from "./advantage.module.css";
import { useTranslation } from "react-i18next";
import WHY from "../why/WHY";

const Advantages = ({ img, question, details, why }) => {
  const [t] = useTranslation();
  return (
    <div>
      <div className={`position-relative ${style.imgContainer}`}>
        <img
          loading="lazy"
          src={img}
          alt="advantage/img"
          className={style.mainImg}
        />
        <div className={style.contentContainer}>
          <p className="pt-2 pb-0 px-0 mb-1 mt-0 mx-0 green fw-bold shamel fs24">
            {t("courseAdvantages")}
          </p>
          <div className="my-2">
            <p className="mx-0 fw-bold  mb-2 p-0">{question}</p>
            {details.map((detail, index) => (
              <p key={index} className="mx-0   mb-2 p-0 ">
                {detail}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-3 p-3">
          <WHY data={why} />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
