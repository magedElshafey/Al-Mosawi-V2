import React from "react";
import style from "./accountDetails.module.css";
import avatar from "../../../assets/team-4.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
const AccountDetails = () => {
  return (
    <>
      <div className="mt-5 d-flex align-items-center align-items-md-start flex-column  gap-3 mb-3">
        <img
          className={style.avImg}
          loading="lazy"
          alt="profilePhoto/img"
          src={avatar}
        />
        <div className="d-flex flex-column gap-1">
          <div className="d-flex align-items-center gap-2 text-white">
            <p className="m-0 p-0 fw-bold">ماجد الشافعي</p>
            <IoMdArrowDropdown size={20} />
          </div>
          <p className="roboto text-white m-0 p-0">نوع الحساب MAX</p>
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <p className="text-white m-0 p-0 roboto fs20">رقم الحساب: </p>
        <p className="m-0 p-0 text-white fw-bold fs20">2528172</p>
        <p className="text-white m-0 p-0  roboto fs20">
          مبلغ الاستثمار الاول :{" "}
        </p>
        <p className="m-0 p-0 text-white fw-bold fs20">1500$</p>
        <p className="text-white m-0 p-0  roboto fs20">رقم الهاتف : </p>
        <p className="m-0 p-0 text-white fw-bold fs20">01022153359</p>
        <div className="d-flex justify-content-center justify-content-md-end">
          <button
            className={`${style.btn} d-flex justify-content-center align-items-center gap-2 text-white`}
          >
            <MdArrowBackIos size={20} />
            <p className="m-0 p-0 fw-bold">طلب تعديل</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
