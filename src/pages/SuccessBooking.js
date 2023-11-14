import React from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import SuccessBookingDetails from "../components/SuccessBooking/SuccessBookingDetails";
import { useTranslation } from "react-i18next";
const SuccessBooking = ({ handleChangeTitle }) => {
  const { i18n } = useTranslation();
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        isStatic={true}
        title={i18n.language === "ar" ? "الاستشارات" : "consulting"}
        desc={
          i18n.language === "ar"
            ? "يمكنك كتابة سؤالك وسيتم الرد عليك في اقرب وقت ممكن من أ أحمد الموسوي"
            : "You can write your question and you will be answered as soon as possible from Ahmed Al-Moussawi."
        }
      />
      <Header handleChangeTitle={handleChangeTitle} />
      <div className="container py-5">
        <SuccessBookingDetails />
      </div>
    </div>
  );
};

export default SuccessBooking;
