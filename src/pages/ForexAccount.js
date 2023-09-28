import React from "react";
import Hero from "../components/utils/hero/Hero";
import img from "../assets/forex.png";
import ForexForm from "../components/forexAccoutn/forexForm/ForexForm";
import ForexDetails from "../components/forexAccoutn/forexDetails/ForexDetails";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
const ForexAccount = ({ phoneNum }) => {
  const fetchData = () => {
    return request({ url: "/forex" });
  };
  const { isLoading, data } = useQuery("special-account-page", fetchData, {
    cacheTime: 12000,
    staleTime: 12000,
  });
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        title="إنشاء حساب"
        desc="أنشئ حساب.. اودع ... تداول.. اربح"
        pageName="create account"
        img={img}
      />
      <div className="container py-5">
        <div className="row gap-5">
          <div className="col-12 col-md-7 ">
            <ForexForm />
          </div>
          <div className="col-12 col-md-4 ">
            <ForexDetails phoneNum={phoneNum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexAccount;
