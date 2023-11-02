import React from "react";
import HeroBox from "../components/utils/herobox/HeroBox";
import { useSelector } from "react-redux";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
const Wallet = () => {
  const { user } = useSelector((state) => state.authSlice);

  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/prochart/panel", headers });
  };
  const { isLoading, data } = useQuery("prochart dashboard-page", fetchData, {
    cacheTime: 12000,
    staleTime: 12000,
  });
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <HeroBox
            isRecommendations={false}
            isVideo={false}
            isHistory={false}
            isAfilator={false}
            isWallet={true}
            accountDetails={data.data.data.UserData}
          />
        </div>
      )}
    </>
  );
};

export default Wallet;
