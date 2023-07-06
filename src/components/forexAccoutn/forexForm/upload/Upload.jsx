import React, { useRef } from "react";
import style from "./upload.module.css";
import uploadIcon from "../../../../assets/upload-to-cloud.svg";
const Upload = ({ label, action, id }) => {
  const inputRef = useRef(null);
  const handleButtonClic = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  return (
    <div className="my-3">
      <label className="d-block mb-1 fs-4 fw-bold" htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        className={style.fileInp}
        type="file"
        id={id}
        onChange={action}
      />
      <button onClick={handleButtonClic} className={style.custom}>
        <img alt="upload / img" src={uploadIcon} loading="lazy" />
        <p className={`fs-4 fw-bold m-0 p-0 ${style.title}`}>
          سحب وإفلات الملف هنا
        </p>
        <p className="m-0 p-0 lh">
          للحصول على أفضل النتائج؛ يجب أن يكون حجم الصورة 960 × 540، 2 ميغابايت
          كحدّ أقصى
        </p>
      </button>
    </div>
  );
};

export default Upload;
