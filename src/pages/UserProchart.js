import React from "react";
import HeroForex from "../components/utils/HeroForex/HeroForex";
import { userProchart } from "../fakers/data";
const UserProchart = () => {
  return (
    <div>
      <HeroForex isProchart={true} data={userProchart} />
    </div>
  );
};

export default UserProchart;
