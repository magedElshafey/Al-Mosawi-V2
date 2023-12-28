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
import git from "../assets/gift-svgrepo-com.svg";
import BTN from "../components/utils/btn/BTN.jsx";
import toast from "react-hot-toast";
const Account = ({ monthlyWithdraw, phoneNum }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");
  const type = JSON.parse(localStorage.getItem("type"));
  const accountType = JSON.parse(localStorage.getItem("accountType"));
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
  const { isLoading, data } = useQuery("account-normal-user-page", fetchData);
  const askForCopon = () => {
    toast.success(
      i18n.language === "ar"
        ? "تم ارسال طلبك بنجاح"
        : "your request sent succfully"
    );
  };
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
            accountDetails={data.data.data}
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
                  <Withdraw
                    winnerName={data.data.winner}
                    monthlyWithdraw={monthlyWithdraw}
                  />
                ) : null}
              </div>
              <div className="col-12   col-md-4 mx-auto">
                {accountType === "vip_max" ||
                accountType === "pro_classic_max" ? (
                  <DownloadPlane link={data.data.data.capitalManagement} />
                ) : null}

                <div className="my-3 d-flex flex-column align-items-center gap-2 cPcontainer p-3 mb-5">
                  <img alt="git" src={git} />
                  <p className="m-0 p-0">
                    {i18n.language === "ar"
                      ? "إستخدم الكود في شراء خدماتنا"
                      : "Use the code to purchase our services"}
                  </p>
                  <BTN
                    action={askForCopon}
                    text={
                      i18n.language === "ar" ? "طلب كوبون" : "ask for copoun"
                    }
                  />
                </div>
                <div className="mt-3">
                  <ContactUs phoneNum={phoneNum} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
