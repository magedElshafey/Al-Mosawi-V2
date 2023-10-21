import React, { useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import Header from "../components/utils/header/Header";
import AccountDetails from "../components/account/details/AccountDetails";
import Withdraw from "../components/account/Withdraw/Withdraw";
import DownloadPlane from "../components/account/download/DownloadPlane.jsx";
import PromoCode from "../components/account/code/PromoCode";
import ContactUs from "../components/utils/contactus/ContactUs";
import { useTranslation } from "react-i18next";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
const Account = ({ monthlyWithdraw, phoneNum }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/user/my-profile", headers });
  };
  const { isLoading, data } = useQuery("account-normal-user-page", fetchData, {
    cacheTime: 12000,
    staleTime: 12000,
  });
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
            img={heroImg}
            title={
              i18n.language === "ar" ? "معلومات الحساب" : "account details"
            }
          />
          <Header />
          <div className="container pb-5">
            <div className="row gap-5">
              <div className="col-12  col-md-7">
                <AccountDetails accountDetails={data.data.data} />
                <Withdraw monthlyWithdraw={monthlyWithdraw} />
              </div>
              <div className="col-12   col-md-4 mx-auto">
                <DownloadPlane />
                <PromoCode />
                <ContactUs phoneNum={phoneNum} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
