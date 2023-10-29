import React, { useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import Header from "../components/utils/header/Header";
import AccountDetails from "../components/account/details/AccountDetails";
import Withdraw from "../components/account/Withdraw/Withdraw";
import DownloadPlane from "../components/account/download/DownloadPlane.jsx";
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
  const type = JSON.parse(localStorage.getItem("accountType"));
  const isTickmill = JSON.parse(localStorage.getItem("tickmillUser"));
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
            isStatic={true}
            title={
              i18n.language === "ar" ? "معلومات الحساب" : "account details"
            }
          />
          <Header
            title={
              i18n.language === "ar" ? "معلومات الحساب" : "account details"
            }
          />
          <div className="container pb-5">
            <div className="row gap-5">
              <div className="col-12  col-md-7">
                <AccountDetails
                  type={type}
                  accountDetails={data.data.data}
                  isTickmill={isTickmill}
                />
                {isTickmill ? (
                  <Withdraw monthlyWithdraw={monthlyWithdraw} />
                ) : null}
              </div>
              <div className="col-12   col-md-4 mx-auto">
                {type === "vip_max" ||
                  (type === "pro_classic_max" ? <DownloadPlane /> : null)}
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
