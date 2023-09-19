import React from "react";
import style from "./contactForm.module.css";
import BigBtn from "../../utils/bigBtn/BigBtn";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const [t] = useTranslation();
  return (
    <div className={`p-4 ${style.mainContainer}`}>
      <p className="fw-bolder mb-2 p-0 mx-0 shamel fs28">{t("glade")}</p>
      <p className="mb-2 mx-0 p-0 w-75">
        إذا كان لديك أي استفسارات أو تعليقات، يرجى إرسالها إليناعبر نموذج
        الاتصال وسيتم الرد بأسرع وقت
      </p>
      <form>
        <div className="row my-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="name" className="fw-bolder shamel  d-block mb-1 ">
              {t("name")}
            </label>
            <input type="text" className="inp" id="name" />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="email" className="shamel fw-bolder d-block mb-1 ">
              {t("email")}
            </label>
            <input type="email" className="inp" id="email" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="num" className="shamel fw-bolder d-block mb-1 ">
              {t("phone")}
            </label>
            <input type="number" className="inp" id="num" />
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label htmlFor="city" className="shamel fw-bolder d-block mb-1 ">
              {t("country")}
            </label>
            <input type="text" className="inp" id="city" />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="msg" className="shamel d-block mb-1 fw-bolder ">
            {t("sendMsg")}
          </label>
          <textarea className="area"></textarea>
        </div>
        <BigBtn text={t("sendNow")} />
      </form>
    </div>
  );
};

export default ContactForm;
