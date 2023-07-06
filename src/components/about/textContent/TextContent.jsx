import React from "react";
import MainBtn from "../../utils/mainBtn/MainBtn";
const TextContent = () => {
  return (
    <div className="container pb-5">
      <div className="d-flex flex-column align-items-center justify-content-center gap-3">
        <h2 className="w-75 text-center m-0 p-0 lh fw-bold fs-4 fs-md-2">
          &#44; تأكد دوماً بأننا موجودين هنا لتقديم الافضل لكم بعالم التداول
          ماذا تنتظر أبدأ تجربة تداول مميزة معنا &#44;
        </h2>
        <MainBtn text="تواصل معنا" />
      </div>
    </div>
  );
};

export default TextContent;
