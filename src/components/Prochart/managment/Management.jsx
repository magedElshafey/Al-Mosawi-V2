import React, { useState } from "react";
import style from "./managment.module.css";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import BTN from "../../utils/btn/BTN";
const Management = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="py-3">
      <div className={style.mainContainer}>
        <div className="d-flex align-items-center justify-content-between px-4 py-3">
          <p className={`fs26 shamel m-0 p-0 fw-bold green`}>
            ادارة محافظ التداول
          </p>
          {showContent ? (
            <MdKeyboardArrowUp
              onClick={() => setShowContent(false)}
              className="pointer"
              size={30}
            />
          ) : (
            <MdKeyboardArrowDown
              onClick={() => setShowContent(true)}
              className="pointer"
              size={30}
            />
          )}
        </div>

        <div
          className={`w-100 ${style.modal} ${
            showContent ? style.show : style.hide
          } p-3`}
        >
          <div className="row align-items-center">
            <div className="col-12 col-md-5">
              <p className="green fs28 m-0 p-0 shamel text-center">العنوان</p>
              <p className=" book m-0 p-0  text-center">وصف المحتوي</p>
            </div>
            <div className="col-12 col-md-7">
              <div className="mb-3">
                <label htmlFor="name" className="d-block mb-2">
                  الاسم
                </label>
                <input className={`inp ${style.w90}`} type="text" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="d-block mb-2">
                  رقم الهاتف واتساب
                </label>
                <input
                  className={`inp ${style.w90}`}
                  type="number"
                  id="phone"
                />
              </div>
              <div className=" mb-3">
                <label htmlFor="email" className="d-block mb-2">
                  البريد الالكتروني
                </label>
                <input className={`inp ${style.w90}`} type="email" id="email" />
              </div>
              <div className="mb-3">
                <label className="d-block mb-2" htmlFor="const">
                  مبلغ الاستثمار
                </label>
                <input
                  className={`inp ${style.w90}`}
                  type="number"
                  id="const"
                />
              </div>
              <div className="pb-3">
                <BTN text="تقديم طلب" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
/**
 *
 */
