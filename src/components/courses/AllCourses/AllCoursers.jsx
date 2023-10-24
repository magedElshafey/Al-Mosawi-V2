import React from "react";
import ExpertsLevel from "./expertsLevel/ExpertsLevel";
const AllCoursers = ({ expertCourses }) => {
  return (
    <div className="mainInfo p-3">
      <ExpertsLevel expertCourses={expertCourses} />
      
    </div>
  );
};

export default AllCoursers;
