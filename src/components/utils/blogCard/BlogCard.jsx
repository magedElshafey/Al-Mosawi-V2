import React from "react";
import style from "./blogCard.module.css";
import { Link } from "react-router-dom";
const BlogCard = ({ item }) => {
  return (
    <div className={`p-0 ${style.mainContainer}`}>
      <Link to={`/blogs/${item.id}`}>
        <img
          src={item.img}
          alt="blog/img"
          className={style.mainImg}
          loading="lazy"
        />
      </Link>
      <div className="p-4 text-white lh">{item.title}</div>
      <div className={`m-0 p-0 ${style.date}`}>
        <p
          className="d-flex flex-column  align-items-center"
          dangerouslySetInnerHTML={{ __html: item.date }}
        ></p>
      </div>
    </div>
  );
};

export default BlogCard;
