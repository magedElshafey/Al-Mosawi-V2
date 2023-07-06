import React from "react";
import style from "./Booking.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Booking = () => {
  const navigate = useNavigate();
  return (
    <div className={`mx-auto ${style.mainContainer} d-flex flex-column gap-3`}>
      <p className="m-0 p-0 fw-bold fs28 text-white">حجز استشارة</p>
      <button onClick={() => navigate("/booking")} className={style.btn}>
        <MdArrowBackIosNew />
        <span className="text-white mt-1 ">احجز</span>
      </button>
    </div>
  );
};

export default Booking;
