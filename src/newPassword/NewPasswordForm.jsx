import React from "react";
import style from "./newPassword.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const NewPasswordForm = () => {
  return (
    <div className="container mt-5 pt-5">
      <p className={`fw-bold fs-4 mx-0 mt-3 pb-3 px-0 ${style.textContainer}`}>
        انشاء كلمة مرور جديدة
      </p>
      <div className="mt-5 mb-3">
        <label htmlFor="passowrd" className="d-block fw-bold mb-1 fs20">
          كلمة المرور الجديدة
        </label>
        <input
          className={`inp ${style.inpWidth}`}
          type="passowrd"
          id="passowrd"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirm" className="d-block fw-bold mb-1 fs20">
          تأكيد كلمة المرور الجديدة
        </label>
        <input
          className={`inp ${style.inpWidth}`}
          type="passowrd"
          id="confirm"
        />
      </div>
      <button className={style.btn}>
        <MdOutlineArrowBackIosNew size={20} />
        <span className="text-white mt-1">انشاء كلمة مرور جديدة</span>
      </button>
      <p className="mt-5 mx-0 p-0 fw-bold">
        <span className={style.haveAccount}> ليس لديك حساب ؟</span>{" "}
        <span className={style.reg}> انشاء حساب</span>
      </p>
    </div>
  );
};

export default NewPasswordForm;
