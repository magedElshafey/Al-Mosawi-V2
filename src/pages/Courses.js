import React, { useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import heroImg from "../assets/hhh.png";
import AllCoursers from "../components/courses/AllCourses/AllCoursers";
import NewCourses from "../components/courses/newCourses/NewCourses";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Courses = ({ expertCourses, newCourses }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const user = localStorage.getItem("userId");
  useEffect(() => {
    if (user) {
      return;
    } else {
      navigate("/login");
    }
  }, [user, navigate]);
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/paidCourses", headers });
  };
  const { isLoading, data } = useQuery("paid-courses-page", fetchData, {
    cacheTime: 12000,
    staleTime: 12000,
  });
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
            img={heroImg}
            title={i18n.language === "ar" ? "الدورات التدريبية" : "courses"}
          />
          <Header />
          <div className="container">
            <div className="row py-3 ">
              <div className="col-12 col-md-8">
                <AllCoursers expertCourses={data.data.data} />
              </div>
              <div className="col-12 col-md-4">
                <NewCourses newCourses={data.data.newCourses} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
