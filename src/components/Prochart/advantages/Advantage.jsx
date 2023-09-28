import React from "react";
import style from "./advantage.module.css";

import mob from "../../../assets/MOsawi-mob@2x.png";
const Advantage = ({ data, main }) => {
  return (
    <div ref={main} className="py-5">
      <div className={`px-2 pt-4 pb-2 ${style.mainContainer}`}>
        <div className="text-center mb-3">
          <p className={`mx-0 my-0  p-0 green  fw-bold shamel  fs28`}>
            {data.mainTitle}
          </p>
          <p className={`mt-2 mb-0 mx-0 p-0  fs18`}>{data.mainDes}</p>
        </div>
        <div className={` row p-4  ${style.mobContainer}`}>
          <div className="col-12 col-md-5 mb-2 mb-md-0">
            <p className={`m-0 p-0 fw-bold green shamel fs36`}>
              {data.secTitle}
            </p>
            <p className={`p-0`}>{data.secDes}</p>
            <div className="mt-2">
              <div dangerouslySetInnerHTML={{ __html: data.contentDes }} />
            </div>
          </div>
          <div className={`col-12 col-md-7 mb-2 mb-md-0 ${style.imgContainer}`}>
            <img
              alt="mob/img"
              src={data.image}
              loading="lazy"
              className={style.mainImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
