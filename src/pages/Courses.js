import React from "react";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import heroImg from "../assets/hhh.png";
import AllCoursers from "../components/courses/AllCourses/AllCoursers";
import NewCourses from "../components/courses/newCourses/NewCourses";
const Courses = ({ expertCourses, newCourses }) => {
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        title="الدورات التدريبية"
      />
      <Header />
      <div className="container">
        <div className="row py-3 ">
          <div className="col-12 col-md-8">
            <AllCoursers expertCourses={expertCourses} />
          </div>
          <div className="col-12 col-md-4">
            <NewCourses newCourses={newCourses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
