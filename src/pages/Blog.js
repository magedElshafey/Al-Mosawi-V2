import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import BlogDetails from "../components/blog/BlogDetails";
const Blog = ({ blogs }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const handleInitiating = () => {
      const singleBlog = blogs.filter((blog) => blog.id === parseInt(id));
      setBlog(...singleBlog);
    };
    handleInitiating();
  }, [blogs, id]);
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        title="المدونة"
      />
      <div className="container py-5">
        <BlogDetails data={blog} />
      </div>
    </div>
  );
};

export default Blog;
