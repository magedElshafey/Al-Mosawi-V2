import React from "react";
import HeroBox from "../components/utils/herobox/HeroBox";
import { useSelector } from "react-redux";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
const Afilator = () => {
  const { isLogin, user } = useSelector((state) => state.authSlice);
  const { afilatorId } = useSelector((state) => state.afilator);

  const fetchData = () => {
    const headers = {
      userId: isLogin ? user : afilatorId,
    };
    return request({ url: "/affiliate/links", headers });
  };
  const { isLoading, data } = useQuery("affiliate dashboard-page", fetchData, {
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
            isAfilator={true}
            isWallet={false}
            accountDetails={data.data.user}
            prochart={data.data.prochart}
            courses={data.data.courses}
            profit={data.data.profit}
          />
        </div>
      )}
    </>
  );
};

export default Afilator;
