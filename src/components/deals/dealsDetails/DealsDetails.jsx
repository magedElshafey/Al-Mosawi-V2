import React from "react";
import { dealsDetails } from "../../../fakers/data";
const DealsDetails = () => {
  return (
    <div>
      <h3 className="mx-0 mt-0 fs28 shamel mb-1 p-0  text-uppercase text-white fw-bolder">
        {dealsDetails.title}
      </h3>
      <div className="d-flex align-items-center  gap-3 text-white  mb-3">
        <span>تم النشر : {dealsDetails.published}</span>
        <span>تم الانتهاء : {dealsDetails.finished}</span>
      </div>
      <span className="d-inline-block mb-2 text-white">الشرح : </span>
      <p className="mx-0 mt-0 p-0 mb-2 text-white">{dealsDetails.descOne}</p>
      <p className="mx-0 mt-0 p-0  text-white">{dealsDetails.descTwos}</p>
    </div>
  );
};

export default DealsDetails;
