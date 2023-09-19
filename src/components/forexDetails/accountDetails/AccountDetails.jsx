import React from "react";
import style from "./accountDetails.module.css";
import avatar from "../../../assets/team-4.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
const AccountDetails = () => {
  const [t] = useTranslation();
  return (
    <>
      <div className="d-flex align-items-center align-items-md-start flex-column  gap-3 mb-4">
        <img
          className={style.avImg}
          loading="lazy"
          alt="profilePhoto/img"
          src={avatar}
        />
        <div className="d-flex flex-column  gap-1">
          <div className="d-flex align-items-center gap-2 text-white">
            <p className="m-0 p-0 fw-bold shamel">ماجد الشافعي</p>
            <IoMdArrowDropdown size={20} />
          </div>
          <p className="text-white m-0 p-0"> {t("accountKind")} MAX</p>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-6 col-md-12 d-flex  gap-2 d-md-block">
          <p className=" text-white mx-0 mt-0 mb-1 p-0 ">{t("accountNum")}: </p>
          <p className=" m-0 p-0 text-white fw-bold mb-2">2528172</p>
        </div>
        <div className="col-6 col-md-12 d-flex   d-md-block">
          <p className="text-white  mx-0 mt-0 mb-1 m-0 p-0 ">
            {" "}
            {t("investment")} :{" "}
          </p>
          <p className="m-0 p-0 text-white fw-bold mb-2">1500$</p>
        </div>
      </div>
      <div className="row justify-content- align-items-center ">
        <div className="col-12 d-flex   d-md-block">
          <p className="text-white  mx-0 mt-0 mb-1 p-0 "> {t("phone")}</p>
          <p className="m-0 p-0 text-white fw-bold mb-2">:01022153359</p>
        </div>
        <div className="col-12 d-flex  gap-2 d-md-block">
          <button
            className={`mt-2 book ${style.btn} d-flex justify-content-center align-items-center  gap-2 text-white`}
          >
            <MdArrowBackIos size={20} />
            <p className="m-0 p-0 fw-bold">فتح حساب تداول</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
