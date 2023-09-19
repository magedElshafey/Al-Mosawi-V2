import React from "react";
import NewPasswordForm from "../components/newPassword/NewPasswordForm";
import AuthImg from "../components/utils/authImg/AuthImg";
const NewPassword = () => {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="row">
          <div className="col-6">
            <NewPasswordForm />
          </div>
          <div className="col-6">
            <AuthImg showWelcome={true} desc="" desc2="" />
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div className="row m-0 p-0">
          <div className="col-12 mb-3 m-0 p-0">
            <AuthImg showWelcome={true} desc="" desc2="" />
          </div>
          <div className="col-12 mb-3">
            <NewPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
/*
   <div className="mb-5 d-flex align-items-centerjustify-content-between">
      <div className={`${style.content}`}>
       
      </div>
      <div className={style.content}>
        <AuthImg showWelcome={true} />
      </div>
    </div>
*/
