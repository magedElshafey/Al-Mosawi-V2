import React from "react";
import style from "../components/login/LoginForm.module.css";
import NewPasswordForm from "../newPassword/NewPasswordForm";
import AuthImg from "../components/utils/authImg/AuthImg";

const NewPassword = () => {
  return (
    <div className="mb-5 d-flex align-items-centerjustify-content-between">
      <div className={`${style.content}`}>
        <NewPasswordForm />
      </div>
      <div className={style.content}>
        <AuthImg showWelcome={true} />
      </div>
    </div>
  );
};

export default NewPassword;
