import React from "react";
import style from "./consultingIntro.module.css";
const ConsultingIntro = () => {
  return (
    <div className="mb-5">
      <h3
        className={`d-inline-block mx-2 mt-0 mb-2 p-0 fw-bolder ${style.intro}`}
      >
        الاستشارات الفنية مع{" "}
      </h3>
      <h3 className={`${style.intro} d-inline-block fw-bolder  green`}>
        أ / أحمد المسوي
      </h3>
      <p
        className={`roboto fs22 lh  m-0 p-0 text-center text-md-end  ${style.desc}`}
      >
        يسعدنى مقابلة الجميع وتقديم المساعدة, اختر الموعد المناسب لك من المواعيد
        المتاحة وسيتم تحديد موعد للاجتماع وتقديم المساعدة هذا نص تجريبي لوصف
        الخدمة
      </p>
    </div>
  );
};

export default ConsultingIntro;
