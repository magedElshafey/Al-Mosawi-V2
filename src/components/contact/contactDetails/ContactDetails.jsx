import React from "react";
import style from "./contactDetails.module.css";
const ContactDetails = ({ details, appointment }) => {
  return (
    <div className={`px-3 py-2 ${style.mainContainer}`}>
      <div className="d-flex flex-column gap-1">
        {details.contact.map((item, index) => (
          <div className="d-flex gap-3" key={index}>
            <img
              src={item.img}
              alt="contact_icon/img"
              loading="lazy"
              className={style.icon}
            />
            <div>
              <p className="shamel p-0 m-0 fw-bold">{item.title}</p>
              <p
                className="green  mt-1 fw-bold"
                dangerouslySetInnerHTML={{ __html: item.details }}
              ></p>
            </div>
          </div>
        ))}
        <div className="d-flex gap-3">
          <img
            alt="appointment_icon / img"
            loading="lazy"
            src={appointment.img}
            className={style.icon}
          />
          <div>
            <p className="p-0 m-0 fw-bold shamel">{appointment.title}</p>
            <div className="mt-0">
              {appointment.details.map((item, index) =>
                item.day === "الجمعة" ? (
                  <div key={index} className="d-flex gap-4 mt-2">
                    <p className="m-0 p-0 ">{item.day} : </p>
                    <p className="red m-0 p-0 ">مغلق</p>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center gap-2 mt-2 roboto fs16 roboto"
                  >
                    <p className="m-0 p-0 fs16 roboto">{item.day} : </p>
                    <p className="green m-0 p-0 fs16 roboto">{item.from}</p>
                    <p className="m-0 p-0 fs16 roboto">{item.a_m}</p>
                    <p className="m-0 p-0 fs16 roboto">-</p>
                    <p className="red m-0 p-0 fs16 roboto">{item.to}</p>
                    <p className="m-0 p-0 fs16 roboto">{item.p_m}</p>
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
