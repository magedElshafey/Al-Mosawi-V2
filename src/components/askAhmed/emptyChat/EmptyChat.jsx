import React, { useState } from "react";
import ContactDetails from "../../contact/contactDetails/ContactDetails";
import BigBtn from "../../utils/bigBtn/BigBtn";
import avatr from "../../../assets/avatar.png";
import ahmedAv from "../../../assets/a7medAv.png";
import { toast } from "react-hot-toast";
import style from "../chat/chat.module.css";
import { useTranslation } from "react-i18next";
const EmptyChat = ({ details, appointment }) => {
  const [msg, setMsg] = useState("");
  const [allMsgs, setAllMesgs] = useState([]);
  const [t] = useTranslation();
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
      <div
        className={`col-12 px-4 py-5 col-md-7 mb-3 mb-md-0 ${style.mainContainer}`}
      >
        <h3 className={`fw-bolder  mb-2 shamel fs28`}>{t("writeQuestion")}</h3>
        <p className="mx-0 mt-0 mb-5 p-0">{t("questionDesc")}</p>
        <div className="mb-3">
          <label htmlFor="msg" className="shamel fs18 d-block mb-1 fw-bolder">
            {t("yourQuestion")}
          </label>
          <textarea
            onChange={(e) => setMsg(e.target.value)}
            className="area"
          ></textarea>
        </div>
        <div className="pb-4">
          <BigBtn action={handleSendMsg} text={t("sendNow")} />
        </div>
      </div>
      <div className="col-12 col-md-5 mb-3 mb-md-0">
        <ContactDetails details={details} appointment={appointment} />
      </div>
    </div>
  );
};

export default EmptyChat;
