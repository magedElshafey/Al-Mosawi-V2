import React, { useState } from "react";
import ContactDetails from "../../contact/contactDetails/ContactDetails";
import BigBtn from "../../utils/bigBtn/BigBtn";
import avatr from "../../../assets/avatar.png";
import ahmedAv from "../../../assets/a7medAv.png";
import { toast } from "react-hot-toast";
import style from "./emptyChat.module.css"
const EmptyChat = ({ details, appointment }) => {
  const [msg, setMsg] = useState("");
  const [allMsgs, setAllMesgs] = useState([]);

  const handleSendMsg = () => {
    if (msg) {
      setAllMesgs(allMsgs.push(msg));
      const body = {
        img: avatr,
        msgs: allMsgs,
        userName: "Megz",
        date: new Date().toLocaleTimeString(),
        ahmedAv,
        answer: "حبيبي تسلم",
      };
      window.localStorage.setItem("chat", JSON.stringify([body]));
      toast.success("تم ارسال رسالتك بنجاح");
      setMsg("");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  return (
    <div className="row">
      <div className="col-12 col-md-7 mb-3 mb-md-0">
        <h3 className={`fw-bolder fs36 mb-3 ${style.write}`}>
          أكتب سؤالك و ابدأ المحادثة
        </h3>
        <p className="roboto fs22 mx-0 mt-0 mb-3 p-0">
          يمكن ارسال سؤالك و سوف تتلقي الرد هنا بالمحادثة
        </p>
        <div className="mb-3">
          <label htmlFor="msg" className="fs24 d-block mb-1 fw-bolder">
            اكتب سؤالك
          </label>
          <textarea
            onChange={(e) => setMsg(e.target.value)}
            className="area"
          ></textarea>
        </div>
        <BigBtn action={handleSendMsg} text="ارسال الان" />
      </div>
      <div className="col-12 col-md-5 mb-3 mb-md-0">
        <ContactDetails details={details} appointment={appointment} />
      </div>
    </div>
  );
};

export default EmptyChat;
