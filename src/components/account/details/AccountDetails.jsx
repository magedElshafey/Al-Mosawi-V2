import React from "react";
import style from "./accountDetails.module.css";
import { Link } from "react-router-dom";
import BTN from "../../utils/btn/BTN";
import { useTranslation } from "react-i18next";
const AccountDetails = ({ accountDetails }) => {
  const [t] = useTranslation();
  return (
    <div className={`p-4 mb-3  ${style.mainContainer}`}>
      <p className="fw-bolder shamel fs26 d-inline-block mx-0 mt-0 p-0  mb-1">
        مرحبا ,{" "}
      </p>
      <p
        className={`m-0 shamel fs26 fw-bolder me-2 p-0 d-inline-block ${style.name}`}
      >
        {accountDetails.name}
      </p>
      <p className={` ${style.desc}  m-0 p-0 `}>
        يمكنك تغيير هذه المعلومات عن طريق التواصل مع{" "}
        <Link to="" className={`m-0 p-0 ${style.customerService}`}>
          {" "}
          خدمة العملاء
        </Link>
      </p>
      <div className="row mb-3 mt-5">
        <div className="col-12 col-md-6 mb-2 mb-md-0">
          <div>
            <span>{t("name")} : </span>{" "}
            <p className="shamel  m-0 d-inline-block p-0 fw-bold ">
              {accountDetails.name}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-2 mb-md-0">
          <div>
            <span> {t("phone")} : </span>{" "}
            <p className="shamel m-0 d-inline-block p-0 fw-bold">
              {accountDetails.number}
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div>
            <span> {t("accountNum")} : </span>{" "}
            <p className="shamel m-0 d-inline-block p-0 fw-bold ">
              {accountDetails.accountNum}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div>
            <span>{t("accountKind")} : </span>{" "}
            <p className="shamel m-0 d-inline-block p-0 fw-bold  text-uppercase">
              {accountDetails.accountType}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <span> {t("investment")} : </span>{" "}
        <p className="shamel m-0 d-inline-block p-0 fw-bold  text-uppercase">
          {accountDetails.amount}$
        </p>{" "}
        <Link to="/" className={`${style.customerService}`}>
          {t("edit")}
        </Link>
      </div>
      <div className="mb-2 mt-4">
        <BTN text={t("editInfo")} />
      </div>
    </div>
  );
};

export default AccountDetails;
