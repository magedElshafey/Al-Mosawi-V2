import React from "react";
import style from "./location.module.css";
const Location = ({ map, quote }) => {
  return (
    <div className="container py-3">
      <div
        className="w-100 text-center mb-3 mt-0 mx-0 p-0"
        dangerouslySetInnerHTML={{ __html: quote }}
      />
      <iframe
        title="Map"
        width="100%"
        height="400"
        frameBorder="0"
        src={map}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Location;
