import React, { useState } from "react";
import style from "./managment.module.css";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { request } from "../../utils/axios";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Spinner from "../../utils/Spinner/Spinner";
const Management = ({ data }) => {
  const { i18n } = useTranslation();
  const [showContent, setShowContent] = useState(false);
  const [number, setNumber] = useState(0);
  const [phoneValue, setPhoneValue] = useState(0);
  const [numError, setNumError] = useState(false);
  const handleNumberChange = (event) => {
    // Get the value entered by the user
    const inputValue = event.target.value;

    // Check if the input is a valid non-negative number
    if (inputValue >= 0 || inputValue === "") {
      setNumber(inputValue); // Update the state with the valid input
      if (+inputValue < 100000) {
        setNumError(true);
      } else {
        setNumError(false);
      }
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSendMsg = (data) => {
    return request({ url: "/prochartForm", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(handleSendMsg, {
    onSuccess: (data) => {
      if (data?.data.status) {
        toast.success(
          i18n.language === "en"
            ? "your message sent succfully"
            : "تم ارسال رسالتك بنجاح"
        );
        setName("");
      }
    },
    onError: () => {
      toast.error(
        i18n.language === "en"
          ? "there is an error occurred , please try again"
          : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
      );
    },
  });
  const handleClick = (e) => {
    if (
      number.trim() === "" ||
      email.trim() === "" ||
      phoneValue.trim() === "" ||
      name.trim() === ""
    ) {
      return;
    } else {
      e.preventDefault();
      const data = { investAmount: number, phone: phoneValue, name, email };
      mutate(data);
      console.log("this is the body", data);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
                    <input
                      onChange={(e) => setName(e.target.value)}
                      className={`inp ${style.w90}`}
                      type="text"
                      id="name"
                    />
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
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className={`inp ${style.w90}`}
                      type="email"
                      id="email"
                    />
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
                    {numError && (
                      <p className="red error">
                        {i18n.language === "ar"
                          ? "هذا المبلغ غير كافي يجب ان يتخطي ال 100.000$ "
                          : "This amount is not enough"}
                      </p>
                    )}
                  </div>
                  <div className="pb-3">
                    <button className={` ${style.btn}`} onClick={handleClick}>
                      {i18n.language === "en" ? (
                        <MdKeyboardArrowRight size={20} />
                      ) : (
                        <MdOutlineArrowBackIos size={20} />
                      )}
                      <span>{data.bTitle}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Management;
/**
 *
 */
