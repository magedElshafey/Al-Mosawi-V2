import React from "react";
import style from "./accountDetails.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleRequest } from "../../../Redux/afilator";
import toast from "react-hot-toast";
const AccountDetails = ({ data, lang }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { requestSent } = useSelector((state) => state.afilator);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const { t, i18n } = useTranslation();
  const handleAfilate = async () => {
    const res = await fetch(
      "https://almosawi.admin.technomasrsystems.com/api/affiliate/store",
      {
        method: "POST",
        headers: {
          userId,
          lang,
          "Content-Type": "application/json",
        },
        body: "",
      }
    );
    const data = await res.json();
    console.log("this is the data from afilate", data);
    if (data.status) {
      toast.success(data.message);
      dispatch(handleRequest());
    } else {
      toast.error(data.message);
    }
  };
  return (
    <>
      <div className="d-flex align-items-center align-items-md-start flex-column  gap-2 mb-3">
        {data.profile_photo ? (
          <img
            className={style.avImg}
            loading="lazy"
            alt="profilePhoto/img"
            src={data.profile_photo}
          />
        ) : null}

        <div className="d-flex flex-column gap-1">
          <div className="d-flex align-items-center gap-1 text-white">
            <p className="m-0 p-0 fw-bold shamel">{data.name}</p>
            <IoMdArrowDropdown size={20} />
          </div>
          {data.account_type ? (
            <p className="text-white m-0 p-0">
              {t("accountKind")} : {data.account_type}
            </p>
          ) : null}
        </div>
      </div>
      <div className="row">
        {data.account_number ? (
          <div
            className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className=" text-white mx-0 mt-0 mb-1 p-0 ">
              {t("accountNum")}:{" "}
            </p>
            <p className=" m-0 p-0 text-white fw-bold mb-2">
              {data.account_number}
            </p>
          </div>
        ) : null}
        {data.invest_amount ? (
          <div
            className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
              i18n.language === "ar" ? "" : "text-start"
            }`}
          >
            <p className="text-white  mx-0 mt-0 mb-1 m-0 p-0 ">
              {" "}
              {t("investment")} :{" "}
            </p>
            <p className="m-0 p-0 text-white fw-bold mb-2">
              {data.invest_amount}
            </p>
          </div>
        ) : null}
      </div>
      <div className="row ">
        <div
          className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          <p className="text-white  mx-0 mt-0 mb-1 p-0 "> {t("phone")} :</p>
          <p className="m-0 p-0 text-white fw-bold mb-2">{data.phone}</p>
        </div>
        <div
          className={`col-6 col-md-12 d-flex gap-2 d-md-block ${
            i18n.language === "ar" ? "" : "text-start"
          }`}
        >
          <button
            onClick={() => navigate("/forex-account")}
            className={`mt-2  ${style.btn} d-flex justify-content-center align-items-center  gap-1 text-white`}
          >
            <MdArrowBackIos size={20} />
            <p className="m-0 p-0 ">
              {i18n.language === "ar"
                ? "طلب فتح حساب تداول"
                : "Request to open a trading account"}
            </p>
          </button>
          {requestSent ? null : (
            <button
              onClick={handleAfilate}
              className={`mt-2  ${style.btn} d-flex justify-content-center align-items-center  gap-1 text-white`}
            >
              <MdArrowBackIos size={20} />
              <p className="m-0 p-0 ">
                {i18n.language === "ar"
                  ? "انضم الي فريق التسويق الخاص بنا"
                  : "Join our marketing team"}
              </p>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
