import React from "react";
import style from "./blogDetails.module.css";
const BlogDetails = ({ data }) => {
  return (
    <div>
      <p className={`m-0 p-0 fs-4 ${style.title} text-center fw-bold`}>
        {data.title}
      </p>
      <div className="row justify-content-center py-3">
        <div className={`col-12 col-md-10 ${style.imgContainer}`}>
          <img
            alt="single_blog / img"
            loading="lazy"
            src={data.img}
            className={style.mainImg}
          />
          <div className="py-3">
            {data.desc1 ? <p className="m-0 p-0 lh">{data.desc1}</p> : null}
            {data.desc2 ? (
              <p
                className="m-0 p-0 lh"
                dangerouslySetInnerHTML={{ __html: data.desc2 }}
              ></p>
            ) : null}
            {data.desc3 ? (
              <p className="mx-0 my-3 p-0 lh">{data.desc3}</p>
            ) : null}
            {data.desc4 ? (
              <p className="mx-0 my-3 p-0 lh">{data.desc4}</p>
            ) : null}
            {data.desc5 ? (
              <p className="mx-0 my-3 p-0 lh">{data.desc5}</p>
            ) : null}
            {data.desc6 ? (
              <p className="mx-0 my-3 p-0 lh">{data.desc6}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
