import React, { useEffect } from "react";
import HeroBox from "../components/utils/herobox/HeroBox";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
const ProchartVideo = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userId"));
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/prochart/video");
    }
  }, [user, navigate]);
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/prochart/panel", headers });
  };
  const { isLoading, data } = useQuery("prochart video-page", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <HeroBox
            isRecommendations={false}
            isVideo={true}
            isAfilator={false}
            isHistory={false}
            isWallet={false}
            data={data.data.data.video}
          />
        </div>
      )}
    </>
  );
};

export default ProchartVideo;
