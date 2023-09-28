import React from "react";
import { forexAccDetails } from "../fakers/data";
import HeroForex from "../components/utils/HeroForex/HeroForex";

const ForexAccountDetails = () => {
 
  return (
    <div>
      <HeroForex isProchart={false} data={forexAccDetails} />
    </div>
  );
};

export default ForexAccountDetails;
