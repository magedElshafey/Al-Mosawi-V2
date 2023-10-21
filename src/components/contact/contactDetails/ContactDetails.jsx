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
      <div className="d-flex flex-column gap-1">
        {/*phone*/}
        <div className="d-flex gap-2 ">
          <img
            src={phoneImg}
            alt="contact_icon/img"
            loading="lazy"
            className={style.icon}
          />
          <div>
            <p className="shamel p-0 m-0 fw-bold">
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
                  <div key={index} className="d-flex gap-4 ">
                    <p className="m-0 p-0 ">{item.day} : </p>
                    <p className="red m-0 p-0 ">مغلق</p>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center gap-2  fs16 "
                  >
                    <p className="m-0 p-0 fs16 ">{item.day} : </p>
                    <p className="green m-0 p-0 fs16 ">{item.Start}</p>
                    <p className="m-0 p-0 fs16 roboto">
                      {i18n.language === "en" ? "Am" : "ص"}
                    </p>
                    <p className="m-0 p-0 fs16 roboto">-</p>
                    <p className="red m-0 p-0 fs16 roboto">{item.End}</p>
                    <p className="m-0 p-0 fs16 roboto">
                      <p className="m-0 p-0 fs16 roboto">
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
