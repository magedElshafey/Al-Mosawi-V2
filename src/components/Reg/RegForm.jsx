import React, { useState } from "react";
import style from "./reg.module.css";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const RegForm = ({ setShowModal }) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const handleNameChange = (e) => {
    const inputText = e.target.value;

    if (/\d/.test(inputText)) {
      setNameError("Number are not allowed");
    } else {
      setNameError("");

      setFullName(inputText);
    }
  };
  const handleMobileNumberChange = (e) => {
    const inputNumber = e.target.value;

    // Check if the input is a valid positive number
    if (/^\d+$/.test(inputNumber)) {
      setMobileNumber(inputNumber);
      setMobileError("");
    } else {
      // Display an error message for invalid input
      setMobileNumber("");
      setMobileError("Please enter a valid mobile number.");
    }
  };
  return (
    <form className="py-5 container">
      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <label htmlFor="name" className={`d-block fw-bold shamel mb-1`}>
            {t("fullName")}
          </label>
          <input
            type="text"
            placeholder="Ex : ماجد الشافعي"
            id="name"
            className="inp"
            onChange={handleNameChange}
          />
          {nameError && <p className="my-2 error">{nameError}</p>}
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <label htmlFor="number" className={`d-block fw-bold shamel mb-1`}>
            {t("phone")}
          </label>
          <input
            type="number"
            placeholder="Ex : 0102215"
            id="number"
            className="inp"
            min={0}
            onChange={handleMobileNumberChange}
          />
          {mobileError && <p className="my-2 error">{mobileError}</p>}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <label htmlFor="email" className={`d-block fw-bold  shamel mb-1`}>
            {t("emailTwo")}
          </label>
          <input
            type="email"
            placeholder="Ex : magedelshafey@gmail.com"
            id="email"
            className="inp"
          />
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <label htmlFor="city" className={`d-block fw-bold shamel mb-1`}>
            {t("country")}
          </label>
          <select className="inp" id="city">
            <option>الكويت</option>
            <option>مصر</option>
            <option>الامارات</option>
          </select>
        </div>
      </div>
      <div className="row mt-5 mb-4 ">
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column gap-2">
          <label htmlFor="question" className={`shamel fs15 `}>
            {t("customer")}{" "}
            <span className={`red  fw-bold text-uppercase`}>tikmill</span>
          </label>
          <div className="d-flex gap-5  align-items-center gap-3">
            <div>
              <input
                type="radio"
                id="yes"
                className={`p-0 m-0  ${style.radio}`}
                name="ask"
              />
              <label htmlFor="yes" className={`p-0 my-0 mx-1 fw-bold  shamel`}>
                {t("yes")}
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                className={`p-0 m-0  ${style.radio}`}
                name="ask"
              />
              <label htmlFor="no" className={`p-0 my-0 mx-1 fw-bold  shamel`}>
                {t("no")}
              </label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column gap-2">
          <p htmlFor="conditions" className={`m-0 p-0 fw-bold  shamel`}>
            {t("terms")}
          </p>
          <div>
            <input
              type="checkbox"
              id="conditions"
              className={`p-0 m-0  ${style.checkBox}`}
            />
            <label htmlFor="yes" className={`p-0 my-0 mx-1 fw-bold  shamel`}>
              {t("agree")}
            </label>
            <span
              onClick={() => setShowModal(true)}
              className={`pointer m-0 p-0 shamel  fw-bold ${style.condition}`}
            >
              {t("terms")}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/forex-account/details")}
        className={`book mb-3 ${style.btn}`}
      >
        <MdOutlineArrowBackIos size={20} />
        <span>{t("next")}</span>
      </button>

      <p className=" my-3 mx-0 p-0">
        <span className={`tahoma ${style.haveAccount}`}>
          {t("havAccount")}{" "}
        </span>{" "}
        <span
          onClick={() => navigate("/login")}
          className={`pointer tahoma fw-bold ${style.reg}`}
        >
          {t("Authlogin")}
        </span>
      </p>
    </form>
  );
};

export default RegForm;
