import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import BlogDetails from "../components/blog/BlogDetails";
import Header from "../components/utils/header/Header";
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
      <Header />
      <div className="container py-4">
        <BlogDetails data={blog} />
      </div>
    </div>
  );
};

export default Blog;
