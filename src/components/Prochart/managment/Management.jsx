import React, { useState } from "react";
import style from "./managment.module.css";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import BTN from "../../utils/btn/BTN";
const Management = ({ data }) => {
  const [showContent, setShowContent] = useState(false);
  const [number, setNumber] = useState(0);
  const [phoneValue, setPhoneValue] = useState(0);
  const handleNumberChange = (event) => {
    // Get the value entered by the user
    const inputValue = event.target.value;

    // Check if the input is a valid non-negative number
    if (inputValue >= 0 || inputValue === "") {
      setNumber(inputValue); // Update the state with the valid input
    }
  };
  const handlePhoneChange = (event) => {
    // Get the value entered by the user
    const inputValue = event.target.value;

    // Check if the input is a valid non-negative number
    if (inputValue >= 0 || inputValue === "") {
      setPhoneValue(inputValue); // Update the state with the valid input
    }
  };
  return (
    <div className="py-3">
      <div className={style.mainContainer}>
        <div className="d-flex align-items-center justify-content-between px-4 py-3">
          <p className={`fs26 shamel m-0 p-0 fw-bold green`}>
            {data.mainTitle}
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
              <p className="green fs28 m-0 p-0 shamel text-center">
                {data.title}
              </p>
              <p className=" book m-0 p-0  text-center">{data.des}</p>
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
                  value={phoneValue}
                  onChange={handlePhoneChange}
                  min="0"
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
                  value={number}
                  onChange={handleNumberChange}
                  min="0"
                />
              </div>
              <div className="pb-3">
                <BTN text={data.bTitle} />
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
