import React from "react";
import Hero from "../components/utils/hero/Hero";
import WhyUs from "../components/about/WhyUs/WhyUs";
import OuerTeam from "../components/about/ourTeam/OuerTeam";
import AboutAhmed from "../components/about/ahmed/AboutAhmed";
import TextContent from "../components/about/textContent/TextContent";

const About = ({ heroAbout, aboutCompany, team, aboutAhmed }) => {
  return (
    <div>
      <Hero
        img={heroAbout.img}
        redTitle={heroAbout.redTitle}
        desc={heroAbout.desc}
        desc2={heroAbout.desc2}
        desc3={heroAbout.desc3}
        title={heroAbout.title}
        pageName={heroAbout.pageName}
        isBigHero={false}
        isSmallHero={false}
        isMediumHero={true}
      />
      <WhyUs aboutCompany={aboutCompany} />
      <OuerTeam team={team} />
      <AboutAhmed aboutAhmed={aboutAhmed} />
      <TextContent />
    </div>
  );
};

export default About;
