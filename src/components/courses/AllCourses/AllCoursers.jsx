import React from "react";
import ExpertsLevel from "./expertsLevel/ExpertsLevel";
import SoloCourses from "./soloCourses/SoloCourses";
const AllCoursers = ({ expertCourses }) => {
  return (
    <div>
      <ExpertsLevel expertCourses={expertCourses} />
      <SoloCourses expertCourses={expertCourses} />
    </div>
  );
};

export default AllCoursers;
