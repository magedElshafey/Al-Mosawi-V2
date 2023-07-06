import React from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import ConsultingIntro from "../components/consulting/consultingIntro/ConsultingIntro";
import ConsultingAppointments from "../components/consulting/consultingAppointments/ConsultingAppointments";
import Booking from "../components/consulting/booking/Booking";
import ContactUs from "../components/utils/contactus/ContactUs";
const Consulting = ({
  heroTitle,
  handleChangeTitle,
  nextAppointments,
  canclledAppointments,
}) => {
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
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-8 mb-3 mb-md-0">
            <ConsultingIntro />
            <ConsultingAppointments
              nextAppointments={nextAppointments}
              canclledAppointments={canclledAppointments}
            />
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <Booking />
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
