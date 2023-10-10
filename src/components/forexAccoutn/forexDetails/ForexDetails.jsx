import React from "react";
import ReqPaper from "./reqPapers/ReqPaper";
import Conditions from "./conditions/Conditions";
import ContactUs from "../../utils/contactus/ContactUs";

const ForexDetails = ({ phoneNum, paper, accountRequirments }) => {
  return (
    <div>
      <ContactUs phoneNum={phoneNum} />
      <ReqPaper data={paper} />
      <Conditions data={accountRequirments} />
    </div>
  );
};

export default ForexDetails;
