import React from "react";
import style from "./accountDetails.module.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
const AccountDetails = ({ accountDetails }) => {
  return (
    <div className={`p-3 mb-4 ${style.mainContainer}`}>
      <p className="fw-bolder d-inline-block mx-0 mt-0 p-0 fs48 mb-2">
        مرحبا ,{" "}
      </p>
      <p className={`m-0 fs48 fw-bolder me-2 p-0 d-inline-block ${style.name}`}>
        {accountDetails.name}
      </p>
      <p className={`roboto fs22 fw-normal  ${style.desc} mx-0 mt-0 mb-4 p-0 `}>
        يمكنك تغيير هذه المعلومات عن طريق التواصل مع{" "}
        <Link to="" className={`m-0 p-0 ${style.customerService}`}>
          {" "}
          خدمة العملاء
        </Link>
      </p>
      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div>
            <span className="roboto fs18">الاسم : </span>{" "}
            <p className="fs18 m-0 d-inline-block p-0 fw-bold ">
              {accountDetails.name}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div>
            <span className="roboto fs18">رقم الهاتف : </span>{" "}
            <p className="fs18 m-0 d-inline-block p-0 fw-bold">
              {accountDetails.number}
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div>
            <span className="roboto fs18">رقم الحساب : </span>{" "}
            <p className="fs18 m-0 d-inline-block p-0 fw-bold ">
              {accountDetails.accountNum}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div>
            <span className="roboto fs18">نوع الحساب : </span>{" "}
            <p className="fs18 m-0 d-inline-block p-0 fw-bold  text-uppercase">
              {accountDetails.accountType}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <span className="roboto fs18"> مبلغ الاسثمار الأول : </span>{" "}
        <p className="fs18 m-0 d-inline-block p-0 fw-bold  text-uppercase">
          {accountDetails.amount}$
        </p>{" "}
        <Link to="/" className={style.customerService}>
          تعديل
        </Link>
      </div>
      <div className="mb-3">
        <button
          className={`d-flex align-items-center justify-content-center gap-2 text-white ${style.btn}`}
        >
          <MdOutlineArrowBackIos size={20} />
          <span className="mt-1">طلب تعديل المعلومات </span>
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;
