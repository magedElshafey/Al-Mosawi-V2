import React from "react";
import HeroForex from "../components/utils/HeroForex/HeroForex";
import { userProchart } from "../fakers/data";
import { useSelector } from "react-redux";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
const UserProchart = () => {
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
          <HeroForex
            isProchart={true}
            data={userProchart}
            accountDetails={data.data.data.UserData}
          />
        </div>
      )}
    </>
  );
};

export default UserProchart;
