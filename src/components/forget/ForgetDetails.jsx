import React, { useState } from "react";
import style from "./forget.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { request } from "../utils/axios";
import Spinner from "../utils/Spinner/Spinner";
const ForgetDetails = () => {
  const { t, i18n } = useTranslation();
  const naviagte = useNavigate();
  const [email, setEmail] = useState("");
  const foreget = (data) => {
    return request({ url: "/auth/forget/password", method: "POST", data });
  };
  const { isLoading, mutate } = useMutation(foreget, {
    onSuccess: (data) => {
      if (data.data.status) {
        localStorage.setItem("forgetEmail", JSON.stringify(email));
        toast.success(data.data.message);
        naviagte("/otp");
      } else {
        toast.error(data.data.message);
      }
    },
  });
  const handleClick = async () => {
    if (!email.trim()) {
      toast.error(
        i18n.language === "ar" ? "لا يمكن ترك الايميل فارغا" : "email required"
      );
    } else {
      const userData = { account: email };
      await mutate(userData);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="pt-3 pt-md-5 mt-5 container">
          <div
            className={`pb-3 mb-4 ${style.titleContainer} d-flex justify-content-between align-items-center`}
          >
            <p className={` fw-bold m-0 p-0 shamel fs22`}>{t("resetPass")}</p>
            <div
              onClick={() => naviagte(-1)}
              className=" book  d-none d-md-block pointer d-flex align-items-center gap-2"
            >
              <span className="mt-1">{t("back")}</span>
              {i18n.language === "ar" ? (
                <MdOutlineArrowBackIosNew className="fs18" />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
          </div>
          <p className={`mx-0 mt-0 mb-2`}>{t("typeMail")}</p>
          <div className="my-4">
            <label htmlFor="email" className="d-block mb-1 fw-bold shamel fs18">
              {t("emailTwo")}
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={`inp tahome ${style.inpWidth}`}
              placeholder="examel@example.com"
            />
          </div>
          <button onClick={handleClick} className={`book mb-3 ${style.btn}`}>
            <MdOutlineArrowBackIos />
            <span>{t("send")} </span>
          </button>

          <div className="d-flex  gap-1  align-items-center">
            <span className={`ms-2 text-center text-black-50 tahoma `}>
              {t("havAccount")}
            </span>
            <Link to="/reg" className={` tahoma  ${style.reg}`}>
              {t("createAccount")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgetDetails;
