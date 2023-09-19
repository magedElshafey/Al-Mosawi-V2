import React from "react";
import style from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
const LoginForm = () => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="py-3 container">
      <div className="mb-4">
        <label htmlFor="email" className="d-block fw-bold mb-1 shamel ">
          {t("emailTwo")}
        </label>
        <input className={`inp ${style.inpWidth}`} type="email" id="email" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="d-block fw-bold mb-1 shamel">
          {t("pass")}
        </label>
        <input
          className={`inp ${style.inpWidth}`}
          type="password"
          id="password"
        />
      </div>
      <div
        className={`mb-4 align-items-center  mb-3 d-flex gap-5 `}
      >
        <div>
          <input
            type="checkbox"
            id="rem"
            className={`p-0 my-0 mx-2  ${style.checkBox}`}
          />
          <label htmlFor="rem" className={` fw-bold  shamel `}>
            {t("remember")}
          </label>
        </div>
        <Link to="/forget" className={`fw-bold shamel  ${style.links}`}>
          {t("resetPass")}
        </Link>
      </div>
      <button
        onClick={() => navigate("/forex-account/details")}
        className={`book mb-3 ${style.btn}`}
      >
        <MdOutlineArrowBackIos size={20} />
        <span>دخول</span>
      </button>

      <p className=" my-2 mx-0 p-0 fw-bold">
        <span className={`tahoma fs2 ${style.haveAccount}`}>
          {t("havAccount")}
        </span>{" "}
        <span
          onClick={() => navigate("/reg")}
          className={`tahoma pointer fs2 ${style.reg}`}
        >
          {t("createAccount")}
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
