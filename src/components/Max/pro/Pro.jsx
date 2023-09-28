import React from "react";
import style from "./pro.module.css";
import { proCards } from "../../../fakers/data";
import check from "../../../assets/check.png";
import BTN from "../../utils/btn/BTN";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Pro = ({ mainClassic, mainVip, maxClassic, maxVip }) => {
  const { test } = useParams();
  const [t] = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/forex-account");
  };
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div className="row px-2 py-5 gap-5 justify-content-center ">
          {test === "max" && (
            <>
              <div className={`p-2 col-12 col-md-5 ${style.mainContainer}`}>
                <div className="d-flex flex-column align-items-center justify-content-center mb-2">
                  <p
                    className="p-0 m-0"
                    dangerouslySetInnerHTML={{ __html: maxClassic.title }}
                  />

                  <p className="m-0 p-0 fs18 fw-bold ">{maxClassic.desc}</p>
                </div>
                {maxClassic.features.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-2 mb-1"
                  >
                    <img
                      loading="lazy"
                      className={style.check}
                      alt="check/img"
                      src={check}
                    />
                    <p className="m-0 p-0">{item.title}</p>
                  </div>
                ))}
                <div className="d-flex justify-content-center mt-3">
                  <BTN action={handleClick} text={t("reg")} />
                </div>
              </div>
              <div className={`p-2 col-12 col-md-5 ${style.mainContainer}`}>
                <div className="d-flex flex-column align-items-center justify-content-center mb-2">
                  <p
                    className="p-0 m-0"
                    dangerouslySetInnerHTML={{ __html: maxVip.title }}
                  />

                  <p className="m-0 p-0 fs18 fw-bold ">{maxVip.desc}</p>
                </div>
                {maxVip.features.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-2 mb-1"
                  >
                    <img
                      loading="lazy"
                      className={style.check}
                      alt="check/img"
                      src={check}
                    />
                    <p className="m-0 p-0">{item.title}</p>
                  </div>
                ))}
                <div className="d-flex justify-content-center mt-3">
                  <BTN action={handleClick} text={t("reg")} />
                </div>
              </div>
            </>
          )}
          {test === "special" && (
            <>
              <div className={`p-2 col-12 col-md-5 ${style.mainContainer}`}>
                <div className="d-flex flex-column align-items-center justify-content-center mb-2">
                  <p
                    className="p-0 m-0"
                    dangerouslySetInnerHTML={{ __html: mainClassic.title }}
                  />

                  <p className="m-0 p-0 fs18 fw-bold ">{mainClassic.desc}</p>
                </div>
                {mainClassic.features.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-2 mb-1"
                  >
                    <img
                      loading="lazy"
                      className={style.check}
                      alt="check/img"
                      src={check}
                    />
                    <p className="m-0 p-0">{item.title}</p>
                  </div>
                ))}
                <div className="d-flex justify-content-center mt-3">
                  <BTN action={handleClick} text={t("reg")} />
                </div>
              </div>
              <div className={`p-2 col-12 col-md-5 ${style.mainContainer}`}>
                <div className="d-flex flex-column align-items-center justify-content-center mb-2">
                  <p
                    className="p-0 m-0"
                    dangerouslySetInnerHTML={{ __html: mainVip.title }}
                  />

                  <p className="m-0 p-0 fs18 fw-bold ">{mainVip.desc}</p>
                </div>
                {mainVip.features.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-2 mb-1"
                  >
                    <img
                      loading="lazy"
                      className={style.check}
                      alt="check/img"
                      src={check}
                    />
                    <p className="m-0 p-0">{item.title}</p>
                  </div>
                ))}
                <div className="d-flex justify-content-center mt-3">
                  <BTN action={handleClick} text={t("reg")} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pro;
/**
 *   {proCards.map((item, index) => (
           
          ))}
 * 
 */
