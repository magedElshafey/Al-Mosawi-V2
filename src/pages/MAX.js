import React from "react";
import HeroMax from "../components/Max/hero/HeroMax";
import MaxCard from "../components/Max/maxCard/MaxCard";
import MaxAdvantages from "../components/Max/maxAdvantages/MaxAdvantages";
import Pro from "../components/Max/pro/Pro";
import WhyTickmill from "../components/Max/whyTickmill/WhyTickmill";
import How from "../components/Max/how/How";

const MAX = () => {
  return (
    <div>
      <HeroMax />
      <div className="container">
        <MaxCard />
        <MaxAdvantages />
        <Pro />
        <WhyTickmill />
        <How />
      </div>
    </div>
  );
};

export default MAX;
