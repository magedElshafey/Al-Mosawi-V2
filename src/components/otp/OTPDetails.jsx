import React, { useState } from "react";
import OtpInput from "react-otp-input";
import style from "./details.module.css";
import { useTranslation } from "react-i18next";
const OTPDetails = () => {
  const { i18n } = useTranslation();
  const [otp, setOtp] = useState("");

  return (
    <div className="container mt-5  pt-4 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column align-items-center gap-3 mt-5 pt-5">
        <h2>{i18n.language === "ar" ? "التحقق من OTP" : "OTP Verification"}</h2>
        <OtpInput
          inputStyle="otp-input"
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <button className={style.btn}>
          {i18n.language === "ar" ? "ارسال الكود" : "Verify OTP"}
        </button>
      </div>
    </div>
  );
};

export default OTPDetails;
