import React from "react";
import style from "./content.module.css";
import { MdOutlineArrowBackIos } from "react-icons/md";
const TextContent = () => {
  return (
    <div className="py-5 text-center">
      <p className="fw-bold fs-4 fs-md-2 w-75  mx-auto mb-4 p-0">
        &apos; تأكد دوماً بأننا موجودين في حالة وجود أي استفسارات أو مشكلات
        تتتعلق بخدماتنا. سنكون دائما مستعدين بالمعلومات والمساعدة &#44;
      </p>
      <button
        className={`pb-4 d-flex justify-content-center align-items-center mx-auto gap-1 p-4 ${style.btn}`}
      >
        <MdOutlineArrowBackIos size={20} />
        <p className="m-0 p-0">اشترك الان</p>
      </button>
    </div>
  );
};

export default TextContent;
