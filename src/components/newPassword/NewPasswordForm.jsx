import React from "react";
import style from "./newPassword.module.css";
import BTN from "../utils/btn/BTN";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos } from "react-icons/md";
const NewPasswordForm = () => {
  const [t] = useTranslation();
  return (
    <div className="container my-5 pt-4">
      <p
        className={`fw-bold shamel fs20 mx-0 my-3 pb-3 px-0 ${style.textContainer}`}
      >
        {t("createNewPass")}
      </p>
      <div className="my-4">
        <label htmlFor="passowrd" className="d-block fw-bold mb-1 shamel fs18">
          {t("newPassword")}
        </label>
        <input
          className={`inp ${style.inpWidth}`}
          type="password"
          id="passowrd"
        />
      </div>
      <div className="my-4">
        <label htmlFor="confirm" className="d-block fw-bold mb-1 shamel fs18">
          {t("confirmNewPass")}
        </label>
        <input
          className={`inp ${style.inpWidth}`}
          type="password"
          id="confirm"
        />
      </div>
      <button className={`book ${style.btn}`}>
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
  );
};

export default NewPasswordForm;
