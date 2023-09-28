import React from "react";
import style from "./ourpartner.module.css";
import { useTranslation } from "react-i18next";
import MainBtn from "../../utils/mainBtn/MainBtn";
const OurPartner = ({ data }) => {
  const [t] = useTranslation();
  return (
    <div className={`${style.mainDiv} py-4 `}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 d-flex flex-column align-items-center gap-2">
            <img
              className={style.img}
              loading="lazy"
              alt="partner/img"
              src={data.image}
            />
            <p className={`m-0 fs20 shamel  p-0 fw-bold  ${style.official}`}>
              <span className={`fw-bold shamel  green`}>sponser</span> | الشريك
              الرسمي
            </p>
          </div>
          <div className="col-12 col-md-8 mt-3 mt-md-0">
            <p
              className="m-0 p-0"
              dangerouslySetInnerHTML={{
                __html: data.title,
              }}
            />
            <p className={`mx-0 mt-0 mb-3  fs18 ${style.partner}`}>
              {data.description}
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <MainBtn text={t("learnBtn")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
/*
   <div className="container py-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-4 d-flex flex-column align-items-center gap-2">
         
         
        </div>
        <div className="col-12 col-md-8">
          <div className="d-flex align-items-center gap-1 justify-content-center justify-content-md-end">
            <p className={`m-0 p-0 fw-bold ${style.partner} dark`}>
              شراكة رسمية مع شركة
            </p>
            <p
              className={`red text-uppercase m-0 p-0 fw-bolder ${style.partner} `}
            >
              tickmill
            </p>
          </div>
          <p className="mx-0 mt-3 p-0 dark fw-bold lh text-center text-md-end">
            تداول مع وسيط موثوق لتنفيذ صفقاتك بدقة وامان مع شركة Tickmill الوسيط
            المالى الاكثر احترافية عالميا الشريك الرسمي لشركة أحمد الموسوي
            للتداول بدولة الكويت.
          </p>
        
        </div>
      </div>
    </div>
*/
