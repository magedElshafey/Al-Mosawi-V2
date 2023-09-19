import React from "react";
import style from "./chat.module.css";
import ContactDetails from "../../contact/contactDetails/ContactDetails";
import BTN from "../../../../src/components/utils/btn/BTN";
import { useTranslation } from "react-i18next";
const Chat = ({ appointment, details, data }) => {
  const [t] = useTranslation();
  return (
    <div className={` row `}>
      <div
        className={`col-12 col-md-7 mb-3 mb-md-0 p-4 ${style.mainContainer}`}
      >
        <div className={`pb-3 ${style.border}`}>
          <h3 className={`fw-bolder d-inline-block fs22 shamel`}>
            {t("conversationWith")}
          </h3>
          <h3 className={`green fw-bolder mx-1 d-inline-block fs22 shamel`}>
            {t("ahmed")}
          </h3>
        </div>
        {data.map((item, index) => (
          <div key={index} className="mt-3">
            <div className="d-flex gap-3 align-items-center ">
              <img
                className={style.avatar}
                alt="avatar/img"
                loading="lazy"
                src={item.img}
              />
              <p className="m-0 p-0 text-black-50 fs18 fw-bold">
                {item.userName}
              </p>
              <p dir="ltr" className="roboto  m-0 p-0 text-black-50">
                {item.date}
              </p>
            </div>
            <p
              className={` text-black-50 p-3 my-3 mx-5 ${style.msgsContainer}`}
            >
              {item.msgs[0]}
            </p>
            <div className="d-flex gap-3 align-items-center mt-5 ">
              <img alt="avatar/img" loading="lazy" src={item.ahmedAv} />
              <p className="m-0 p-0 ">أحمد الموسوي</p>
              <p dir="ltr" className="m-0 p-0 roboto text-black-50">
                {new Date().toLocaleTimeString()}
              </p>
            </div>
            <p
              className={`text-black-50 p-3 mt-3 mx-5 ${style.answerContainer}`}
            >
              {item.answer}
            </p>
            <div className="row mt-4">
              <div className="col-12 col-md-8 pe-5">
                <input className={` ${style.input}`} type="text" />
              </div>
              <div className="col-12 col-md-4">
                <BTN text={t("send")} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-12 col-md-5 mb-3 mb-md-0">
        <ContactDetails details={details} appointment={appointment} />
      </div>
    </div>
  );
};

export default Chat;
