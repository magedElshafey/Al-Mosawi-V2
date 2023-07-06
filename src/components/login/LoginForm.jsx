import React from "react";
import style from "./LoginForm.module.css";

import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const LoginForm = () => {
  return (
    <div className="container-fluid py-5">
      <div className="mb-3">
        <label htmlFor="email" className="d-block fw-bold mb-1 fs20">
          البريد الإلكتروني
        </label>
        <input className={`inp ${style.inpWidth}`} type="email" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="d-block fw-bold mb-1 fs20">
          كلمة المرور
        </label>
        <input
          className={`inp ${style.inpWidth}`}
          type="password"
          id="password"
        />
      </div>
      <div
        className={`mt-5  mb-3 d-flex flex-column flex-md-row gap-5 `}
      >
        <div>
          <input
            type="checkbox"
            id="rem"
            className={`p-0 my-0 mx-2  ${style.checkBox}`}
          />
          <label htmlFor="rem" className={`mb-1 fw-bold ${style.text20}`}>
            تذكرني
          </label>
        </div>
        <Link to="/forget" className={`fw-bold ${style.text20} ${style.links}`}>
          استعادة كلمة المرور
        </Link>
      </div>
      <button className= {style.btn}>
        <MdOutlineArrowBackIosNew size = {20} /> 
        <span className="text-white mt-1">دخول</span>
      </button>
      <p className="text-center my-3 mx-0 p-0 fw-bold">
        <span className={style.haveAccount}> ليس لديك حساب ؟</span>{" "}
        <span className={style.reg}> انشاء حساب</span>
      </p>
    </div>
  );
};

export default LoginForm;
