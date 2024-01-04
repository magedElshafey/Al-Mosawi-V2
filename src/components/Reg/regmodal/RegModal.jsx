import React, { useEffect, useRef } from "react";
import style from "./regModal.module.css";
import { useTranslation } from "react-i18next";
const RegModal = ({ setShowModal, showModal, data }) => {
  const modalRef = useRef(null);
  const { i18n } = useTranslation();
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
            <p className="m-0 p-0 shamel fs20">
              {i18n.language === "ar"
                ? "الشروط و الاحكام"
                : "terms and conditions"}
            </p>
            <div dangerouslySetInnerHTML={{ __html: data }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegModal;
