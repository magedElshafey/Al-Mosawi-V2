import React from "react";
import { forexAccDetails } from "../fakers/data";
import HeroForex from "../components/utils/HeroForex/HeroForex";
import { useSelector } from "react-redux";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
const ForexAccountDetails = () => {
  const { user } = useSelector((state) => state.authSlice);

  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/prochart/panel", headers });
  };
  const { isLoading, data } = useQuery("prochart dashboard-page", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <HeroForex
            prochartPlans={data.data.data.plan}
            isProchart={false}
            data={forexAccDetails}
            accountDetails={data.data.data.UserData}
          />
        </div>
      )}
    </>
  );
};

export default ForexAccountDetails;
