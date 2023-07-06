import React, { useState } from "react";
import style from "./FilterBlogs.module.css";
import { blogsFilter } from "../../../fakers/data.js";
const FilterBlogs = () => {
  const [activeId, setActiveId] = useState(null);
  const handleClick = (id) => setActiveId(id);
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
        {blogsFilter.map((item, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            className={`${style.btn} ${
              activeId === index ? style.active : null
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBlogs;
