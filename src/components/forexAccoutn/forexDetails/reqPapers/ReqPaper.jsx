import React from "react";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ReqPaper = ({ data }) => {
  return (
    <div>
      <p className="pt-4  mx-0 p-0 green fw-bolder shamel fs20">{data.title}</p>

      {data.details.map((item, index) => (
        <div key={index} className="d-flex align-items-center gap-1 my-2">
          <BsFillArrowLeftCircleFill size={20} className="green" />
          <p className=" m-0 p-0">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ReqPaper;
