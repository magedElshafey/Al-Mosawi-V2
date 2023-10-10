import React from "react";
import { dealsDetails } from "../../../fakers/data";
const DealsDetails = ({ data }) => {
  return (
    <div>
      <h3 className="mx-0 mt-0 fs28 shamel mb-1 p-0  text-uppercase text-white fw-bolder">
        {data.title}
      </h3>
      <div className="d-flex align-items-center  gap-3 text-white  mb-3">
        <span>تم النشر : {data.Recommendation.update_at}</span>
        <span>تم الانتهاء : {data.Recommendation.end_date}</span>
      </div>
      <span className="d-inline-block mb-2 text-white">الشرح : </span>
      <p className="mx-0 mt-0 p-0 mb-2 text-white">
        {data.Recommendation.details}
      </p>
    </div>
  );
};

export default DealsDetails;
