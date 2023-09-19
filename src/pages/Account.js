import React from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import Header from "../components/utils/header/Header";
import AccountDetails from "../components/account/details/AccountDetails";
import Withdraw from "../components/account/Withdraw/Withdraw";
import DownloadPlane from "../components/account/download/DownloadPlane.jsx";
import PromoCode from "../components/account/code/PromoCode";
import ContactUs from "../components/utils/contactus/ContactUs";
const Account = ({ accountDetails, monthlyWithdraw }) => {
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        title="معلومات الحساب"
      />
      <Header />
      <div className="container py-5">
        <div className="row gap-5">
          <div className="col-12  col-md-7">
            <AccountDetails accountDetails={accountDetails} />
            <Withdraw monthlyWithdraw={monthlyWithdraw} />
          </div>
          <div className="col-12   col-md-4 mx-auto">
            <DownloadPlane />
            <PromoCode />
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
