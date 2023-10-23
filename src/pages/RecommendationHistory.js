import React, { useEffect } from "react";
import HeroBox from "../components/utils/herobox/HeroBox";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const RecommendationHistory = () => {
  const user = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/deal/index", headers });
  };
  const { isLoading, data } = useQuery("deals-page", fetchData, {
    cacheTime: 12000,
    staleTime: 12000,
  });
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/recommendation-details");
    }
  }, [user, navigate]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <HeroBox
            isHistory={true}
            isVideo={false}
            isRecommendations={false}
            data={data.data.data}
          />
        </div>
      )}
    </>
  );
};

export default RecommendationHistory;
