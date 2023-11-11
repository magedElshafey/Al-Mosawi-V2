import React from "react";
import Hero from "../components/utils/hero/Hero";
import img from "../assets/forex.png";
import ForexForm from "../components/forexAccoutn/forexForm/ForexForm";
import ForexDetails from "../components/forexAccoutn/forexDetails/ForexDetails";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
const ForexAccount = ({ phoneNum }) => {
  const { i18n } = useTranslation();
  const fetchData = () => {
    return request({ url: "/forex" });
  };
  const { isLoading, data } = useQuery("forex-page", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Hero
            isBigHero={false}
            isSmallHero={true}
            isMediumHero={false}
            title={i18n.language === "ar" ? "إنشاء حساب" : "create account"}
            isStatic={true}
            desc={
              i18n.language === "ar"
                ? "أنشئ حساب.. اودع ... تداول.. اربح"
                : "Create an account... deposit... trade... win"
            }
            pageName={i18n.language === "ar" ? "إنشاء حساب" : "create account"}
            img={img}
          />
          <div className="container py-5">
            <div className="row gap-5">
              <div className="col-12 col-md-7 ">
                <ForexForm />
              </div>
              <div className="col-12 col-md-4 ">
                <ForexDetails
                  paper={data.data.data.mainData.paperRequirments}
                  accountRequirments={
                    data.data.data.mainData.accountRequirments
                  }
                  phoneNum={phoneNum}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForexAccount;
