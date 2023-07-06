import React, { useState } from "react";
import style from "./ForexForm.module.css";
import DarkGreenTitle from "../../utils/darkGreenTitle/DarkGreenTitle";
import Upload from "./upload/Upload";
import BigBtn from "../../utils/bigBtn/BigBtn";
const ForexForm = () => {
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
      <p className="fw-bold mx-0 p-0 fs-3 mb-4">استمارة التسجيل</p>
      <p className="mx-0 p-0 mb-5">
        سجل بياناتك وسيتم انشاء الحساب فورا والوصول الى لوحة التحكم
      </p>
      <DarkGreenTitle title="البيانات الشخصية" />
      <form className="py-3">
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="fs" className="fw-bold d-block fs-4 mb-1">
              الاسم الاول
            </label>
            <input className="inp" type="text" id="fs" />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="ln" className="fw-bold d-block fs-4 mb-1">
              اسم العائلة
            </label>
            <input className="inp" type="text" id="ln" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="num" className="fw-bold d-block fs-4 mb-1">
              رقم الهاتف
            </label>
            <input className="inp" type="number" id="num" />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="email" className="fw-bold d-block fs-4 mb-1">
              البريد الإلكتروني
            </label>
            <input className="inp" type="email" id="email" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="account" className="fw-bold d-block fs-4 mb-1">
              نوع الحساب
            </label>
            <select className="inp" id="account">
              <option value="">نوع الحساب</option>
              <option>حساب MAX</option>
              <option>Bla bla bla</option>
            </select>
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="city" className="fw-bold d-block fs-4 mb-1">
              بلد الإقامة
            </label>
            <input className="inp" type="text" id="city" />
          </div>
        </div>
        <DarkGreenTitle title="الأوراق المطلوبة" />
        <div className="my-3">
          <Upload
            action={handleIdChange}
            label="البطاقة المدنية من الأمام و الخلف"
            id="ID"
          />
          <Upload
            action={handleChangeAddress}
            label="اثبات عنوان / سكن"
            id="add"
          />
          <Upload
            action={handleChangePassport}
            label="جواز السفر"
            id="passport"
          />
          <BigBtn text="تم الارسال بنجاح" />
        </div>
      </form>
    </div>
  );
};

export default ForexForm;
