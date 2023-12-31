import React, { useState } from "react";
import style from "./reg.module.css";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { request } from "../../components/utils/axios";
import Spinner from "../utils/Spinner/Spinner";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { IoIosArrowForward } from "react-icons/io";
const RegForm = ({ setShowModal }) => {
  const { t, i18n } = useTranslation();
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
  const formattedCart = {};
  if (cartItems) {
    cartItems.forEach((item, index) => {
      formattedCart[index] = { product_id: item.id };
    });
  }
  const lang = i18n.language;
  const sendCartItems = async (id) => {
    const res = await fetch(
      "https://almosawi.admin.technomasrsystems.com/api/cart/preOrder",
      {
        method: "POST",
        headers: {
          user: id,
          "Content-Type": "application/json",
          lang,
        },
        body: JSON.stringify({
          cart: formattedCart,
        }),
      }
    );
    const data = await res.json();
    return data;
  };

  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [tickMillUser, setTickmillUser] = useState(null);
  const [agree, setAgree] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const handleNameChange = (e) => {
    const inputText = e.target.value;

    if (/\d/.test(inputText)) {
      setNameError("Number are not allowed");
    } else {
      setNameError("");

      setFullName(inputText);
    }
  };
  const handleMobileNumberChange = (e) => {
    const inputNumber = e.target.value;

    // Check if the input is a valid positive number
    if (/^\d+$/.test(inputNumber)) {
      setMobileNumber(inputNumber);
      setMobileError("");
    } else {
      // Display an error message for invalid input
      setMobileNumber("");
      setMobileError("Please enter a valid mobile number.");
    }
  };
  const handleRadioChange = (event) => {
    setTickmillUser(event.target.value);
  };
  const handleChangePhone = (event) => {
    const input = event.target.value;
    const cleanedInput = input.replace(/\D/g, "");
    const isValidInput = /^[0-9]{10}$/.test(cleanedInput);
    mobileNumber(cleanedInput);
  };
  const handleRegster = (data) => {
    return request({ url: "/auth/register", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(handleRegster, {
    onSuccess: (data) => {
      if (data.data.status === "faild") {
        if (Object.keys(data.data.data).includes("email")) {
          toast.error(data.data.data.email[0]);
        } else {
          toast.error(data.data.data.phone[0]);
        }
      } else {
        Swal.fire({
          title: `${
            i18n.language === "ar"
              ? "تم ارسال طلبك بالنجاح و سوف يتم ارسال كلمة المرور علي البريد الالكتروني الذي قمت ب ادخالة"
              : "your request has been sent successfully and the password will be sent to the email address you entered"
          }`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        localStorage.setItem("userId", JSON.stringify(data?.data?.data?.id));
        sendCartItems(data?.data?.data?.id);
        setFullName("");
        setMobileNumber("");
        setEmail("");
        setCountry("");
        setTickmillUser(null);
        setAgree("");
      }
    },
  });
  const handleClick = async (e) => {
    e.preventDefault();
    if (
      fullName.trim() === "" ||
      mobileNumber.trim() === "" ||
      email.trim() === "" ||
      !country ||
      !tickMillUser ||
      !agree
    ) {
      toast.error(
        i18n.language === "ar" ? "جميع الحقول مطلوبة" : "all field are required"
      );
      return false;
    } else {
      const userData = {
        name: fullName,
        phone: mobileNumber,
        email,
        country,
        tikmill: tickMillUser,
      };
      await mutate(userData);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <form className="py-5 container px-md-5 mx-md-4">
          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label htmlFor="name" className={`d-block fw-bold shamel mb-1`}>
                {t("fullName")}
              </label>
              <input
                type="text"
                placeholder="Ex : ماجد الشافعي"
                id="name"
                className="inp"
                onChange={handleNameChange}
                value={fullName}
              />
              {nameError && <p className="my-2 error">{nameError}</p>}
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label htmlFor="number" className={`d-block fw-bold shamel mb-1`}>
                {t("phone")}
              </label>
              <input
                type="text"
                placeholder="Ex : 0102215"
                id="text"
                className="inp"
                min={0}
                onChange={handleMobileNumberChange}
                value={mobileNumber}
              />
              {mobileError && <p className="my-2 error">{mobileError}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label htmlFor="email" className={`d-block fw-bold  shamel mb-1`}>
                {t("emailTwo")}
              </label>
              <input
                type="email"
                placeholder="Ex : magedelshafey@gmail.com"
                id="email"
                className="inp"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <label htmlFor="city" className={`d-block fw-bold shamel mb-1`}>
                {t("country")}
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="inp"
                id="city"
              >
                <option value="">
                  {i18n.language === "ar"
                    ? "اختر دولتك"
                    : "choose your country"}
                </option>
                <option value="kuwait">الكويت</option>
                <option value="egypt">مصر</option>
                <option value="unitedArab">الامارات</option>
              </select>
            </div>
          </div>
          {+tickMillUser === 1 && (
            <div className="row mb-2">
              <div className="mb-3 col-12 col-md-6">
                <label
                  htmlFor="number"
                  className={`d-block fw-bold  shamel mb-1`}
                >
                  {i18n.language === "ar" ? "رقم حسابك" : "account number"}
                </label>
                <input
                  type="number"
                  id="number"
                  className="inp"
                  value={accountNum}
                  name="password"
                  onChange={(e) => setAccountNum(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="row mb-4 ">
            <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column gap-2 align-items-center">
              <label htmlFor="question" className={`fs15 `}>
                {t("customer")}{" "}
                <span className={`red  fw-bold text-uppercase`}>tickmill</span>
              </label>
              <div className="d-flex  align-items-center gap-5 justify-content-center">
                <div className="d-flex align-items-center">
                  <input
                    value={1}
                    onChange={handleRadioChange}
                    type="radio"
                    id="yes"
                    className={`${style.radio}`}
                    name="ask"
                  />
                  <label
                    htmlFor="yes"
                    className={`d-inline-block  mx-1 fw-bold`}
                  >
                    {t("yes")}
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="radio"
                    id="no"
                    className={`p-0 m-0  ${style.radio}`}
                    name="ask"
                    value={0}
                    onChange={handleRadioChange}
                  />
                  <label
                    htmlFor="no"
                    className={`p-0 my-0 mx-1 fw-bold  shamel`}
                  >
                    {t("no")}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column gap-2 align-items-center">
              <p htmlFor="conditions" className={`m-0 p-0 fw-bold  shamel`}>
                {t("terms")}
              </p>
              <div className="d-flex align-items-center">
                <input
                  value={agree}
                  onChange={() => setAgree(true)}
                  type="checkbox"
                  id="conditions"
                  className={`p-0 m-0  ${style.checkBox} ${
                    i18n.language === "ar" ? null : "mt-1"
                  }`}
                />
                <label
                  htmlFor="yes"
                  className={`p-0 d-inline-block my-0 mx-1 fw-bold   `}
                >
                  {t("agree")}
                </label>
                <span
                  onClick={() => setShowModal(true)}
                  className={`pointer m-0 p-0   fw-bold ${style.condition}`}
                >
                  {t("terms")}
                </span>
              </div>
            </div>
          </div>

          <button onClick={handleClick} className={`mb-3 ${style.btn}`}>
            {i18n.language === "ar" ? (
              <MdOutlineArrowBackIos size={20} />
            ) : (
              <IoIosArrowForward size={20} />
            )}
            <span>{t("next")}</span>
          </button>

          <p className=" my-3 mx-0 p-0 text-center">
            <span className={`${style.haveAccount}`}>{t("havAccount")} </span>{" "}
            <span
              onClick={() => navigate("/login")}
              className={`pointer  fw-bold ${style.reg}`}
            >
              {t("Authlogin")}
            </span>
          </p>
        </form>
      )}
    </>
  );
};

export default RegForm;
