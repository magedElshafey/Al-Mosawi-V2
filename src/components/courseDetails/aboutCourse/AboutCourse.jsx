import React from "react";
const AboutCourse = ({ title, desc }) => {
  return (
    <div className="py-3 overflow-hidden">
      <div className="row ">
        <div className="col-12">
          <p
            className=" m-0 p-0 "
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <div>
            <p className="m-0 p-0" dangerouslySetInnerHTML={{ __html: desc }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
