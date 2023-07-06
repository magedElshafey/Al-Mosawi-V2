import React, { useRef, useEffect } from "react";
import style from "./modal.module.css";
import close from "../../../assets/cross.png";
import { quota, purchasDetails } from "../../../fakers/data.js";
import { BsFillTelephoneFill } from "react-icons/bs";
import DarkGreenTitle from "../../utils/darkGreenTitle/DarkGreenTitle";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
const PackageModal = ({ showModal, action }) => {
  const data = quota.filter((item) => item.title === "البرونزية");
  const modalRef = useRef();
  const handleCloseRef = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      action();
    }
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
          className={`${style.modal} ${
            showModal ? style.showModal : style.hideModal
          }`}
        >
          <div className="p-3">
            <img
              src={close}
              alt="close/img"
              loading="lazy"
              className={style.mainImg}
              onClick={action}
            />
            <p className="fs-2 p-0 mx-0 mt-5 mb-5 fw-bold fs-4 text-center">
              يمكنك إرسال الطلب أو التواصل مع خدمة العملاء
            </p>
            <div className=" row justify-content-center align-items-center">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                {data.map((item, index) => (
                  <div className={`p-2 ${style.hero}`} key={index}>
                    <div className={style.main}>
                      <img
                        alt="data/img"
                        src={item.img}
                        loading="lazy"
                        className={style.img}
                      />
                      <p className="text-center pt-4 ">
                        <DarkGreenTitle title="الباقة" />{" "}
                        <p className={`d-inline-block m-0 p-0 ${style.title}`}>
                          {item.title}
                        </p>
                      </p>
                      <div className={style.detailsContainer}>
                        {item.details.map((item, index) => (
                          <div
                            key={index}
                            className="mb-2 d-flex justify-content-center align-items-centr gap-2"
                          >
                            {item.isTrue ? (
                              <IoCheckmarkCircleSharp
                                className="green"
                                size={20}
                              />
                            ) : (
                              <AiOutlineClose
                                size={20}
                                className={style.false}
                              />
                            )}
                            <p className="fw-bold m-0 p-0">{item.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="py-4 px-2 d-flex justify-content-center align-items-center gap-2">
                      <p className={`fs-4 p-0 m-0  ${style.price}`}>
                        بعد الخصم{" "}
                        {item.offer ? item.price - item.offer : item.price} $
                      </p>
                      <p className={`fs-4 p-0 m-0 ${style.original}`}>
                        {item.price} $
                      </p>
                    </div>
                    <button
                      className={`pb-4 d-flex justify-content-center align-items-center mx-auto gap-1 p-4 ${style.btn}`}
                    >
                      <MdOutlineArrowBackIos size={20} />
                      <p className="m-0 p-0">ارسال الطلب</p>
                    </button>
                  </div>
                ))}
              </div>
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <p className="fw-bold fs-4 mx-0 mb-3 p-0 text-center">
                  يمكنك أيضا الاشتراك عن طريقالتواصل مع خدمة العملاء
                </p>
                <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                  <DarkGreenTitle title="2528172" />
                  <BsFillTelephoneFill size={30} className="green" />
                </div>
                <div className={`p-3 ${style.purchas}`}>
                  <p className="text-center fw-bold mb-3 mx-0 p-0">
                    الاشتراك السريع
                  </p>
                  <div>
                    {purchasDetails.map((item, index) => (
                      <p
                        className="mx-0 text-center p-0 mb-3 fw-bold green"
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
    </div>
  );
};

export default PackageModal;
