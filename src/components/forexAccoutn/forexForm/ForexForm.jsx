import React, { useState } from "react";
import style from "./ForexForm.module.css";
import Upload from "./upload/Upload";
import BigBtn from "../../utils/bigBtn/BigBtn";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { request } from "../../utils/axios.js";
import Spinner from "../../utils/Spinner/Spinner";
import toast from "react-hot-toast";
import axios from "axios";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
const ForexForm = () => {
  const lang = window.localStorage.getItem("lang")
    ? JSON.parse(window.localStorage.getItem("lang"))
    : "ar";
  const { t, i18n } = useTranslation();
  const [id, setId] = useState(null);
  const [address, setAddress] = useState(null);
  const [passport, setPassport] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [successMessageID, setSuccessMessageID] = useState("");
  const [successMsgPassport, setSuccessMsgPassport] = useState("");
  const [successMsgAddrress, setSuccessPassport] = useState("");
  const handleIdChange = (e) => {
    setId(e.target.files[0]);
    setSuccessMessageID(
      i18n.language === "ar"
        ? "تم رفع الملف بنجاح!"
        : "File uploaded successfully!"
    );
  };
  const handlePassportChange = (e) => {
    setPassport(e.target.files[0]);
    setSuccessMsgPassport(
      i18n.language === "ar"
        ? "تم رفع الملف بنجاح!"
        : "File uploaded successfully!"
    );
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.files[0]);
    setSuccessPassport(
      i18n.language === "ar"
        ? "تم رفع الملف بنجاح!"
        : "File uploaded successfully!"
    );
  };
  const [accountKind, setAccountKind] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phoneNum.trim() === "" ||
      city.trim() === "" ||
      accountKind === "" ||
      !id ||
      !address ||
      !passport
    ) {
      toast.error(
        i18n.language === "ar" ? "جميع الحقول مطلوبة" : "all fields required"
      );
    } else {
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("family_name", lastName);
      formData.append("phone", phoneNum);
      formData.append("accountType", accountKind);
      formData.append("country", city);
      formData.append("personalCard", id);
      formData.append("addressConfirm", address);
      formData.append("passport", passport);
      formData.append("email", email);
      const res = await axios.post(
        "https://almosawi.admin.technomasrsystems.com/api/forexForm",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            lang,
          },
        }
      );
      if (res.data.status === "success") {
        toast.success(
          i18n.language === "en"
            ? "your message sent succfully"
            : "تم ارسال بياناتك بنجاح"
        );
        setFirstName("");
        setLastName("");
        setPhoneNum("");
        setCity("");
        setEmail("");
        setAccountKind("");
        setId("");
        setAddress("");
        setPassport("");
        setSuccessMessageID("");
        setSuccessMsgPassport("");
        setSuccessPassport("");
      } else {
        toast.error(
          i18n.language === "en"
            ? "there is an error occurred , please try again"
            : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
        );
      }
    }
  };
  return (
    <div className={`p-3 ${style.mainContainer}`}>
      <p className="fw-bold mx-0 p- shamel fs22 mb-2">{t("regForm")}</p>
      <p className="mx-0 p-0 mb-3">{t("regDesc")}</p>
      <p className="mx-0 mt-0 fw-bolder green shamel fs20">
        {i18n.language === "ar" ? "البيانات الشخصية" : "personal informations"}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="row mb-2">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="fs" className="fw-bold d-block shamel  mb-2">
              {t("fn")}
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="inp"
              type="text"
              id="fs"
              name="first_name"
              value={firstName}
            />
          </div>
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="ln" className="fw-bold d-block shamel  mb-2">
              {t("ln")}
            </label>
            <input
              className="inp"
              type="text"
              id="ln"
              name="family_name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="num" className="fw-bold shamel d-block  mb-2">
              {t("phone")}
            </label>
            <input
              name="phone"
              type="text"
              className="inp"
              onChange={(e) => setPhoneNum(e.target.value)}
              value={phoneNum}
            />
          </div>
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="email" className="fw-bold shamel d-block  mb-2">
              {t("emailTwo")}
            </label>
            <input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="inp"
              type="email"
              id="email"
              value={email}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="account" className="fw-bold shamel d-block  mb-2">
              {t("acountType")}
            </label>
            <select
              name="accountType"
              onChange={(e) => setAccountKind(e.target.value)}
              className="inp"
              id="account"
              value={accountKind}
              style={{ backgroundColor: "transparent" }}
            >
              <option value="">
                {i18n.language === "ar" ? "نوع الحساب" : "account type"}
              </option>
              <option value="max">
                {i18n.language === "ar" ? "حساب MAX" : "max account"}
              </option>
              <option value="main">
                {i18n.language === "ar" ? "الحسابات الأساسية" : "basic account"}
              </option>
            </select>
          </div>
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <label htmlFor="city" className="shamel fw-bold d-block  mb-2">
              {t("countryTwo")}
            </label>
            <input
              name="country"
              onChange={(e) => setCity(e.target.value)}
              className="inp"
              type="text"
              id="city"
              value={city}
            />
          </div>
        </div>
        <p className="mx-0  mt-4 mb-2 fw-bolder green shamel fs22">
          {t("reqPaper")}
        </p>

        <div className="my-2">
          <Upload
            name="personalCard"
            action={handleIdChange}
            label={t("id")}
            id="ID"
            successMessageID={successMessageID}
          />
          <Upload
            name="addressConfirm"
            action={handleAddressChange}
            label={t("address")}
            id="add"
            successMsgPassport={successMsgAddrress}
          />
          <Upload
            name="passport"
            action={handlePassportChange}
            label={t("passport")}
            id="passport"
            successMsgAddrress={successMsgPassport}
          />
          <button type="submit" className={style.btn}>
            {i18n.language === "ar" ? (
              <MdOutlineArrowBackIosNew size={20} />
            ) : (
              <IoIosArrowForward size={20} />
            )}

            <span className="mt-1">{t("sendNow")}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

// const handleIdChange = (event) => {
//   const file = event.target.files[0];
//   setId(file);
//   const reader = new FileReader();
//   reader.onloadend = () => {
//     setIdData(reader.result);
//   };
//   reader.readAsDataURL(file);
// };
// const handleChangeAddress = (event) => {
//   const file = event.target.files[0];
//   setAddress(file);
//   const reader = new FileReader();
//   reader.onloadend = () => {
//     setAddressData(reader.result);
//   };
//   reader.readAsDataURL(file);
// };
// const handleChangePassport = (event) => {
//   const file = event.target.files[0];
//   setPassport(file);
//   const reader = new FileReader();
//   reader.onloadend = () => {
//     setPassportData(reader.result);
//   };
//   reader.readAsDataURL(file);
// };
// const handleSendMsg = (data) => {
//   return request({ url: "/forexForm", method: "post", data });
// };
// const { isLoading, mutate } = useMutation(handleSendMsg, {
//   onSuccess: (data) => {
//     if (data?.data.status) {
//
//       console.log("this is the status", data.data);
//
//     }
//   },
//   onError: (data) => {
//
//   },
// });
// const handleClick = (e) => {
//   e.preventDefault();

//   else {
//     const contactData = {
//       first_name: firstName,
//       family_name: lastName,
//       phone: phoneNum,
//       accountType: accountKind,
//       country: city,
//       personalCard: idData,
//       addressConfirm: addressData,
//       passport: passportData,
//       email,
//     };
//     mutate(contactData);
//     console.log("this is data from create max account form", contactData);
//   }
// };

export default ForexForm;
