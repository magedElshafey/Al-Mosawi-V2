import React, { useState } from "react";
import AuthImg from "../components/utils/authImg/AuthImg";
import AuthIntro from "../components/utils/authIntro/AuthIntro";
import RegForm from "../components/Reg/RegForm";
import { useTranslation } from "react-i18next";
import RegModal from "../components/Reg/regmodal/RegModal";
const Regester = ({ phoneNum, logo, terms }) => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="d-none d-md-block">
        <div className="row">
          <div className="col-6">
            <div className="container">
              <AuthIntro title={t("reg")} desc={t("canReg")} />
              <RegForm setShowModal={setShowModal} />
            </div>
          </div>
          <div className="col-6">
            <AuthImg
              phoneNum={phoneNum}
              showWelcome={true}
              logo={logo}
              desc={
                i18n.language === "ar"
                  ? "انشىء حسابك الأن واستمتع بالمميزات الغير محدودة نص تجريبي"
                  : "Create your account now and enjoy unlimited features, trial text"
              }
              desc2=""
            />
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div className="row m-0 p-0">
          <div className="col-12 mb-3  m-0 p-0">
            <AuthImg
              logo={logo}
              phoneNum={phoneNum}
              showWelcome={true}
              desc={
                i18n.language === "ar"
                  ? "انشىء حسابك الأن واستمتع بالمميزات الغير محدودة نص تجريبي"
                  : "Create your account now and enjoy unlimited features, trial text"
              }
              desc2=""
            />
          </div>
          <div className="col-12">
            <AuthIntro title={t("reg")} desc={t("canReg")} />
            <RegForm setShowModal={setShowModal} />
          </div>
        </div>
      </div>
      <RegModal
        setShowModal={setShowModal}
        showModal={showModal}
        data={terms}
      />
    </>
  );
};

export default Regester;
