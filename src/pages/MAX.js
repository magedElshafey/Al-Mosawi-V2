import React from "react";
import HeroMax from "../components/Max/hero/HeroMax";
import MaxCard from "../components/Max/maxCard/MaxCard";
import MaxAdvantages from "../components/Max/maxAdvantages/MaxAdvantages";
import Pro from "../components/Max/pro/Pro";
import WhyTickmill from "../components/Max/whyTickmill/WhyTickmill";


const MAX = () => {
  return (
    <div>
      <HeroMax />
      <MaxCard />
      <MaxAdvantages />
      <Pro />
      <WhyTickmill />
      
    </div>
  );
};

export default MAX;
