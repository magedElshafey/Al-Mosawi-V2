import React, { useState } from "react";
import style from "./loginAfilate.module.css";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight, MdOutlineArrowBackIos } from "react-icons/md";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  handleAfilator,
  handleCode,
  handleAfilatorId,
} from "../../Redux/afilator";
import { useNavigate } from "react-router-dom";
const LoginAfilateForm = ({ lang }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      toast.error(
        i18n.language === "ar" ? "جميع الحقول مطلوبة" : "all filed are required"
      );
    } else {
      const res = await fetch(
        "https://almosawi.admin.technomasrsystems.com/api/affiliate/loginAsAffiliator",
        {
          method: "POST",
          headers: {
            lang,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await res.json();
      if (data.status) {
        toast.success(data.message);
        dispatch(handleAfilator());
        dispatch(handleCode(data.user.referral_code));
        dispatch(handleAfilatorId(data.user.id));
        navigate("/afilator");
      } else {
        toast.error(data.message);
      }
    }
  };
  return (
    <div>
      <h4 className="whiteGreen mb-4">
        {i18n.language === "ar"
          ? "قم بملء البيانات لتنضم لفريق التسويق الخاص بنا"
          : "Fill out the information to join our marketing team"}
      </h4>
      <form onSubmit={handleClick} className={style.mainContainer}>
        <div className="mb-3">
          <label htmlFor="email" className="d-block mb-1">
            {i18n.language === "ar" ? "البريد الالكتروني" : "email"}
          </label>
          <input
            type="email"
            id="email"
            className="inp"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="d-block mb-1">
            {i18n.language === "ar" ? "كلمة المرور" : "password"}
          </label>
          <input
            type="password"
            id="password"
            className="inp"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className={` ${style.btn}`} type="submit">
            {i18n.language === "en" ? (
              <MdKeyboardArrowRight size={20} />
            ) : (
              <MdOutlineArrowBackIos size={20} />
            )}
            <span>{i18n.language === "ar" ? "تسجيل الدخول" : "login"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginAfilateForm;
