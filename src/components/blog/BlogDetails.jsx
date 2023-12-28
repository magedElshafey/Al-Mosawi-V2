import React from "react";
import style from "./blogDetails.module.css";
const BlogDetails = ({ data }) => {
  return (
    <div>
      <div className="row justify-content-center py-4">
        <div className={`col-12 col-md-10`}>
          <p
            className={`mx-0 mt-0 mb-4 p-0 shamel fs26 ${style.title}  fw-bold`}
          >
            {data.title}
          </p>
          <img
            alt="single_blog / img"
            loading="lazy"
            src={data.thumbnail}
            className={`mb-3 ${style.mainImg}`}
          />
          <div className="py-3">
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
