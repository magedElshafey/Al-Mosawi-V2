import React from "react";
import style from "./contactus.module.css";
import { BsFillTelephoneFill, BsEnvelopePaper } from "react-icons/bs";
const ContactUs = () => {
  return (
    <div
      className={`my-3 mx-auto p-3 ${style.mainContainer} d-flex flex-column align-items-center justify-content-center gap-2`}
    >
      <p className="fs30 fw-bold text-white m-0 p-0">تواصل معنا</p>
      <p className="fw-bold m-0 p-0 whiteGreen fs36">لتقديم المساعدة </p>
      <div className="d-flex align-items-center gap-3 whiteGreen fw-bold fs-4">
        <p className="mx-0 mb-0 mt-1 p-0 fs36">25281720</p>
        <BsFillTelephoneFill className="fs36" />
      </div>
      <div className="d-flex justify-content-center">
        <BsEnvelopePaper className={style.paperIcon} size={50} />
      </div>
    </div>
  );
};

export default ContactUs;
