import React from "react";
import AuthImg from "../components/utils/authImg/AuthImg";
import AuthIntro from "../components/utils/authIntro/AuthIntro";
import LoginForm from "../components/login/LoginForm";
import { useTranslation } from "react-i18next";
const Login = ({ phoneNum, logo }) => {
  const [t] = useTranslation();
  return (
    <>
      <div className="d-none d-md-block">
        <div className="row justify-content-center">
          <div className="col-6 justify-content-center ">
            <div className="container mx-5 px-4">
              <AuthIntro title={t("Authlogin")} />
              <LoginForm />
            </div>
          </div>
          <div className="col-6">
            <AuthImg
              logo={logo}
              phoneNum={phoneNum}
              showWelcome={true}
              desc=""
              desc2=""
            />
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div className="row m-0 p-0">
          <div className="col-12 mb-3 m-0 p-0">
            <AuthImg
              logo={logo}
              phoneNum={phoneNum}
              showWelcome={true}
              desc=""
              desc2=""
            />
          </div>
          <div className="col-12">
            <AuthIntro title={t("Authlogin")} />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
