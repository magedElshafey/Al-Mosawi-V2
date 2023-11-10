import React from "react";
import style from "./blogCard.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BlogCard = ({ item }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={` p-0   col-12 col-md-5  col-lg-4 mb-3 ${style.mainContainer}`}
    >
      <Link to={`/blogs/${item.id}`}>
        <img
          src={item.thumbnail}
          alt="blog/img"
          className={style.mainImg}
          loading="lazy"
        />
      </Link>
      <div className="p-4 text-white lh">{item.title}</div>
      <div className={`m-0 p-0 ${style.date}`}>
        <div className="d-flex flex-column text-white gap-1  align-items-center">
          <p className="m-0 p-0">{item.Publish_year}</p>
          <p className="m-0 p-0">
            {i18n.language === "en"
              ? item.Publish_month_en
              : item.Publish_month_ar}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
