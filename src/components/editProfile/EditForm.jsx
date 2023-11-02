import React, { useState } from "react";
import style from "./editForm.module.css";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight, MdOutlineArrowBackIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { gitName, gitPp } from "../../Redux/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EditForm = ({
  isTickmill,
  name,
  email,
  phone,
  address,
  photo,
  investmentAmount,
  accountNumber,
  accountType,
  setName,
  setPassword,
  setPhone,
  setPhoto,
  password,
  lang,
  user,
  setAddress,
}) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("password", password);
    formDataToSend.append("profile_photo", photo);
    formDataToSend.append("phone", phone);
    const res = await axios.post(
      "https://almosawi.admin.technomasrsystems.com/api/user/update-my-profile",
      formDataToSend,
      {
        headers: {
          "content-type": "multipart/form-data",
          lang,
          user,
        },
      }
    );
    console.log("this is the res", res);
    if (res.data.status === "success") {
      toast.success(res.data.message);
      dispatch(gitName(res.data.data.name));
      dispatch(gitPp(res.data.data.photo));
      if (isTickmill) {
        navigate("/user/prochart");
      } else {
        navigate("/account");
      }
    } else {
      toast.error(res.data.message);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("this is the user", user);
  //   const formDataToSend = new FormData();
  //
  //
  //
  //
  //

  //   const res = await fetch(
  //     "",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         lang,
  //         user,
  //       },
  //       body: JSON.stringify(formDataToSend),
  //     }
  //   );
  //   const data = await res.json();
  //   console.log("this is the data after submit", data.data);
  //   if (data.status === "success") {
  //
  //
  //
  //   } else {
  //
  //   }
  //   return data;
  // };
  return (
    <div className="row justify-content-center">
      <h3 className="fw-bolder green text-center mb-3">
        {i18n.language === "ar" ? "معلومات الحساب" : "account details"}
      </h3>
      <form
        onSubmit={handleSubmit}
        className={`col-11 col-md-9 ${style.mainContainer} p-2`}
      >
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="name" className="d-block mb-1">
              {i18n.language === "ar" ? "الاسم" : "name"}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inp"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="email" className="d-block mb-1">
              {i18n.language === "ar" ? "البريد الالكتروني" : "email"}
            </label>
            <input
              disabled={true}
              className="inp"
              type="email"
              value={email}
              name="email"
              id="email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="phone" className="d-block mb-1">
              {i18n.language === "ar" ? "رقم الهاتف" : "phone"}
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="inp"
              type="text"
              value={phone}
              name="phone"
              id="phone"
            />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="address" className="d-block mb-1">
              {i18n.language === "ar" ? "العنوان" : "address"}
            </label>
            <input
              className="inp"
              type="text"
              value={address}
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              id="address"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="profilePhoto" className="d-block mb-1">
              {i18n.language === "ar" ? "الصورة الشخصية" : "profile photo"}
            </label>
            <input
              className="inp"
              type="file"
              name="profile_photo"
              id="profilePhoto"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="password" className="d-block mb-1">
              {i18n.language === "ar" ? "كلمة المرور" : "password"}
            </label>
            <input
              className="inp"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {isTickmill ? (
          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label htmlFor="investmentAmount" className="d-block mb-1">
                {i18n.language === "ar"
                  ? "مبلغ الاستثمار"
                  : "investment amount"}
              </label>
              <input
                className="inp"
                type="number"
                value={investmentAmount}
                name="investmentAmount"
                id="investmentAmount"
              />
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label htmlFor="accountNumber" className="d-block mb-1">
                {i18n.language === "ar" ? "رقم الحساب" : "account number"}
              </label>
              <input
                className="inp"
                type="number"
                value={accountNumber}
                name="accountNumber"
                id="accountNumber"
              />
            </div>
          </div>
        ) : null}
        {isTickmill ? (
          <div className="mb-3">
            <label htmlFor="accountType">
              {i18n.language === "ar" ? "نوع الحساب" : "account type"}
            </label>
            <input
              type="text"
              value={accountType}
              id="accountType"
              name="accountType"
              className="inp"
            />
          </div>
        ) : null}
        <div className="d-flex justify-content-center mb-3">
          <button
            type="submit"
            className={`${style.btn} d-flex justify-content-center align-items-center gap-2`}
          >
            {i18n.language === "en" ? (
              <MdKeyboardArrowRight size={20} />
            ) : (
              <MdOutlineArrowBackIos size={20} />
            )}
            <span>
              {isTickmill
                ? i18n.language === "ar"
                  ? "ارسال طلب"
                  : "send request"
                : i18n.language === "ar"
                ? "تعديل البيانات"
                : "edit data"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
