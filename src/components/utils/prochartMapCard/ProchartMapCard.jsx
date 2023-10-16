import React from "react";
import style from "./prochartcard.module.css";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdOutlineArrowBackIos } from "react-icons/md";
const ProchartMapCard = ({ data, text, action, showModal }) => {
  const { i18n } = useTranslation();
  return (
    <div className={`p-3 mb-5 mb-md-0 ${style.heroContainer}`}>
      <div className={`p-2 ${style.mainContainer}`}>
        <img
          alt="data/img"
          src={data.icon}
          loading="lazy"
          className={style.mainImg}
        />
        <div className="text-center pt-5">
          <div dangerouslySetInnerHTML={{ __html: data.name }} />
        </div>
        <div className={style.detailsContainer}>
          {data.plansFeatures.map((item, index) => (
            <div
              key={index}
              className="mb-2 d-flex justify-content-center align-items-centr gap-2"
            >
              {item.feature_type === "true" ? (
                <IoCheckmarkCircleSharp className="green" size={20} />
              ) : (
                <AiOutlineClose size={20} className={style.false} />
              )}
              <p className="m-0 p-0">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/*price*/}
      <div className="my-3  d-flex justify-content-center align-items-center gap-2">
        <div>
          <p className={`p-0 m-0 fs22  ${style.price} d-inline-block`}>
            {i18n.language === "en" ? "after discount" : "بعد الخصم"}
          </p>
          <p
            className={`fw-bolder fs22 mx-1 p-0 m-0 ${style.price}   d-inline-block`}
          >
            {data.discount_price
              ? data.price - data.discount_price
              : data.price}{" "}
            $
          </p>
        </div>
        <p className={`fs22  p-0 m-0 ${style.original}`}>{data.price} $</p>
      </div>
      <button
        onClick={() => action(data.id)}
        className={`pb-4 d-flex justify-content-center align-items-center mx-auto gap-1 p-4 ${style.btn}`}
      >
        <MdOutlineArrowBackIos size={20} />
        <p className="m-0 p-0">{text}</p>
      </button>
    </div>
  );
};

export default ProchartMapCard;
