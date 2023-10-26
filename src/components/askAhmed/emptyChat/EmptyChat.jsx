import React from "react";
import BigBtn from "../../utils/bigBtn/BigBtn";
import style from "../chat/chat.module.css";
import { useTranslation } from "react-i18next";
const EmptyChat = ({ msg, setMsg, handleClick }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={` px-4 py-5  ${style.mainContainer}`}>
        <h3 className={`fw-bolder  mb-2 shamel fs28`}>{t("writeQuestion")}</h3>
        <p className="mx-0 mt-0 mb-5 p-0">{t("questionDesc")}</p>
        <div className="mb-3">
          <label htmlFor="msg" className="shamel fs18 d-block mb-1 fw-bolder">
            {t("yourQuestion")}
          </label>
          <textarea
            onChange={(e) => setMsg(e.target.value)}
            className="area"
            value={msg}
          ></textarea>
        </div>
        <div className="pb-4">
          <BigBtn action={handleClick} text={t("sendNow")} />
        </div>
      </div>
    </>
  );
};

export default EmptyChat;
