import React from "react";
import AuthImg from "../components/utils/authImg/AuthImg";
import AuthIntro from "../components/utils/authIntro/AuthIntro";
import RegForm from "../components/Reg/RegForm";
import style from "../components/login/LoginForm.module.css";
const Regester = () => {
  return (
    <div className="d-flex mb-5 align-items-centerjustify-content-between">
      <div className={`${style.content}`}>
        <AuthIntro
          title="انشاء حساب جديد"
          desc="يمكنك التسجيل عبر المنصات التالية او ملىء استمارة التسجيل"
        />
        <RegForm />
      </div>
      <div className={style.content}>
        <AuthImg showWelcome={true} desc="" desc2="" />
      </div>
    </div>
  );
};

export default Regester;
