import React from "react";
import DarkGreenTitle from "../../../utils/darkGreenTitle/DarkGreenTitle";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ReqPaper = ({ data }) => {
  return (
    <div className="my-5">
      <DarkGreenTitle title={data.title} />
      {data.details.map((item, index) => (
        <div key={index} className="d-flex align-items-center gap-1 my-4">
          <BsFillArrowLeftCircleFill size={20} className="green" />
          <p className="fw-bold m-0 p-0">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ReqPaper;
