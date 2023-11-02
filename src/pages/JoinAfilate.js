import React , {useState} from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import RegModal from "../components/Reg/regmodal/RegModal";
import { useTranslation } from "react-i18next";
import AfilateForm from "../components/joinAfilate/form/AfilateForm";
import Img3D from "../components/joinAfilate/Img3D";
const JoinAfilate = ({ lang }) => {
  const { i18n } = useTranslation();
   const [showModal, setShowModal] = useState(false);
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
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <AfilateForm lang={lang} setShowModal={setShowModal} />
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <Img3D />
            </div>
          </div>
        </div>
      </div>
      <RegModal setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};

export default JoinAfilate;
