import React from "react";
import CourseRow from "../../../utils/courseRow/CourseRow";
import { useTranslation } from "react-i18next";

const SoloCourses = ({ expertCourses }) => {
  const newCount = expertCourses.map((item) => Math.floor(item.ratio / 25));
  const [t] = useTranslation();
  return (
    <div>
      <h3 className="fs26 shamel fw-bolder mb-2 mx-0 mt-0 p-0">
        {t("soloCourse")}
      </h3>

      <div>
        {expertCourses.map((item, index) => (
          <CourseRow item={item} key={index} newCount={newCount} />
        ))}
      </div>
    </div>
  );
};

export default SoloCourses;
