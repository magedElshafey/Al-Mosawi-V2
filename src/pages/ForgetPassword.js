import React from "react";
import AuthImg from "../components/utils/authImg/AuthImg";
import ForgetDetails from "../components/forget/ForgetDetails";
import style from "../components/login/LoginForm.module.css";
const ForgetPassword = () => {
  return (
    <div className="d-flex align-items-centerjustify-content-between">
      <div className={`${style.content}`}>
        <ForgetDetails />
      </div>
      <div className={style.content}>
        <AuthImg
          showWelcome={false}
          desc="استعادة كلمة المرور"
          desc2="سوف يصلك رابط انشاء كلمة مرور جديدة خلال ثوان يرجى مراجعة البريد الالكترونى"
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
/*
   <div className="row align-items-center  mb-5">
      <div className="col-12 col-md-7">
     
      </div>
      <div className="col-12 col-md-5">
       
      </div>
    </div>
*/
