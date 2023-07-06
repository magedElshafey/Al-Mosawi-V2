import React from "react";
import { dealsDetails } from "../../../fakers/data";
const DealsDetails = () => {
  return (
    <div>
      <h3 className="mx-0 mt-0 fs36 mb-1 p-0  text-uppercase text-white fw-bolder">
        {dealsDetails.title}
      </h3>
      <div className="d-flex align-items-center  gap-3 text-white roboto  mb-5">
        <span>تم النشر : {dealsDetails.published}</span>
        <span>تم الانتهاء : {dealsDetails.finished}</span>
      </div>
      <span className="d-inline-block mb-3 text-white roboto fs22">
        الشرح :{" "}
      </span>
      <p className="mx-0 mt-0 p-0 mb-4 lh text-white roboto fs18">
        {dealsDetails.descOne}
      </p>
      <p className="mx-0 mt-0 p-0  lh text-white roboto fs18">
        {dealsDetails.descTwos}
      </p>
    </div>
  );
};

export default DealsDetails;
