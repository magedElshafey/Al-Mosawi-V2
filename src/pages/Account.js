import React, { useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import Header from "../components/utils/header/Header";
import AccountDetails from "../components/account/details/AccountDetails";
import Withdraw from "../components/account/Withdraw/Withdraw";
import DownloadPlane from "../components/account/download/DownloadPlane.jsx";
import PromoCode from "../components/account/code/PromoCode";
import ContactUs from "../components/utils/contactus/ContactUs";
import Swal from "sweetalert-react";
import { useTranslation } from "react-i18next";
const Account = ({ accountDetails, monthlyWithdraw }) => {
  const { i18n } = useTranslation();
  // useEffect(() => {
  //   Swal.fire({
  //     title: (
  //       <strong>
  //         {i18n.language === "ar"
  //           ? "تم استلام طلبك بنجاح"
  //           : "Your request has been received successfully"}
  //       </strong>
  //     ),
  //     html: (
  //       <i>
  //         {i18n.language === "ar"
  //           ? "سوف يتم ارسال كلمة المرور علي البريد الالكتروني الذي قمت ب ادخالة"
  //           : "The password will be sent to the email you entered"}
  //       </i>
  //     ),
  //     icon: "success",
  //   });
  // }, []);
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
