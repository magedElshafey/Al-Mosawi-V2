import React, { useState } from "react";
import style from "./contactForm.module.css";
import BigBtn from "../../utils/bigBtn/BigBtn";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { request } from "../../utils/axios.js";
import Spinner from "../../utils/Spinner/Spinner";
import toast from "react-hot-toast";
const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [msg, setMsg] = useState("");
  // validation

  // name
  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    if (!/\d/.test(inputValue)) {
      setName(inputValue);
    } else {
      setNameError(
        i18n.language === "en"
          ? "can not type number on name field"
          : "لا يمكن كتابة ارقام في حقل الاسم"
      );
    }
  };

  // emial
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const newIsValid = validateEmail(newEmail);
    setEmail(newEmail);
    setIsValidEmail(newIsValid);
  };
  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  // phone

  const handleChangePhone = (event) => {
    const input = event.target.value;
    const cleanedInput = input.replace(/\D/g, "");
    const isValidInput = /^[0-9]{10}$/.test(cleanedInput);
    setPhone(cleanedInput);
    setIsValidPhone(isValidInput);
  };

  // country

  const handleChangeCountry = (event) => {
    const inputValue = event.target.value;
    if (!/\d/.test(inputValue)) {
      setCity(inputValue);
    } else {
      setCityError(
        i18n.language === "en"
          ? "can not type number on name field"
          : "لا يمكن كتابة ارقام في حقل الاسم"
      );
    }
  };

  // send data to api
  const handleSendMsg = (data) => {
    return request({ url: "/sendContactMessage", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(handleSendMsg, {
    onSuccess: (data) => {
      if (data?.data.status) {
        toast.success(
          i18n.language === "en"
            ? "your message sent succfully"
            : "تم ارسال رسالتك بنجاح"
        );
        setName("");
        setPhone("");
        setCity("");
        setMsg("");
        setEmail("");
      }
    },
    onError: () => {
      toast.error(
        i18n.language === "en"
          ? "there is an error occurred , please try again"
          : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
      );
    },
  });
  const handleClick = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      city.trim() === ""
    ) {
      return;
    } else {
      const contactData = { name, phone, country: city, content: msg, email };
      mutate(contactData);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={`p-4 ${style.mainContainer}`}>
          <p className="fw-bolder mb-2 p-0 mx-0 shamel fs28">{t("glade")}</p>
          <p className="mb-2 mx-0 p-0 w-75">
            إذا كان لديك أي استفسارات أو تعليقات، يرجى إرسالها إليناعبر نموذج
            الاتصال وسيتم الرد بأسرع وقت
          </p>
          <form>
            <div className="row my-4">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <label
                  htmlFor="name"
                  className="fw-bolder shamel  d-block mb-1 "
                >
                  {t("name")}
                </label>
                <input
                  value={name}
                  onChange={handleNameChange}
                  type="text"
                  className="inp"
                  id="name"
                />
                {nameError && <p className="p-0 my-2 error">{nameError}</p>}
              </div>
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <label
                  htmlFor="email"
                  className="shamel fw-bolder d-block mb-1 "
                >
                  {t("email")}
                </label>
                <input
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  className="inp"
                  id="email"
                />
                {!isValidEmail && i18n.language === "en" && email !== "" && (
                  <p className="p-0 my-2 error">not valid email</p>
                )}
                {!isValidEmail && i18n.language === "ar" && email !== "" && (
                  <p className="p-0 my-2 error">
                    هذا البريد الالكتروني غير صالح
                  </p>
                )}
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <label htmlFor="num" className="shamel fw-bolder d-block mb-1 ">
                  {t("phone")}
                </label>
                <input
                  value={phone}
                  onChange={handleChangePhone}
                  type="text"
                  className="inp"
                  id="num"
                />
              </div>
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <label
                  htmlFor="city"
                  className="shamel fw-bolder d-block mb-1 "
                >
                  {t("country")}
                </label>
                <input
                  value={city}
                  onChange={handleChangeCountry}
                  type="text"
                  className="inp"
                  id="city"
                />
                {cityError && <p className="p-0 my-2 error">{cityError}</p>}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="msg" className="shamel d-block mb-1 fw-bolder ">
                {t("sendMsg")}
              </label>
              <textarea className="area"></textarea>
            </div>
            <BigBtn action={handleClick} text={t("sendNow")} />
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
