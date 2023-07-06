import React from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import ConsultingIntro from "../components/consulting/consultingIntro/ConsultingIntro";
import ChooseAppointment from "../components/bookingPage/ChooseAppointment";
const Booking = ({ chooseAppointment }) => {
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
      <Header/>
      <div className="container py-4">
        <ConsultingIntro />
        <ChooseAppointment data={chooseAppointment} />
      </div>
    </div>
  );
};

export default Booking;
