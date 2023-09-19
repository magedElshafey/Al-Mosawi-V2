import React, { useState } from "react";
import style from "./how.module.css";
import { how } from "../../../fakers/data";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const How = () => {
  const [activeId, setActiveId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = (id) => {
    if (activeId === id) {
      setShowDetails(true);
    } else {
      setShowDetails(false);
    }
  };
  const handleHideDetails = (id) => {
    if (activeId === id) {
      setShowDetails(false);
    }
  };
  return (
    <div className="py-5 container">
      {how.map((item, index) => (
        <div
          className={`mb-4 col-12 col-md-6  p-3 ${style.mainContainer} d-flex align-items-center justify-content-between`}
          key={index}
        >
          <p className="fw-bold fs24 shamel green m-0 p-0">{item.title}</p>
          {activeId === index && showDetails ? (
            <MdKeyboardArrowUp
              onClick={() => {
                setActiveId(index);
                handleHideDetails(index);
              }}
              className="pointer"
              size={30}
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              onClick={() => {
                setActiveId(index);
                handleShowDetails(index);
              }}
              className="pointer"
              size={30}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default How;
