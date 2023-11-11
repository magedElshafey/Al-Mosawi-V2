import React, { useEffect, useState } from "react";
import HeroBox from "../components/utils/herobox/HeroBox";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
const RecommendationHistory = () => {
  const [date, setDate] = useState("");
  const [dealType, setDealType] = useState("");
  const [dealStatus, setDealStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("userId"));
  const [data, setData] = useState(null);
  const [status, setStatus] = useState({});
  const [type, setType] = useState({});
  const fetchData = async () => {
    setIsLoading(true);
    const headers = {
      user,
    };

    try {
      const response = await request({
        url: `/deal/index?date=${date}&status=${dealStatus}&type=${dealType}`,
        headers,
      });

      if (response.data.status === "success") {
        setData(response.data.data);
        setStatus(response.data.dealStatus);
        setType(response.data.dealType);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  const handleSearch = () => {
    fetchData();
  };
  useEffect(() => {
    // Load all data initially when the page loads
    fetchData();
  }, []);
  const navigate = useNavigate();
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
            isAfilator={false}
            isWallet={false}
            data={data}
            date={date}
            setDate={setDate}
            dealType={dealType}
            setDealType={setDealType}
            dealStatus={dealStatus}
            setDealStatus={setDealStatus}
            handleSearch={handleSearch}
            status={status}
            type={type}
          />
        </div>
      )}
    </>
  );
};

export default RecommendationHistory;
/**
 * 
            type={data?.dealType}
 */
