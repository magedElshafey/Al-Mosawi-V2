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
  const handleRegster = (data) => {
    return request({ url: "/auth/register", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(handleRegster, {
    onSuccess: (data) => {
      if (data.data.status === "faild") {
        toast.error(
          i18n.language === "en"
            ? "there is an error occurred , please try again"
            : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
        );
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
        setTickmillUser("");
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
      tickMillUser === null ||
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
        <form className="py-5 container">
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
                type="number"
                placeholder="Ex : 0102215"
                id="number"
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
                    ? "اختر دلولتك"
                    : "choose your country"}
                </option>
                <option value="kuwait">الكويت</option>
                <option value="egypt">مصر</option>
                <option value="unitedArab">الامارات</option>
              </select>
            </div>
          </div>
          <div className="row mt-5 mb-4 ">
            <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column gap-2">
              <label htmlFor="question" className={`shamel fs15 `}>
                {t("customer")}{" "}
                <span className={`red  fw-bold text-uppercase`}>tikmill</span>
              </label>
              <div className="d-flex gap-5  align-items-center gap-3">
                <div>
                  <input
                    value={1}
                    onChange={handleRadioChange}
                    type="radio"
                    id="yes"
                    className={`p-0 m-0  ${style.radio}`}
                    name="ask"
                  />
                  <label
                    htmlFor="yes"
                    className={`p-0 my-0 mx-1 fw-bold  shamel`}
                  >
                    {t("yes")}
                  </label>
                </div>
                <div>
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
            <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column gap-2">
              <p htmlFor="conditions" className={`m-0 p-0 fw-bold  shamel`}>
                {t("terms")}
              </p>
              <div>
                <input
                  value={agree}
                  onChange={() => setAgree(true)}
                  type="checkbox"
                  id="conditions"
                  className={`p-0 m-0  ${style.checkBox}`}
                />
                <label
                  htmlFor="yes"
                  className={`p-0 my-0 mx-1 fw-bold  shamel`}
                >
                  {t("agree")}
                </label>
                <span
                  onClick={() => setShowModal(true)}
                  className={`pointer m-0 p-0 shamel  fw-bold ${style.condition}`}
                >
                  {t("terms")}
                </span>
              </div>
            </div>
          </div>
          <button onClick={handleClick} className={`book mb-3 ${style.btn}`}>
            <MdOutlineArrowBackIos size={20} />
            <span>{t("next")}</span>
          </button>

          <p className=" my-3 mx-0 p-0">
            <span className={`tahoma ${style.haveAccount}`}>
              {t("havAccount")}{" "}
            </span>{" "}
            <span
              onClick={() => navigate("/login")}
              className={`pointer tahoma fw-bold ${style.reg}`}
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
