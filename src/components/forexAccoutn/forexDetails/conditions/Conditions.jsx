import React from "react";
import style from "./Conditions.module.css";
import DarkGreenTitle from "../../../utils/darkGreenTitle/DarkGreenTitle";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
const Conditions = ({ data }) => {
  return (
    <div className="pb-4">
      <DarkGreenTitle title={data.title} />
      <div className="pt-4">
        {data.details.map((item, index) => (
          <div key={index} className="d-flex align-items-center gap-1 my-4">
            {item.isTrue ? (
              <IoCheckmarkCircleSharp className="green" size={20} />
            ) : (
              <AiOutlineClose size={20} className={style.false} />
            )}
            <p className="m-0 p-0 fw-bold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conditions;
