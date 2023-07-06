import React from "react";
import style from "./prochartcard.module.css";
import DarkGreenTitle from "../darkGreenTitle/DarkGreenTitle";
import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdOutlineArrowBackIos } from "react-icons/md";
const ProchartMapCard = ({ data, text, action, showModal }) => {
  return (
    <div className={`p-3 ${style.heroContainer}`}>
      <div className={`p-2 ${style.mainContainer}`}>
        <img
          alt="data/img"
          src={data.img}
          loading="lazy"
          className={style.mainImg}
        />
        <p className="text-center pt-5 ">
          <DarkGreenTitle title="الباقة" />{" "}
          <p className={`d-inline-block m-0 px-0 pt-3 ${style.title}`}>
            {data.title}
          </p>
        </p>
        <div className={style.detailsContainer}>
          {data.details.map((item, index) => (
            <div
              key={index}
              className="mb-2 d-flex justify-content-center align-items-centr gap-2"
            >
              {item.isTrue ? (
                <IoCheckmarkCircleSharp className="green" size={20} />
              ) : (
                <AiOutlineClose size={20} className={style.false} />
              )}
              <p className="fw-bold m-0 p-0">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/*price*/}
      <div className="py-4 px-2 d-flex justify-content-center align-items-center gap-2">
        <p className={`fs-4 p-0 m-0  ${style.price}`}>
          بعد الخصم {data.offer ? data.price - data.offer : data.price} $
        </p>
        <p className={`fs-4 p-0 m-0 ${style.original}`}>{data.price} $</p>
      </div>
      <button
        onClick={action}
        className={`pb-4 d-flex justify-content-center align-items-center mx-auto gap-1 p-4 ${style.btn}`}
      >
        <MdOutlineArrowBackIos size={20} />
        <p className="m-0 p-0">{text}</p>
      </button>
    </div>
  );
};

export default ProchartMapCard;
