import React from "react";
import style from "./contactDetails.module.css";
import phoneImg from "../../../assets/contactPage/phone.png";
import whatsImg from "../../../assets/contactPage/whats.png";
import addressImg from "../../../assets/contactPage/location.png";
import { useTranslation } from "react-i18next";
import clock from "../../../assets/contactPage/clock.png";
const ContactDetails = ({ appointment, phone, hotLine, address }) => {
  const { i18n } = useTranslation();
  return (
    <div className={`px-3 py-2 ${style.mainContainer}`}>
      <div>
        {/*phone*/}
        <div className="d-flex gap-2 ">
          <img
            src={phoneImg}
            alt="contact_icon/img"
            loading="lazy"
            className={style.icon}
          />
          <div>
            <p className="p-0 m-0 mb-3 fw-bold">
              {i18n.language === "en" ? "for contact" : "للاتصال"}
            </p>
            <p dangerouslySetInnerHTML={{ __html: phone }}></p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <img
            src={whatsImg}
            alt="contact_icon/img"
            loading="lazy"
            className={style.icon}
          />
          <div>
            <p className="shamel p-0 m-0 fw-bold">
              {i18n.language === "en" ? "whatsapp" : "رقم خدمة العملاء واتساب"}
            </p>
            <p dangerouslySetInnerHTML={{ __html: hotLine }}></p>
          </div>
        </div>
        <div className="d-flex gap-2 ">
          <img
            src={addressImg}
            alt="contact_icon/img"
            loading="lazy"
            className={style.icon}
          />
          <div>
            <p className=" p-0 m-0 fw-bold">
              {i18n.language === "en" ? "location" : "العنوان"}
            </p>
            <p dangerouslySetInnerHTML={{ __html: address }}></p>
          </div>
        </div>

        <div className="d-flex gap-2 ">
          <img
            alt="appointment_icon / img"
            loading="lazy"
            src={clock}
            className={style.icon}
          />
          <div>
            <p className="p-0 m-0 fw-bold shamel">
              {i18n.language === "en" ? "times of work" : "مواعيد العمل"}
            </p>
            <div className="mt-0">
              {appointment.map((item, index) =>
                item.value === "0" ? (
                  <div key={index} className="d-flex mb-2 ">
                    <p className={`m-0 p-0  ${style.day}`}>{item.day} : </p>
                    <p className="red m-0 p-0 text-center ">
                      {i18n.language === "ar" ? "مغلق" : "closed"}
                    </p>
                  </div>
                ) : (
                  <div key={index} className="d-flex  mb-2  fs16 ">
                    <p className={`m-0 p-0  ${style.day}`}>{item.day} : </p>
                    <p className="green m-0 p-0">{item.Start}</p>
                    <p className="m-0 p-0 mx-1 ">
                      {i18n.language === "en" ? "Am" : "ص"}
                    </p>
                    <p className="m-0 p-0 mx-1">-</p>
                    <p className="red m-0 p-0  ">{item.End}</p>
                    <p className="m-0 p-0 fs16 ">
                      <p className="m-0 p-0 fs16 mx-1 ">
                        {i18n.language === "en" ? "Pm" : "م"}
                      </p>
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
/*
   <div
                  className="fs18 mt-2 roboto d-flex gap-1 align-items-center "
                  key={index}
                >
                 
                  <p className="m-0 p-0">
                   
                   
                    <span>{item.day === "الجمعة" ? null : "-"}</span>{" "}
                  
                
                  </p>
                </div>
*/
