import React, { useState } from "react";
import style from "./why.module.css";
const WHY = ({ data }) => {
  const [activeId, setActiveId] = useState(1);
  return (
    <div className="mt-5">
      <div
        className={`d-flex gap-5 align-items-center ${style.questionContainer} `}
      >
        {data.map((item, index) => (
          <div key={index}>
            <p
              onClick={() => setActiveId(item.id)}
              className={`pointer fs-6 fs-md-4 mx-0 fw-bold    ${
                item.id === activeId ? style.active : null
              }`}
            >
              {item.question}
            </p>
          </div>
        ))}
      </div>
      <div>
        {activeId === 1 && (
          <p
            className={`py-3 lh   roboto ${style.text} text-center text-md-end`}
          >
            {data[0].answer}
          </p>
        )}
        {activeId === 2 && (
          <p
            className={`py-3 lh   roboto ${style.text} text-center text-md-end`}
          >
            {data[1].answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default WHY;
