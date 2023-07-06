import React from "react";
import HeroBox from "../components/utils/herobox/HeroBox";
const RecommendationHistory = ({ data }) => {
  return (
    <div>
      <HeroBox
        isHistory={true}
        isVideo={false}
        isRecommendations={false}
        data={data}
      />
    </div>
  );
};

export default RecommendationHistory;
