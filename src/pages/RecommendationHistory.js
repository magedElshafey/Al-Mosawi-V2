import React, { useEffect, useState } from "react";
import HeroBox from "../components/utils/herobox/HeroBox";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

const RecommendationHistory = () => {
  const queryClient = useQueryClient();
  const [date, setDate] = useState("");
  const [dealType, setDealType] = useState("");
  const [dealStatus, setDealStatus] = useState("");
  const user = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({
      url: `/deal/index?date=${date}&status=${dealStatus}&type=${dealType}`,
      headers,
    });
  };
  const { isLoading, data } = useQuery(
    ["deals-page", date, dealType, dealStatus],
    fetchData,
    {
      cacheTime: 12000,
      staleTime: 12000,
    }
  );
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/recommendation-details");
    }
  }, [user, navigate]);
  const handleSearch = () => {
    // When the button is clicked, refetch the data based on the current date, type, and status values
    queryClient.invalidateQueries(["deals-page", date, dealType, dealStatus]);
  };
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
            status={data.data.dealStatus}
            type={data.data.dealType}
            date={date}
            setDate={setDate}
            dealType={dealType}
            setDealType={setDealType}
            dealStatus={dealStatus}
            setDealStatus={setDealStatus}
            handleSearch={handleSearch}
          />
        </div>
      )}
    </>
  );
};

export default RecommendationHistory;
