import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import BlogDetails from "../components/blog/BlogDetails";
import Header from "../components/utils/header/Header";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
const Blog = () => {
  const params = useParams();
  const { i18n } = useTranslation();
  const fetchData = (id) => {
    return request({ url: `blogDetails/${id}` });
  };
  const { isLoading, data } = useQuery(
    ["blog details-page", params.id],
    () => fetchData(params.id),
    {
      cacheTime: 12000,
      staleTime: 12000,
    }
  );
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
            title={i18n.language === "en" ? "blogs" : "المدونة"}
          />
          <Header />
          <div className="container py-4">
            <BlogDetails data={data.data.data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
