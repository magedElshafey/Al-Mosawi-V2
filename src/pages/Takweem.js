import React from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import { useTranslation } from "react-i18next";
import Header from "../components/utils/header/Header";
const Takweem = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        isStatic={true}
        title={
          i18n.language === "ar" ? "التقويم الاقتصادي" : "Economic calendar"
        }
      />
      <Header
        title={
          i18n.language === "ar" ? "التقويم الاقتصادي" : "Economic calendar"
        }
      />
      <div className="container py-5">
        <h3 className="fw-bolder m-0 p-0 text-center mb-4 fs-1">
          {i18n.language === "ar" ? "التقويم الاقتصادي" : "Economic calendar"}
        </h3>
        <div className="d-flex justify-content-center">
          <iframe
            title="External Table"
            src="https://sslecal2.investing.com/"
            width="70%"
            height="500"
            frameBorder="0"
            className="mx-auto"
            style={{ overflow: "hidden" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Takweem;
