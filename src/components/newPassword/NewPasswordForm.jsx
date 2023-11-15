import React, { useState } from "react";
import style from "./newPassword.module.css";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useMutation } from "react-query";
import { request } from "../utils/axios";
import Spinner from "../utils/Spinner/Spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const NewPasswordForm = () => {
  const { i18n, t } = useTranslation();
  const naviagte = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const account = JSON.parse(localStorage.getItem("forgetEmail"));

  const handleCode = (data) => {
    return request({ url: "/auth/reset/password", method: "POST", data });
  };
  const { isLoading, mutate } = useMutation(handleCode, {
    onSuccess: (data) => {
      console.log("this is the data", data.data);
      if (data.data.status) {
        toast.success(data.data.message);
        naviagte("/login");
      } else {
        toast.error(data.data.message);
      }
    },
  });
  const handleClick = async () => {
    if (!password.trim() || !confirm.trim()) {
      toast.error(
        i18n.language === "ar"
          ? "لا يمكن ترك الباسورد فارغا"
          : "password required"
      );
    } else {
      const userData = { account, password, password_confirmation: confirm };
      await mutate(userData);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container my-5 pt-4">
          <p
            className={`fw-bold shamel fs20 mx-0 my-3 pb-3 px-0 ${style.textContainer}`}
          >
            {t("createNewPass")}
          </p>
          <div className="my-4">
            <label
              htmlFor="passowrd"
              className="d-block fw-bold mb-1 shamel fs18"
            >
              {t("newPassword")}
            </label>
            <input
              className={`inp ${style.inpWidth}`}
              type="password"
              id="passowrd"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="confirm"
              className="d-block fw-bold mb-1 shamel fs18"
            >
              {t("confirmNewPass")}
            </label>
            <input
              className={`inp ${style.inpWidth}`}
              type="password"
              id="confirm"
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <button onClick={handleClick} className={`book ${style.btn}`}>
            <MdOutlineArrowBackIos size={20} />
            <span className="mt-1">{t("createNewPass")}</span>
          </button>

          <p className="mt-3 mx-0 p-0 fw-bold">
            <span className={`${style.haveAccount} tahoma `}>
              {t("havAccount")}
            </span>{" "}
            <span className={`tahoma  ${style.reg}`}>{t("createAccount")}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default NewPasswordForm;
