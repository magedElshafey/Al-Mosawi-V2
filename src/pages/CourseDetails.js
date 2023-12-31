import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroCourse from "../components/utils/heroCourse/HeroCourse";
import AboutCourse from "../components/courseDetails/aboutCourse/AboutCourse";
import Advantages from "../components/courseDetails/advantages/Advantages";
import CourseTwo from "../components/courseDetails/coursesDetails/courseTwo/CourseTwo";
import style from "../components/courseDetails/coursesDetails/coursesDetails.module.css";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import Reviews from "../components/courseDetails/reviews/Reviews";
import { useQuery } from "react-query";
const CourseDetails = ({ fixedContainer }) => {
  const params = useParams();
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

  useEffect(() => {
    const hasCode = currentUrl.includes("?r=");

    if (hasCode) {
      const rQueryParamIndex = currentUrl.indexOf("?r=");
      const valueStartIndex = rQueryParamIndex + 3;
      const value = currentUrl.substring(valueStartIndex);
      window.localStorage.setItem("codeFromCourses", JSON.stringify(value));
    }
  }, []);
  const fetchData = (id) => {
    return request({ url: `course/${id}` });
  };
  const { isLoading, data } = useQuery(["course details-page", params.id], () =>
    fetchData(params.id)
  );
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <HeroCourse
            product={data.data.data}
            title={data.data.data.title}
            desc={data.data.data.header_des}
            video={data.data.data.header_video}
            img={data.data.data.header_img}
            price={data.data.data.price}
            afterDisscount={data.data.data.price_after_discount}
            hours={data.data.data.hours}
            level={data.data.data.course_level}
            duration={data.data.data.leve_duration}
            fixedContainer={fixedContainer}
          />
          <div className="container my-4">
            <div className="row">
              <div className="col-12 col-md-11 col-lg-9">
                <div
                  className={`mb-4 ${
                    parseInt(params.id) === 2 || parseInt(params.id) === 3
                      ? style.border
                      : null
                  }`}
                >
                  <AboutCourse
                    title={data.data.data.content_title}
                    desc={data.data.data.content_des}
                  />

                  <CourseTwo data={data.data.data.CourseClasses} />
                </div>
                <Advantages
                  img={data.data.data.feature_img}
                  title={data.data.data.feature_title}
                  desc={data.data.data.feature_des}
                  why={data.data.data.CourseImportance}
                />

                <Reviews data={data.data.data.CourseReview} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
