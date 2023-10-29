import React, { useState } from "react";
import style from "./editForm.module.css";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight, MdOutlineArrowBackIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { gitName, gitPp } from "../../Redux/auth";
import { useNavigate } from "react-router-dom";
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
}) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name,
    phone,
    password,
    profile_photo: photo,
    account_type: accountType,
    invest_amount: investmentAmount,
    account_number: accountNumber,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      profilePhoto: file,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is the user", user);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.username);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("profile_photo", formData.profile_photo);
    formDataToSend.append("phone", formData.phone);

    const res = await fetch(
      "https://almosawi.admin.technomasrsystems.com/api/user/update-my-profile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          lang,
          user,
        },
        body: JSON.stringify(formDataToSend),
      }
    );
    const data = await res.json();
    console.log("this is the data after submit", data.data);
    if (data.status === "success") {
      toast.success(data.message);
      dispatch(gitName(data.data.name));
      dispatch(gitPp(data.data.photo));
      if (isTickmill) {
        navigate("/user/prochart");
      } else {
        navigate("/account");
      }
    } else {
      toast.error(data.message);
    }
    return data;
  };
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
              value={formData.name}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              className="inp"
              type="text"
              value={formData.phone}
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
              filename={formData.profile_photo}
              name="profilePhoto"
              id="profilePhoto"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
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
              value={formData.password}
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
