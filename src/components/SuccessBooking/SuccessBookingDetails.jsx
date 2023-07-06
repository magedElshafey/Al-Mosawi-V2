import React from "react";
import style from "./SuccessBooking.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
const SuccessBookingDetails = () => {
  const bookedTime = JSON.parse(localStorage.getItem("appoitment"));

  return (
    <div>
      <h3 className={`fw-bolder ${style.text} d-inline-block`}>
        الاستشارات الفنية مع{" "}
      </h3>
      <h3 className={`green fw-bolder  mx-2 d-inline-block ${style.text}`}>
        أ/ أحمد المسوي
      </h3>
      <div className="row mt-4">
        <div
          className={`col-12 col-md-8 ${style.successContainer} text-center`}
        >
          <h4 className={`fw-bolder green mb-5 ${style.text}`}>
            تم حجز ميعاد استشارة بنجاح
          </h4>
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <p className="m-0 p-0">
              {bookedTime.map((item, index) => (
                <span className="d-inline-block mx-1 roboto fs24" key={index}>
                  {item}
                </span>
              ))}
            </p>
            <button className={`${style.btn}`}>
              <MdArrowBackIosNew size={20} />
              <span className="mt-1">دخول الاجتماع</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessBookingDetails;
