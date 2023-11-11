import React from "react";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import ConsultingIntro from "../components/consulting/consultingIntro/ConsultingIntro";
import ChooseAppointment from "../components/bookingPage/ChooseAppointment";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
const Booking = () => {
  const fetchData = () => {
    return request({ url: "/consultation" });
  };
  const { isLoading, data } = useQuery("booking-page", fetchData);
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const nextDay = +day + 1;
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const today = `${year}-${month}-${day}`;
  const tomorrow = `${year}-${month}-${nextDay}`;
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
            img={data.data.consultingPage.image}
            title={data.data.consultingPage.header_title}
            desc={data.data.consultingPage.header_des}
          />
          <Header />
          <div className="container py-5">
            <ConsultingIntro />
            <ChooseAppointment
              tomorrow={tomorrow}
              today={today}
              title={data.data.consultingPage.form_title}
              desc={data.data.consultingPage.form_des}
              data={data.data.schedule}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
