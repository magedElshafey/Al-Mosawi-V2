import React from "react";
import HeroBox from "../components/utils/herobox/HeroBox";

const Recommendations = ({ data }) => {
  return (
    <div>
      <HeroBox
        isHistory={false}
        isVideo={false}
        isRecommendations={true}
        data={data}
      />
    </div>
  );
};

export default Recommendations;
