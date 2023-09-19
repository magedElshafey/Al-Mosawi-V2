import React from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import ForexCalcDetails from "../components/forexCalc/ForexCalcDetails";
const ForexCalc = () => {
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        title="حاسبة الفوركس"
        desc="اجعل عملية تداولك أسهل عبر استخدام آلاتنا الحاسبة الرائعة. مما يوفر عليك الوقت الذي ستحتاجه للتركيز على اتخاذ قرارات التداول"
      />
      <Header/>
      <div className="container py-3">
        <div className="row justify-content-center">
          <ForexCalcDetails />
        </div>
      </div>
    </div>
  );
};

export default ForexCalc;
