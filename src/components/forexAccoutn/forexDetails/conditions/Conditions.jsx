import React from "react";
import style from "./Conditions.module.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
const Conditions = ({ data }) => {
  return (
    <div className="py-3">
      <p className="mt-0 p-0 green fw-bolder shamel fs20">{data.title}</p>

      <div>
        {data.details.map((item, index) => (
          <div key={index} className="d-flex align-items-center mb-2 gap-1">
            {item.isTrue ? (
              <IoCheckmarkCircleSharp className="green" size={20} />
            ) : (
              <AiOutlineClose size={20} className={style.false} />
            )}
            <p className="m-0 p-0">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conditions;
