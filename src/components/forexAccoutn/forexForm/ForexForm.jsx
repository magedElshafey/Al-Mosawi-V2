import React, { useState } from "react";
import style from "./ForexForm.module.css";
import Upload from "./upload/Upload";
import BigBtn from "../../utils/bigBtn/BigBtn";
import { useTranslation } from "react-i18next";

const ForexForm = () => {
  const [t] = useTranslation();
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");
  const [passport, setPassport] = useState("");
  const handleIdChange = (event) => {
    setId(event.target.files[0]);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.files[0]);
  };
  const handleChangePassport = (event) => {
    setPassport(event.target.files[0]);
  };
  return (
    <div className={`p-3 ${style.mainContainer}`}>
      <p className="fw-bold mx-0 p- shamel fs22 mb-2">{t("regForm")}</p>
      <p className="mx-0 p-0 mb-3">{t("regDesc")}</p>
      <p className="mx-0 mt-0 fw-bolder green shamel fs20">البيانات الشخصية</p>

      <form>
        <div className="row mb-2">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="fs" className="fw-bold d-block shamel  mb-2">
              {t("fn")}
            </label>
            <input className="inp" type="text" id="fs" />
          </div>
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="ln" className="fw-bold d-block shamel  mb-2">
              {t("ln")}
            </label>
            <input className="inp" type="text" id="ln" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="num" className="fw-bold shamel d-block  mb-2">
              {t("phone")}
            </label>
            <input className="inp" type="number" id="num" />
          </div>
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="email" className="fw-bold shamel d-block  mb-2">
              {t("emailTwo")}
            </label>
            <input className="inp" type="email" id="email" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="account" className="fw-bold shamel d-block  mb-2">
              {t("acountType")}
            </label>
            <select className="inp" id="account">
              <option value="">نوع الحساب</option>
              <option>حساب MAX</option>
              <option>Bla bla bla</option>
            </select>
          </div>
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="city" className="shamel fw-bold d-block  mb-2">
              {t("countryTwo")}
            </label>
            <input className="inp" type="text" id="city" />
          </div>
        </div>
        <p className="mx-0  mt-4 mb-2 fw-bolder green shamel fs22">
          {t("reqPaper")}
        </p>

        <div className="my-2">
          <Upload action={handleIdChange} label={t("id")} id="ID" />
          <Upload action={handleChangeAddress} label={t("address")} id="add" />
          <Upload
            action={handleChangePassport}
            label={t("passport")}
            id="passport"
          />
          <BigBtn text={t("sendNow")} />
        </div>
      </form>
    </div>
  );
};

export default ForexForm;
