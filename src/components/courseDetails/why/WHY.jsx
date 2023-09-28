import React, { useState } from "react";
import style from "./why.module.css";
const WHY = ({ data }) => {
  const [activeId, setActiveId] = useState(1);
  return (
    <div>
      <div
        className={`d-flex gap-5 align-items-center ${style.questionContainer} `}
      >
        {data.map((item, index) => (
          <div key={index}>
            <p
              onClick={() => setActiveId(index)}
              className={` shamel fs18 pointer  mx-0 fw-bold    ${
                index === activeId ? style.active : null
              }`}
            >
              {item.why_title}
            </p>
          </div>
        ))}
      </div>

      <div>
        {activeId === 0 && (
          <p className={`py-2   text-center text-md-end`}>{data[0]?.why_des}</p>
        )}
        {activeId === 1 && (
          <p className={`py-2    text-center text-md-end`}>
            {data[1]?.why_des}
          </p>
        )}
      </div>
    </div>
  );
};

export default WHY;
