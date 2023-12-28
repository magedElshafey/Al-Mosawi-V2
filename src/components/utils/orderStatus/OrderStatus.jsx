import React from "react";
import style from "./orderStatus.module.css";
import BTN from "../btn/BTN";
const OrderStatus = ({
  title,
  imgLink,
  btnText,
  action,
  btnText2,
  action2,
}) => {
  return (
    <div className="row justify-content-center">
      <div
        className={`${style.mainContainer}  m-0 p-0 d-flex align-items-center flex-column flex-md-row gap-4`}
      >
        <div className={style.imgContainer}>
          <img
            loading="lazy"
            alt="status/img"
            className={style.mainImg}
            src={imgLink}
          />
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <p className="m-0 p-0 fw-bold">{title}</p>
          <div className="d-flex align-items-center gap-2">
            <BTN text={btnText} action={action} />
            {btnText2 && <BTN text={btnText2} action={action2} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
