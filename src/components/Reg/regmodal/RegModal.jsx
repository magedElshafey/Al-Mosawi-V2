import React, { useEffect, useRef } from "react";
import style from "./regModal.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { reqPaper } from "../../../fakers/data";
const RegModal = ({ setShowModal, showModal }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div
        className={`${style.overlay} ${showModal ? style.show : style.hide} `}
      >
        <div className="row justify-content-center">
          <div ref={modalRef} className={`${style.modal} col-12 text-center`}>
            <p className="m-0 p-0 shamel fs20">الشروط و الاحكام</p>
            {reqPaper.details.map((item, index) => (
              <div key={index} className="d-flex align-items-center gap-1 my-3">
                <BsFillArrowLeftCircleFill size={20} className="green" />
                <p className=" m-0 p-0">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegModal;
