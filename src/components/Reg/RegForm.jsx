import React from "react";
import style from "./reg.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const RegForm = () => {
  return (
    <form className="container py-5">
      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <label
            htmlFor="name"
            className={`d-block fw-bold ${style.text20} mb-1`}
          >
            الاسم بالكامل
          </label>
          <input
            type="text"
            placeholder="Ex : ماجد الشافعي"
            id="name"
            className="inp"
          />
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <label
            htmlFor="number"
            className={`d-block fw-bold ${style.text20} mb-1`}
          >
            رقم الهاتف
          </label>
          <input
            type="number"
            placeholder="Ex : 0102215"
            id="number"
            className="inp"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <label
            htmlFor="email"
            className={`d-block fw-bold ${style.text20} mb-1`}
          >
            البريد الإلكتروني
          </label>
          <input
            type="email"
            placeholder="Ex : magedelshafey@gmail.com"
            id="email"
            className="inp"
          />
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <label
            htmlFor="city"
            className={`d-block fw-bold ${style.text20} mb-1`}
          >
            الدولة
          </label>
          <select className="inp" id="city">
            <option>الكويت</option>
            <option>مصر</option>
            <option>الامارات</option>
          </select>
        </div>
      </div>
      <div className="row  my-5 justify-content-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column gap-3 align-items-center">
          <label htmlFor="question" className={`mb-1 fw-bold ${style.text20}`}>
            هل أنت عميل في{" "}
            <span className={`red ${style.text20} text-uppercase`}>
              tikmill
            </span>
          </label>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <div>
              <input
                type="radio"
                id="yes"
                className={`p-0 m-0  ${style.radio}`}
                name="ask"
              />
              <label
                htmlFor="yes"
                className={`p-0 my-0 mx-1 fw-bold ${style.text20}`}
              >
                نعم
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                className={`p-0 m-0  ${style.radio}`}
                name="ask"
              />
              <label
                htmlFor="no"
                className={`p-0 my-0 mx-1 fw-bold ${style.text20}`}
              >
                لا
              </label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column gap-3">
          <p htmlFor="conditions" className={`m-0 p-0 fw-bold ${style.text20}`}>
            الشروط و الأحكام
          </p>
          <div>
            <input
              type="checkbox"
              id="conditions"
              className={`p-0 m-0  ${style.checkBox}`}
            />
            <label
              htmlFor="yes"
              className={`p-0 my-0 mx-1 fw-bold ${style.text20}`}
            >
              اوافق علي
            </label>
            <span
              className={`m-0 p-0 ${style.text20} fw-bold ${style.condition}`}
            >
              الشروط والأحكام
            </span>
          </div>
        </div>
      </div>
      <button className={style.btn}>
        <MdOutlineArrowBackIosNew size={20} />
        <span className="text-white mt-1">التالي</span>
      </button>
      <p className="text-center my-3 mx-0 p-0 fw-bold">
        <span className={style.haveAccount}>لديك حساب بالفعل ؟ </span>{" "}
        <span className={style.reg}>تسجيل الدخول</span>
      </p>
    </form>
  );
};

export default RegForm;
/*
    <div className="d-flex justify-content-center align-items-center gap-3">
            <div>
             
            
            </div>
          </div>
*/
