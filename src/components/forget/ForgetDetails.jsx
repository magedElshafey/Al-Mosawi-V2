import React, { useState } from "react";
import style from "./forget.module.css";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const ForgetDetails = () => {
  const naviagte = useNavigate();
  const [email, setEmail] = useState("");
  const handleClick = () => {
    if (email.trim().length) {
      naviagte("/new-password");
    } else {
      alert("email cannot be empty");
    }
  };
  return (
    <div className="container mt-5 pt-5">
      <div
        className={`pb-3 mb-4 ${style.titleContainer} d-flex justify-content-between align-items-center`}
      >
        <p className={` fw-bold m-0 p-0 ${style.text30}`}>
          استعادة كلمة المرور
        </p>
        <div
          onClick={() => naviagte(-1)}
          className="fs20 d-none d-md-block pointer d-flex align-items-center gap-2"
        >
          <MdOutlineArrowBackIosNew />
          <span className="mt-1">العودة</span>
        </div>
      </div>
      <p className={`mx-0 mt-0 mb-3 roboto ${style.text22}`}>
        يرجى كتابة بريدك الالكتروني لإستعادة كلمة المرور الجديدة
      </p>
      <div className="mb-5">
        <label htmlFor="email" className="d-block mb-1 fw-bold roboto fs-5">
          البريد الالكترونى
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className={`inp tahome ${style.inpWidth}`}
          placeholder="examel@example.com"
        />
      </div>
      <button onClick={handleClick} className={`mb-5 ${style.btn}`}>
        <MdOutlineArrowBackIosNew size={20} />
        <span className="mt-1">ارسال</span>
      </button>
      <div className="d-flex flex-column flex-md-row gap-1 justify-content-center align-items-center">
        <span
          className={`ms-2 text-center text-black-50 tahoma  ${style.text22}`}
        >
          ليس لديك حساب ؟
        </span>
        <Link to="/reg" className={` tahoma ${style.text22} ${style.reg}`}>
          انشاء حساب جديد
        </Link>
      </div>
    </div>
  );
};

export default ForgetDetails;
