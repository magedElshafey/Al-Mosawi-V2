import React from "react";
import AuthImg from "../components/utils/authImg/AuthImg";
import ForgetDetails from "../components/forget/ForgetDetails";
import { useTranslation } from "react-i18next";
const ForgetPassword = () => {
  const [t] = useTranslation();
  return (
    <>
      <div className="d-none d-md-block">
        <div className="row">
          <div className="col-6">
            <ForgetDetails />
          </div>
          <div className=" col-6 ">
            <AuthImg
              showWelcome={false}
              desc={t("resetPass")}
              desc2={t("receiveMail")}
            />
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div className="row m-0 p-0">
          <div className="col-12 mb-3 m-0 p-0">
            <AuthImg
              showWelcome={false}
              desc={t("resetPass")}
              desc2={t("receiveMail")}
            />
          </div>
          <div className="col-12 mb-3">
            <ForgetDetails />
          </div>
        </div>
      </div>
    </>
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
/*
   <div className="row">
      <div className="d-none d-md-block">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
        
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
         
        </div>
      </div>
      <div className="d-md-none">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <AuthImg
            showWelcome={false}
            desc="استعادة كلمة المرور"
            desc2="سوف يصلك رابط انشاء كلمة مرور جديدة خلال ثوان يرجى مراجعة البريد الالكترونى"
          />
        </div>
        <div className="container col-12 col-md-6 mb-3 mb-md-0">
          <ForgetDetails />
        </div>
      </div>
    </div
*/
