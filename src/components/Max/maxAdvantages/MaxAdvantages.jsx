import React from "react";
import style from "./maxAdvantages.module.css";
const MaxAdvantages = () => {
  
  return (
    <div className="row gap-4 py-5 align-items-center">
      <div className="col-12 col-md-3 text-center text-md-end">
        <p className="fs30 d-inline-block green fw-bold my-0 mx-1 p-0">
          مميزات
        </p>
        <p className="m-0 p-0 fs24 d-inline-block fw-bold">تحصل عليها </p>
        <p className="fw-bold fs24 m-0 p-0">عند فتح حساب معنا</p>
      </div>
      <div className="col-12 col-md-8">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={`mb-5 ${style.titleContainer}`}>
              <p className="green mx-0 p-0 mb-3 green fs20 fw-bold">
                خصومات تصل الى 50% على العمولات
              </p>
              <p className="m-0 p-0 fs18">
                عند الاشتراك بأحد الباقات قد تحصل على خصومات تصل الى 50% على
                العمولات
              </p>
            </div>
            <div className={`mb-5 ${style.titleContainer}`}>
              <p className="green mx-0 p-0 mb-3 green fs20 fw-bold">
                استشارة مجانية
              </p>
              <p className="m-0 p-0 fs18">
                استشارة مجانية مع أ / أحمد الموسوي هذا النص تجريبي يستبدل بالنص
                الأصلي
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`mb-5 ${style.titleContainer}`}>
              <p className="green mx-0 p-0 mb-3 green fs20 fw-bold">
                خصومات تصل الى 50% على العمولات
              </p>
              <p className="m-0 p-0 fs18">
                عند الاشتراك بأحد الباقات قد تحصل على خصومات تصل الى 50% على
                العمولات
              </p>
            </div>
            <div className={`mb-5 ${style.titleContainer}`}>
              <p className="green mx-0 p-0 mb-3 green fs20 fw-bold">
                استشارة مجانية
              </p>
              <p className="m-0 p-0 fs18">
                استشارة مجانية مع أ / أحمد الموسوي هذا النص تجريبي يستبدل بالنص
                الأصلي
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxAdvantages;
