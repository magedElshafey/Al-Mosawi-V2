import React from "react";
import { reqPaper, conditions } from "../../../fakers/data.js";
import ReqPaper from "./reqPapers/ReqPaper";
import Conditions from "./conditions/Conditions";
import ContactUs from "../../utils/contactus/ContactUs";

const ForexDetails = ({ phoneNum }) => {
  return (
    <div>
      <ContactUs phoneNum={phoneNum} />
      <ReqPaper data={reqPaper} />
      <Conditions data={conditions} />
    </div>
  );
};

export default ForexDetails;
