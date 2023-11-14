import React from "react";
import HeroBox from "../components/utils/herobox/HeroBox";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
const Recommendations = () => {
  const { i18n } = useTranslation();
  const fetchData = () => {
    return request({ url: "/deal/index" });
  };
  const { isLoading, data } = useQuery("deals-page", fetchData);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <HeroBox
          isHistory={false}
          isVideo={false}
          isRecommendations={true}
          isWallet={false}
          isAfilator={false}
          data={data.data.data}
        />
      )}
    </div>
  );
};

export default Recommendations;
