import React, { useState } from "react";
import style from "./loginAfilate.module.css";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowRight, MdOutlineArrowBackIos } from "react-icons/md";
const LoginAfilateForm = () => {
  const { i18n, t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h4 className="green mb-4">
        {i18n.language === "ar"
          ? "قم بملء البيانات لتنضم لفريق التسويق الخاص بنا"
          : "Fill out the information to join our marketing team"}
      </h4>
      <form className={style.mainContainer}>
        <div className="mb-3">
          <label htmlFor="email" className="d-block mb-1 green">
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
          <label htmlFor="password" className="d-block mb-1 green">
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
            <span>{i18n.language === "ar" ? "تقديم طلب" : "Apply"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginAfilateForm;
