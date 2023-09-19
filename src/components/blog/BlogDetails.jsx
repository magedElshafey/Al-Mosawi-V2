import React from "react";
import style from "./blogDetails.module.css";
const BlogDetails = ({ data }) => {
  return (
    <div>
      <div className="row justify-content-center py-4">
        <div className={`col-12 col-md-8 ${style.imgContainer}`}>
          <p
            className={`mx-0 mt-0 mb-4 p-0 shamel fs26 ${style.title}  fw-bold`}
          >
            {data.title}
          </p>
          <img
            alt="single_blog / img"
            loading="lazy"
            src={data.img}
            className={`mb-3 ${style.mainImg}`}
          />
          <div className="py-3">
            {data.desc1 ? <p className="m-0 p-0">{data.desc1}</p> : null}
            {data.desc2 ? (
              <p
                className="m-0 p-0 "
                dangerouslySetInnerHTML={{ __html: data.desc2 }}
              ></p>
            ) : null}
            {data.desc3 ? <p className="mx-0 my-3 p-0 ">{data.desc3}</p> : null}
            {data.desc4 ? <p className="mx-0 my-3 p-0">{data.desc4}</p> : null}
            {data.desc5 ? <p className="mx-0 my-3 p-0">{data.desc5}</p> : null}
            {data.desc6 ? <p className="mx-0 my-3 p-0">{data.desc6}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
