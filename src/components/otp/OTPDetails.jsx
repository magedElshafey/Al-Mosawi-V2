import React, { useState } from "react";
import OtpInput from "react-otp-input";
import style from "./details.module.css";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { request } from "../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../utils/Spinner/Spinner";
const OTPDetails = () => {
  const { i18n } = useTranslation();
  const naviagte = useNavigate();
  const [otp, setOtp] = useState("");
  const isArabic = (text) => {
    const arabicRegex = /[\u0600-\u06FF]/;
    return arabicRegex.test(text);
  };
  const account = JSON.parse(localStorage.getItem("forgetEmail"));
  const handleCode = (data) => {
    return request({ url: "/auth/check/code", method: "POST", data });
  };
  const { isLoading, mutate } = useMutation(handleCode, {
    onSuccess: (data) => {
      console.log("this is the data", data.data);
      if (data.data.status) {
        toast.success(data.data.message);
        naviagte("/new-password");
      } else {
        toast.error(data.data.message);
      }
    },
  });
  const handleClick = async () => {
    if (!otp.trim()) {
      toast.error(
        i18n.language === "ar" ? "لا يمكن ترك الكود فارغا" : "code required"
      );
    } else {
      const userData = { account, code: otp };
      await mutate(userData);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mt-5  pt-4 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center gap-3 mt-5 pt-5">
            <h2>
              {i18n.language === "ar" ? "التحقق من OTP" : "OTP Verification"}
            </h2>
            <div dir="ltr">
              <OtpInput
                inputStyle="otp-input"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props, index) => (
                  <input
                    {...props}
                    key={index}
                    style={{
                      direction: "ltr", // Force LTR for numbers
                    }}
                  />
                )}
              />
            </div>
            <button onClick={handleClick} className={style.btn}>
              {i18n.language === "ar" ? "ارسال الكود" : "Verify OTP"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OTPDetails;
