import React from "react";
import Slider from "../components/home/slider/Slider";
import Tadawl from "../components/home/tadawl/Tadawl";
import WeOffer from "../components/home/weOffer/WeOffer";
import Courses from "../components/home/courses/Courses";
import Video from "../components/home/video/Video";
import OurPartner from "../components/home/partner/OurPartner";
import Stats from "../components/home/stats/Stats";

const Home = ({ courses, slider, tadwal, weOffer, video, partner }) => {
  return (
    <>
      <div>
        <Slider slider={slider} />
        <Stats />
        <Tadawl tadwal={tadwal} />
        <WeOffer weOffer={weOffer} />
        <Courses courses={courses} />
        <Video data={video} />
        <OurPartner data={partner} />
      </div>
    </>
  );
};

export default Home;
