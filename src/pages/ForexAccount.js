import React from "react";
import Hero from "../components/utils/hero/Hero";
import img from "../assets/forex.png";
import ForexForm from "../components/forexAccoutn/forexForm/ForexForm";
import ForexDetails from "../components/forexAccoutn/forexDetails/ForexDetails";
const ForexAccount = () => {
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
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <ForexForm />
          </div>
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <ForexDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexAccount;
