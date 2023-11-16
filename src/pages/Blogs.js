import React, { useState } from "react";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import BlogCard from "../components/utils/blogCard/BlogCard";
import FilterBlogs from "../components/utils/filterBlogs/FilterBlogs";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const [activeId, setActiveId] = useState(null);
  const { i18n } = useTranslation();

  const fetchData = () => {
    return request({ url: "/blog" });
  };
  const { isLoading, data } = useQuery("blogs-page", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mb-3">
          <Hero
            isBigHero={false}
            isSmallHero={true}
            isMediumHero={false}
            img={data.data.blogHeaderImg}
            title={i18n.language === "en" ? "blogs" : "المدونة"}
            isStatic={true}
          />
          <Header title={i18n.language === "en" ? "blogs" : "المدونة"} />
          <FilterBlogs data={data.data.blogCategorylist} />
          <div className="container">
            <div className="mt-3 d-flex flex-wrap align-items-center gap-3">
              {data.data.data.map((blog, index) => (
                <BlogCard key={index} item={blog} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
