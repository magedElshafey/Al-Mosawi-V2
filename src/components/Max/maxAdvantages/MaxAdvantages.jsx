import React from "react";
import style from "./maxAdvantages.module.css";
import { useParams } from "react-router-dom";
const MaxAdvantages = ({ mainAdvantage, maxAdvantage }) => {
  const { test } = useParams();
  console.log("this is main", mainAdvantage.features);
  console.log("this is max", maxAdvantage.features);
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div className={`row gap-4 py-5 align-items-center`}>
          <div className="col-12 col-md-3 text-center text-md-end">
            <p
              className="  m-0 p-0"
              dangerouslySetInnerHTML={{
                __html:
                  test === "max"
                    ? maxAdvantage.sectionTitle
                    : mainAdvantage.sectionTitle,
              }}
            />
          </div>
          <div className="col-12 col-md-8">
            <div className="row">
              {test === "max" &&
                maxAdvantage.features.map((item, index) => (
                  <div className="col-12 col-md-6" key={index}>
                    <div className={`mb-5 ${style.titleContainer}`}>
                      <p className="green mx-0 p-0 mb-2  green fs18 shamel fw-bold">
                        {item.title}
                      </p>
                      <p className="m-0 p-0">{item.des}</p>
                    </div>
                  </div>
                ))}
              {test === "special" &&
                mainAdvantage.features.map((item, index) => (
                  <div className="col-12 col-md-6" key={index}>
                    <div className={`mb-5 ${style.titleContainer}`}>
                      <p className="green mx-0 p-0 mb-2  green fs18 shamel fw-bold">
                        {item.title}
                      </p>
                      <p className="m-0 p-0">{item.des}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxAdvantages;
