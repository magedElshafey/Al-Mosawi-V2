import React, { useRef } from "react";
import style from "./upload.module.css";
import uploadIcon from "../../../../assets/upload-to-cloud.svg";
import { useTranslation } from "react-i18next";
const Upload = ({
  label,
  action,
  id,
  name,
  successMessageID,
  successMsgPassport,
  successMsgAddrress,
}) => {
  const [t] = useTranslation();
  const inputRef = useRef(null);
  const handleButtonClic = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  return (
    <div className="my-2">
      <label className="d-block shamel  fw-bold" htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        className={style.fileInp}
        type="file"
        id={id}
        name={name}
        onChange={action}
      />
      <button onClick={handleButtonClic} className={style.custom}>
        <img alt="upload / img" src={uploadIcon} loading="lazy" />
        <p className={`shamel fs2 fw-bold m-0 p-0 ${style.title}`}>
          {t("drag")}
        </p>
        <p className="m-0 p-0 tahoma fs ">{t("best")}</p>
      </button>
      {successMessageID && <p className="green m-0 p-0">{successMessageID}</p>}
      {successMsgPassport && (
        <p className="green m-0 p-0">{successMsgPassport}</p>
      )}
      {successMsgAddrress && (
        <p className="green m-0 p-0">{successMsgAddrress}</p>
      )}
    </div>
  );
};

export default Upload;
