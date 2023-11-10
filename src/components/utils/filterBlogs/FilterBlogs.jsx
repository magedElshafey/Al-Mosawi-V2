import React, { useState } from "react";
import style from "./FilterBlogs.module.css";
const FilterBlogs = ({ data }) => {
  const [activeId, setActiveId] = useState(null);
  const handleClick = (id) => setActiveId(id);
  return (
    <div className="container py-3">
      <div className="d-flex  flex-wrap align-items-center gap-2 gap-md-2">
        {data.map((item, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            className={`${style.btn} ${
              activeId === index ? style.active : null
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBlogs;
