import React, { useState } from "react";
import style from "./Header.module.css";
import { header } from "../../../fakers/data";
import { Link } from "react-router-dom";
const Header = () => {
  const [clickedLinkId, setClickedLinkId] = useState(null);
  const handleClick = (id, title) => {
    setClickedLinkId(id);
  };
  return (
    <div
      className={`d-flex pt-4 pb-3 justify-content-center align-items-center gap-4 flex-wrap ${style.headerContainer}`}
    >
      {header.map((item, index) => (
        <Link
          onClick={() => handleClick(index, item.title)}
          to={`${item.path}`}
          className={`m-0 p-0  pointer ${style.link} ${
            clickedLinkId === index ? style.active : null
          }`}
          key={index}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
