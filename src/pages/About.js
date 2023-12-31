import React from "react";
import Hero from "../components/utils/hero/Hero";
import WhyUs from "../components/about/WhyUs/WhyUs";
import OuerTeam from "../components/about/ourTeam/OuerTeam";
import AboutAhmed from "../components/about/ahmed/AboutAhmed";
import TextContent from "../components/about/textContent/TextContent";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
const About = () => {
  const { i18n } = useTranslation();
  const fetchData = () => {
    return request({ url: "/aboutUs" });
  };
  const { isLoading, data } = useQuery("about-page", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Hero
            isStatic={true}
            img={data.data.data.headerImg}
            desc={data.data.data.headerDes}
            title={data.data.data.headerTitle}
            pageName={i18n.language === "en" ? "about us" : "عن شركتنا"}
            isBigHero={false}
            isSmallHero={false}
            isMediumHero={true}
          />
          <WhyUs
            img={data.data.data.aboutUsImage}
            aboutCompany={data.data.data.aboutUsSections}
          />
          <OuerTeam team={data.data.data.team} />
          <AboutAhmed
            title={data.data.data.section2Title}
            desc={data.data.data.section2Des}
            state={data.data.data.secondSecMedia}
            imgLink={data.data.data.secondSecImage}
            videoLink={data.data.data.secondSecLink}
          />
          <TextContent text={data.data.data.ending} />
        </div>
      )}
    </>
  );
};

export default About;
