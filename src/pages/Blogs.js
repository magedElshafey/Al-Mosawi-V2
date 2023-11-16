import React, { useState, useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import BlogCard from "../components/utils/blogCard/BlogCard";
import FilterBlogs from "../components/utils/filterBlogs/FilterBlogs";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const [activeId, setActiveId] = useState("");
  const [isLoadingFilterChange, setIsLoadingFilterChange] = useState(false);
  const { i18n } = useTranslation();
  useEffect(() => {
    if (activeId !== "") {
      setIsLoadingFilterChange(true);

      fetchData().then(() => {
        setIsLoadingFilterChange(false);
      });
    }
  }, [activeId]);
  const fetchData = () => {
    let url = "/blogByCategory";
    if (activeId) {
      url += `/${activeId}`;
    }

    return request({ url });
  };
  const { isLoading, data, refetch } = useQuery("blogs-page", fetchData);
  return (
    <>
      {isLoading || isLoadingFilterChange ? (
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
          <FilterBlogs
            setActiveId={setActiveId}
            activeId={activeId}
            data={data.data.blogCategorylist}
            refetch={refetch}
          />
          <div className="container">
            {data.data.data.length ? (
              <div className="mt-3 d-flex flex-wrap align-items-center gap-3 justify-content-center ">
                {data.data.data.map((blog, index) => (
                  <BlogCard key={index} item={blog} />
                ))}
              </div>
            ) : (
              <p className="my-5 fw-bolder d-flex align-items-center justify-content-center">
                {i18n.language === "ar"
                  ? "لا يوجد مقالات في هذا القسم"
                  : "no blogs yet"}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
