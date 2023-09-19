import React, { useRef, useEffect } from "react";
import style from "./modal.module.css";
import close from "../../../assets/cross.png";
import { quota, purchasDetails } from "../../../fakers/data.js";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import BTN from "../../utils/btn/BTN";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
const PackageModal = ({ showModal, action, setShowModal }) => {
  const data = quota.filter((item) => item.title === "البرونزية");
  const { i18n } = useTranslation();
  const modalRef = useRef();
  const handleCloseRef = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      action();
    }
  };
  const handleButtonClick = () => {
    toast.success(
      i18n.language === "en"
        ? "your request send successfully"
        : "تم ارسال الطلب بنجاح"
    );
    setShowModal(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleCloseRef);
    return () => {
      document.removeEventListener("mousedown", handleCloseRef);
    };
  }, []);
  return (
    <div
      className={`${style.mainContainer} ${
        showModal ? style.show : style.hide
      }`}
    >
      <div className="container">
        <div
          ref={modalRef}
          className={`p-3 ${style.modal} ${
            showModal ? style.showModal : style.hideModal
          }`}
        >
          <p className="text-md-center fs18 shamel p-0 mx-0  fw-bold">
            يمكنك إرسال الطلب أو التواصل مع خدمة العملاء
          </p>
          <img
            src={close}
            alt="close/img"
            loading="lazy"
            className={style.mainImg}
            onClick={action}
          />
          <div className="row align-items-center gap-2">
            <div className="col-12 col-md-7">
              {data.map((item, index) => (
                <div className={`p-2 mt-3 ${style.hero}`} key={index}>
                  <div className={style.main}>
                    <img
                      alt="data/img"
                      src={item.img}
                      loading="lazy"
                      className={style.img}
                    />
                    <p className="text-center pt-4 ">
                      <p className="m-0 p-0 fs24 shamel fw-bolder green d-inline-block">
                        الباقة
                      </p>

                      <p
                        className={`d-inline-block m-0 me-1 mt-0 mb-0 ms-0 shamel p-0 fs24 ${style.title}`}
                      >
                        {item.title}
                      </p>
                    </p>
                    <div className={style.detailsContainer}>
                      {item.details.map((item, index) => (
                        <div
                          key={index}
                          className="mb-1 mt-0  d-flex justify-content-center align-items-centr gap-2"
                        >
                          {item.isTrue ? (
                            <IoCheckmarkCircleSharp
                              className="green"
                              size={20}
                            />
                          ) : (
                            <AiOutlineClose size={20} className={style.false} />
                          )}
                          <p className=" m-0 p-0">{item.title}</p>
                        </div>
                      ))}
                      <div className={`text-center my-4 ${style.text} `}>
                        <input type="checkbox" />
                        <label>
                          أوافق علي{" "}
                          <span className={style.title2}>الشروط و الأحكام</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 d-flex justify-content-center align-items-center gap-2">
                    <p className={`fs20 p-0 m-0  ${style.price}`}>
                      بعد الخصم{" "}
                      {item.offer ? item.price - item.offer : item.price} $
                    </p>
                    <p className={`fs20 p-0 m-0 ${style.original}`}>
                      {item.price} $
                    </p>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button
                      onClick={handleButtonClick}
                      className={`book ${style.btn}`}
                    >
                      <MdOutlineArrowBackIos size={20} />
                      <span className="mt-1">ارسال الطلب</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 col-md-4">
              <p className="fw-bold shamel fs22 mx-0 my-0 p-0 text-center">
                يمكنك أيضا الاشتراك عن طريقالتواصل مع خدمة العملاء
              </p>
              <div className="shamel my-3 d-flex justify-content-center align-items-center gap-1 fs22">
                <p className="fw-bolder  green mx-0 mt-1 mb-0 shamel p-0 ">
                  25281720
                </p>
                <BsFillTelephoneFill className="green " />
              </div>

              <div className={`p-3 fw-bold ${style.purchas}`}>
                <p className="text-center fs22 fw-bold shamel mb-2 mx-0 p-0">
                  الاشتراك السريع
                </p>
                <div>
                  {purchasDetails.map((item, index) => (
                    <p
                      className="mx-0 fs18 book text-center p-0 mb-2 green"
                      key={index}
                    >
                      {index + 1} {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
/*
     <div className="container">
        <div
          ref={modalRef}
          className={`${style.modal} ${
            showModal ? style.showModal : style.hideModal
          }`}
        >
          <div className="p-3">
           
           >
            </p>
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
            
              </div>
              
            </div>
          </div>
        </div>
      </div>
*/
