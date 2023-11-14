import React from "react";
import AuthImg from "../components/utils/authImg/AuthImg";
import { useTranslation } from "react-i18next";
import OTPDetails from "../components/otp/OTPDetails";
const OTP = ({ phoneNum }) => {
  const [t] = useTranslation();
  return (
    <div>
      <div className="d-none d-md-block">
        <div className="row">
          <div className="col-6">
            <OTPDetails />
          </div>
          <div className="col-6">
            <AuthImg
              showWelcome={false}
              desc={t("resetPass")}
              desc2={t("receiveMail")}
              phoneNum={phoneNum}
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
              phoneNum={phoneNum}
            />
          </div>
          <div className="col-12 mb-3">
            <OTPDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
