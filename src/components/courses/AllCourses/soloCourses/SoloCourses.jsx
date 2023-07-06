import React from "react";
import CourseRow from "../../../utils/courseRow/CourseRow";
const SoloCourses = ({ expertCourses }) => {
  const newCount = expertCourses.map((item) => Math.floor(item.ratio / 25));
  return (
    <div className="mb-4">
      <h3 className="fs-4 fw-bolder mb-3 mx-0 mt-0 p-0">
        الدورات التعليمية منفردة
      </h3>

      <div className="py-3">
        {expertCourses.map((item, index) => (
          <CourseRow item={item} key={index} newCount={newCount} />
        ))}
      </div>
    </div>
  );
};

export default SoloCourses;
