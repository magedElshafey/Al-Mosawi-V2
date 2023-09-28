import React, { useState } from "react";
import style from "./whyTickmill.module.css";
import check from "../../../assets/check.png";
import { whyTickmill, media } from "../../../fakers/data";
import buyImg from "../../../assets/buy-svgrepo-com.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
const WhyTickmill = ({ paper }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showHow, sewtShowHow] = useState(false);
  const [showCopmany, setShowCompany] = useState(false);
  return (
    <div className="container py-4">
      <div className="row gap-5">
        <div className="col-12 col-md-7">
          <div className={`mb-4 ${style.main} p-2`}>
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2 fs22 shamel">
                  <p className={`m-0 p-0 fw-bold ${style.blue}`}>لماذا تختار</p>
                  <p className="m-0 p-0 red fw-bold">Tickmill</p>
                </div>
                {showHow ? (
                  <MdKeyboardArrowUp
                    size={30}
                    className="pointer"
                    onClick={() => sewtShowHow(false)}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    size={30}
                    className="pointer"
                    onClick={() => sewtShowHow(true)}
                  />
                )}
              </div>
              <div className={`mt-4 ${showHow ? style.show : style.hide}`}>
                {whyTickmill.map((item, index) => (
                  <div key={index} className="mb-2">
                    <div className={`d-flex gap-1 `}>
                      <img
                        loading="lazy"
                        src={check}
                        className={style.check}
                        alt="check/img"
                      />
                      <p
                        className={`m-0  p-0 shamel fs18 fw-bold ${style.blue}`}
                      >
                        {item.title}
                      </p>
                    </div>
                    <p className="m-0 p-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`mb-4 ${style.main} p-2`}>
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold fs24 shamel green m-0 p-0">
                  كيف تتم عملية السحب و الايداع
                </p>

                {showDetails ? (
                  <MdKeyboardArrowUp
                    size={30}
                    className="pointer"
                    onClick={() => setShowDetails(false)}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    size={30}
                    className="pointer"
                    onClick={() => setShowDetails(true)}
                  />
                )}
              </div>
              <div className={`mt-4 ${showDetails ? style.show : style.hide}`}>
                {whyTickmill.map((item, index) => (
                  <div key={index} className="mb-2">
                    <div className={`d-flex gap-1 `}>
                      <img
                        loading="lazy"
                        src={check}
                        className={style.check}
                        alt="check/img"
                      />
                      <p
                        className={`m-0  p-0 shamel fs18 fw-bold ${style.blue}`}
                      >
                        {item.title}
                      </p>
                    </div>
                    <p className="m-0 p-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`mb-4 ${style.main} p-2`}>
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold fs24 shamel green m-0 p-0">
                  تراخيص الشركة
                </p>

                {showCopmany ? (
                  <MdKeyboardArrowUp
                    size={30}
                    className="pointer"
                    onClick={() => setShowCompany(false)}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    size={30}
                    className="pointer"
                    onClick={() => setShowCompany(true)}
                  />
                )}
              </div>
              <div className={`mt-4 ${showCopmany ? style.show : style.hide}`}>
                {whyTickmill.map((item, index) => (
                  <div key={index} className="mb-2">
                    <div className={`d-flex gap-1 `}>
                      <img
                        loading="lazy"
                        src={check}
                        className={style.check}
                        alt="check/img"
                      />
                      <p
                        className={`m-0  p-0 shamel fs18 fw-bold ${style.blue}`}
                      >
                        {item.title}
                      </p>
                    </div>
                    <p className="m-0 p-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`px-5 py-3 col-12 col-md-4 ${style.mediaContainer}`}>
          <p
            className="m-0 p-0"
            dangerouslySetInnerHTML={{ __html: paper.title }}
          />
          {paper.depositMethod.map((item, index) => (
            <div className="mb-3 d-flex align-items-center gap-2" key={index}>
              <img
                alt="check/img"
                loading="lazy"
                className={style.check}
                src={check}
              />
              <p className="m-0 p-0 text-white fw-bold shamel">{item.item}</p>
            </div>
          ))}

          <div className="d-flex justify-content-center pt-3 pb-2">
            <img
              loading="lazy"
              className={style.buyImg}
              src={paper.Image}
              alt="buy / img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTickmill;

/**
 * 
 *  <div className="row row gap-5">
        <div className="col-12 col-md-7">
          <div className={`mb-3 ${style.main} p-2`}>
            <div className="d-flex mb-4 justify-content-between align-items-center">
              
              
            </div>
           
          </div>
          <div className={`${style.main} mb-5 p-2`}>
            <div className="d-flex mb-4 justify-content-between align-items-center">
            
              {showDetails ? (
                <MdKeyboardArrowUp
                  size={30}
                  className="pointer"
                  onClick={() => setShowDetails(false)}
                />
              ) : (
                <MdKeyboardArrowDown
                  size={30}
                  className="pointer"
                  onClick={() => setShowDetails(true)}
                />
              )}
            </div>
            <div className={`${showDetails ? style.show : style.hide}`}>
              {whyTickmill.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className={`d-flex gap-1 `}>
                    <img
                      loading="lazy"
                      src={check}
                      className={style.check}
                      alt="check/img"
                    />
                    <p className={`m-0  p-0 shamel fs18 fw-bold ${style.blue}`}>
                      {item.title}
                    </p>
                  </div>
                  <p className="m-0 p-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`${style.main} mb-5 p-2`}>
            <div className="d-flex mb-4 justify-content-between align-items-center">
        
              {showCopmany ? (
                <MdKeyboardArrowUp
                  size={30}
                  className="pointer"
                  onClick={() => setShowCompany(false)}
                />
              ) : (
                <MdKeyboardArrowDown
                  size={30}
                  className="pointer"
                  onClick={() => setShowCompany(true)}
                />
              )}
            </div>
            <div className={`${showCopmany ? style.show : style.hide}`}>
              {whyTickmill.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className={`d-flex gap-1 `}>
                    <img
                      loading="lazy"
                      src={check}
                      className={style.check}
                      alt="check/img"
                    />
                    <p className={`m-0  p-0 shamel fs18 fw-bold ${style.blue}`}>
                      {item.title}
                    </p>
                  </div>
                  <p className="m-0 p-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
 */
