import React from "react";
import HeroMax from "../components/Max/hero/HeroMax";
import MaxCard from "../components/Max/maxCard/MaxCard";
import MaxAdvantages from "../components/Max/maxAdvantages/MaxAdvantages";
import Pro from "../components/Max/pro/Pro";
import WhyTickmill from "../components/Max/whyTickmill/WhyTickmill";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";

const MAX = () => {
  const fetchData = () => {
    return request({ url: "/forex" });
  };
  const { isLoading, data } = useQuery("special-account-page", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <HeroMax
            mainImg={data.data.data.mainAccounts.header.Image}
            maxImg={data.data.data.maxAccounts.header.Image}
            mainTitle={data.data.data.mainAccounts.header.headerTitle}
            maxTitle={data.data.data.maxAccounts.header.headerTitle}
            mainHeaderDescription={
              data.data.data.mainAccounts.header.headerDescription
            }
            maxHeaderDescription={
              data.data.data.maxAccounts.header.headerDescription
            }
          />
          <MaxCard
            maxTitle={data.data.data.maxAccounts.header.title}
            maxDesc={data.data.data.maxAccounts.header.des}
            mainTitle={data.data.data.mainAccounts.header.title}
            mainDesc={data.data.data.mainAccounts.header.des}
            accounts={data.data.data.accounts}
          />
          <MaxAdvantages
            mainAdvantage={data.data.data.mainAccounts.pros}
            maxAdvantage={data.data.data.maxAccounts.pros}
          />
          <Pro
            mainClassic={data.data.data.mainAccounts.proClass}
            mainVip={data.data.data.mainAccounts.proVip}
            maxClassic={data.data.data.maxAccounts.proClass}
            maxVip={data.data.data.maxAccounts.proVip}
          />
          <WhyTickmill
            faqs={data.data.data.mainData.Faq}
            paper={data.data.data.mainData.deposit}
          />
        </div>
      )}
    </>
  );
};

export default MAX;
