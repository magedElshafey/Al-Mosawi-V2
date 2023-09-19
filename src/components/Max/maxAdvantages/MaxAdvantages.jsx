import React from "react";
import style from "./maxAdvantages.module.css";
const MaxAdvantages = () => {
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div className={`row gap-4 py-5 align-items-center`}>
          <div className="col-12 col-md-3 text-center text-md-end">
            <p className="fs28 shamel d-inline-block green fw-bold my-0 mx-1 p-0">
              مميزات
            </p>
            <p className="m-0 p-0 fs22 d-inline-block fw-bold shamel">
              تحصل عليها{" "}
            </p>
            <p className="fw-bold fs22 shamel m-0 p-0">عند فتح حساب معنا</p>
          </div>
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className={`mb-5 ${style.titleContainer}`}>
                  <p className="green mx-0 p-0 mb-2  green fs18 shamel fw-bold">
                    خصومات تصل الى 50% على العمولات
                  </p>
                  <p className="m-0 p-0">
                    عند الاشتراك بأحد الباقات قد تحصل على خصومات تصل الى 50% على
                    العمولات
                  </p>
                </div>
                <div className={`mb-5 ${style.titleContainer}`}>
                  <p className="green mx-0 p-0 mb-2 green shamel fs18 fw-bold">
                    استشارة مجانية
                  </p>
                  <p className="m-0 p-0 ">
                    استشارة مجانية مع أ / أحمد الموسوي هذا النص تجريبي يستبدل
                    بالنص الأصلي
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className={`mb-5 ${style.titleContainer}`}>
                  <p className="green mx-0 p-0 mb-2 green shamel fs18 fw-bold">
                    خصومات تصل الى 50% على العمولات
                  </p>
                  <p className="m-0 p-0 ">
                    عند الاشتراك بأحد الباقات قد تحصل على خصومات تصل الى 50% على
                    العمولات
                  </p>
                </div>
                <div className={`mb-5 ${style.titleContainer}`}>
                  <p className="green mx-0 shamel p-0 mb-2 green fs18 fw-bold">
                    استشارة مجانية
                  </p>
                  <p className="m-0 p-0 ">
                    استشارة مجانية مع أ / أحمد الموسوي هذا النص تجريبي يستبدل
                    بالنص الأصلي
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxAdvantages;
