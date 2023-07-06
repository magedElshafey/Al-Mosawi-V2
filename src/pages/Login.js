import React from "react";
import AuthImg from "../components/utils/authImg/AuthImg";
import AuthIntro from "../components/utils/authIntro/AuthIntro";
import LoginForm from "../components/login/LoginForm";
import style from "../components/login/LoginForm.module.css";
const Login = () => {
  return (
    <div className="d-flex align-items-centerjustify-content-between">
      <div className={`${style.content}`}>
        <AuthIntro title="تسجيل الدخول" />
        <LoginForm />
      </div>
      <div className={style.content}>
     
        <AuthImg showWelcome={true} desc="" desc2="" />
      </div>
    </div>
  );
};

export default Login;
/*
    <div className="row mb-5">
      <div className="col-12 col-md-7">
      
      </div>
      <div className="col-12 col-md-5">
    
      </div>
    </div>
*/
