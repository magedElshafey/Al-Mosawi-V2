import React from "react";
import style from "./Conditions.module.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import close from "../../../../assets/cross.png";
import right from "../../../../assets/check.png";
const Conditions = ({ data }) => {
  console.log("this is conditons", data);
  return (
    <div className="py-3">
      <p
        className="mt-0 p-0"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />

      {data.items.map((item, index) => (
        <div key={index} className="d-flex   mb-2 gap-2">
          {item.type === "true" ? (
            <img alt="icon" src={right} className={`${style.icon} mt-2`} />
          ) : (
            <img alt="icon" src={close} className={`${style.icon} mt-2`} />
          )}
          <p className="m-0 p-0">{item.item}</p>
        </div>
      ))}
    </div>
  );
};

export default Conditions;
