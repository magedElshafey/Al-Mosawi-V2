import React from "react";
import style from "./chat.module.css";
import ContactDetails from "../../contact/contactDetails/ContactDetails";

const Chat = ({ appointment, details, data }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-7 mb-3 mb-md-0">
        <h3 className={`fw-bolder d-inline-block ${style.text}`}>
          المحادثة مع{" "}
        </h3>
        <h3 className={`green fw-bolder mx-1 d-inline-block ${style.text}`}>
          أ / احمد الموسوي
        </h3>
        {data.map((item, index) => (
          <div key={index} className="mt-4">
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
              className={`roboto fs18 text-black-50 p-3 my-5 ${style.msgsContainer}`}
            >
              {item.msgs[0]}
            </p>
            <div className="d-flex gap-3 align-items-center ">
              <img alt="avatar/img" loading="lazy" src={item.ahmedAv} />
              <p className="m-0 p-0 ">أحمد الموسوي</p>
              <p dir="ltr" className="m-0 p-0 roboto text-black-50">
                {new Date().toLocaleTimeString()}
              </p>
            </div>
            <p
              className={`roboto fs18 text-black-50 p-3 mt-5 ${style.answerContainer}`}
            >
              {item.answer}
            </p>
            <button className={`me-auto ${style.btn}`}>ارسال</button>
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
