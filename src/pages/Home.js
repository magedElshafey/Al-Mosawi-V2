import React from "react";
import Slider from "../components/home/slider/Slider";
import Tadawl from "../components/home/tadawl/Tadawl";
import WeOffer from "../components/home/weOffer/WeOffer";
import Courses from "../components/home/courses/Courses";
import Video from "../components/home/video/Video";
import OurPartner from "../components/home/partner/OurPartner";
import Stats from "../components/home/stats/Stats";

const Home = ({ slider, tadwal, weOffer, courses }) => {
  return (
    <div className="main">
      <Slider slider={slider} />
      <Stats />
      <Tadawl tadwal={tadwal} />
      <WeOffer weOffer={weOffer} />
      <Courses courses={courses} />
      <Video />
      <OurPartner />
    </div>
  );
};

export default Home;
