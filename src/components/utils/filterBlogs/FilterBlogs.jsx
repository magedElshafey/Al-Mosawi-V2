import React from "react";
import style from "./FilterBlogs.module.css";
import { useTranslation } from "react-i18next";
const FilterBlogs = ({ data, setActiveId, activeId, refetch }) => {
  const { i18n } = useTranslation();
  const handleClick = (id) => {
    setActiveId(id);
    refetch();
  };
  return (
    <div className="container py-3">
      <div className="d-flex  flex-wrap align-items-center gap-2 gap-md-2">
        {data.map((item, index) => (
          <button
            onClick={() => handleClick(item.id)}
            key={index}
            className={`${style.btn} ${
              activeId === item.id ? style.active : null
            }`}
          >
            {item.name}
          </button>
        ))}
        <button
          onClick={() => handleClick("")}
          className={`${style.btn} ${activeId === "" ? style.active : null}`}
        >
          {i18n.language === "ar" ? "جميع المدونات" : "all blogs"}
        </button>
      </div>
    </div>
  );
};

export default FilterBlogs;
