import React from "react";
import Slider from "../components/home/slider/Slider";
import Tadawl from "../components/home/tadawl/Tadawl";
import WeOffer from "../components/home/weOffer/WeOffer";
import Courses from "../components/home/courses/Courses";
import Video from "../components/home/video/Video";
import OurPartner from "../components/home/partner/OurPartner";
import Stats from "../components/home/stats/Stats";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
const Home = ({ slider, tadwal, weOffer, courses }) => {
  const fetchData = () => {
    return request({ url: "/settings" });
  };
  const { isLoading, data } = useQuery("home-page", fetchData, {
    cacheTime: 12000,
    staleTime: 12000,
  });
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="main">
          <Slider slider={data.data.data.slider} />
          <Stats />
          <Tadawl tadwal={data.data.data.trade} />
          <WeOffer weOffer={data.data.data.adSections} />
          <Courses courses={courses} />
          <Video data={data.data.data.adSections2} />
          <OurPartner />
        </div>
      )}
    </>
  );
};

export default Home;
