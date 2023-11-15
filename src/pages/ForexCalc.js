import React from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import ForexCalcDetails from "../components/forexCalc/ForexCalcDetails";
import { useTranslation } from "react-i18next";
const ForexCalc = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        isStatic={true}
        img={heroImg}
        title={i18n.language === "ar" ? "حاسبة الفوركس" : "Forex calculator"}
        desc={
          i18n.language === "ar"
            ? "اجعل عملية تداولك أسهل عبر استخدام آلاتنا الحاسبة الرائعة. مما يوفر عليك الوقت الذي ستحتاجه للتركيز على اتخاذ قرارات التداول"
            : "Make your trading easier by using our amazing calculators. This saves you the time you need to focus on making trading decisions"
        }
      />
      <Header
        title={i18n.language === "ar" ? "حاسبة الفوركس" : "Forex calculator"}
      />
      <div className="container py-3">
        <div className="row justify-content-center">
          <ForexCalcDetails />
        </div>
      </div>
    </div>
  );
};

export default ForexCalc;
