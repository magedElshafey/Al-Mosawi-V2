import React from "react";
import style from "./contactForm.module.css";
import BigBtn from "../../utils/bigBtn/BigBtn";
const ContactForm = () => {
  return (
    <div className={`p-3 ${style.mainContainer}`}>
      <p className="fw-bolder mb-3 p-0 mx-0 fs-4">يسعدنا تلقي رسالتك</p>
      <p className="mb-3 mx-0 p-0 lh w-75">
        إذا كان لديك أي استفسارات أو تعليقات، يرجى إرسالها إليناعبر نموذج
        الاتصال وسيتم الرد بأسرع وقت
      </p>
      <form>
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="name" className="fw-bolder d-block mb-1 ">
              الإسم
            </label>
            <input type="text" className="inp" id="name" />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="email" className="fw-bolder d-block mb-1 ">
              الإيميل
            </label>
            <input type="email" className="inp" id="email" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="num" className="fw-bolder d-block mb-1 ">
              رقم الهاتف
            </label>
            <input type="number" className="inp" id="num" />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="city" className="fw-bolder d-block mb-1 ">
              الدولة
            </label>
            <input type="text" className="inp" id="city" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="msg" className="d-block mb-1 fw-bolder ">
            اترك لنا رسالتك
          </label>
          <textarea className="area"></textarea>
        </div>
        <BigBtn text="ارسال الأن" />
      </form>
    </div>
  );
};

export default ContactForm;
