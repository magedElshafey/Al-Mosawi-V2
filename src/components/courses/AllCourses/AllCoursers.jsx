import React from "react";
import ExpertsLevel from "./expertsLevel/ExpertsLevel";
import SoloCourses from "./soloCourses/SoloCourses";
const AllCoursers = ({ expertCourses }) => {
  return (
    <div className="mainInfo p-3">
      <ExpertsLevel expertCourses={expertCourses} />
      <SoloCourses expertCourses={expertCourses} />
    </div>
  );
};

export default AllCoursers;
