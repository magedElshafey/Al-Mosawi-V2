import React from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import { useTranslation } from "react-i18next";
import Img3D from "../components/joinAfilate/Img3D";
import LoginAfilateForm from "../components/loginAfilate/LoginAfilateForm";
const LoginAfilate = ({ lang }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <div>
        <Hero
          isBigHero={false}
          isSmallHero={true}
          isMediumHero={false}
          img={heroImg}
          title={
            i18n.language === "en"
              ? "Welcome to our marketing team"
              : "مرحبا بك في فريق التسويق الخاص بنا"
          }
          isStatic={true}
        />
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <LoginAfilateForm lang={lang} />
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <Img3D />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAfilate;
