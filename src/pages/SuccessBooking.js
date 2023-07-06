import React from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import SuccessBookingDetails from "../components/SuccessBooking/SuccessBookingDetails";
const SuccessBooking = ({ handleChangeTitle }) => {
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        title="الاستشارات"
        desc="يمكنك كتابة سؤالك وسيتم الرد عليك في اقرب وقت ممكن من أ أحمد الموسوي"
      />
      <Header handleChangeTitle={handleChangeTitle} />
      <div className="container py-5">
        <SuccessBookingDetails />
      </div>
    </div>
  );
};

export default SuccessBooking;
