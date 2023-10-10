import React from "react";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useTranslation } from "react-i18next";
const ReqPaper = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div>
      <p
        className="pt-4  mx-0 p-0 "
        dangerouslySetInnerHTML={{ __html: data.title }}
      />

      {data.items.map((item, index) => (
        <div key={index} className="d-flex align-items-center gap-1 my-2">
          {i18n.language === "ar" ? (
            <BsFillArrowLeftCircleFill size={15} className="green" />
          ) : (
            <BsFillArrowRightCircleFill size={15} className="green" />
          )}

          <p className=" m-0 p-0">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ReqPaper;
