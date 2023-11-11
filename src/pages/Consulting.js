import React, { useEffect, useState } from "react";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import ConsultingIntro from "../components/consulting/consultingIntro/ConsultingIntro";
import ConsultingAppointments from "../components/consulting/consultingAppointments/ConsultingAppointments";
import Booking from "../components/consulting/booking/Booking";
import ContactUs from "../components/utils/contactus/ContactUs";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
const Consulting = ({ handleChangeTitle, phoneNum }) => {
  const navigate = useNavigate();
  const [cancelledAppointments, setCancclledAppointment] = useState([]);
  const [commingAppointments, setCommingAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem("userId"));
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      return;
    }
  }, [user, navigate]);
  const fetchData = () => {
    const headers = {
      userId: user,
    };
    return request({ url: "/consultation/show", headers });
  };
  const { isLoading, data } = useQuery("consultation-page", fetchData, {
    onSuccess: (data) => {
      const newAppointments = data?.data?.appointments?.filter(
        (item) => item.status === 1
      );
      setCommingAppointments(newAppointments);
      const newCanclled = data?.data?.appointments?.filter(
        (item) => item.status === 0
      );
      setCancclledAppointment(newCanclled);
    },
  });
  // const cancelledAppointments = data?.data?.appointments?.filter(
  //   (item) => item.status === 0
  // );

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
          <Header handleChangeTitle={handleChangeTitle} />
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-md-8 mb-3 mb-md-0">
                <ConsultingIntro />
                <ConsultingAppointments
                  nextAppointments={commingAppointments}
                  canclledAppointments={cancelledAppointments}
                />
              </div>
              <div className="col-12 col-md-3 mx-auto mb-3 mb-md-0">
                <Booking />
                <ContactUs phoneNum={phoneNum} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Consulting;
