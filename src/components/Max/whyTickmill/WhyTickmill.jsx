import React, { useState } from "react";
import style from "./whyTickmill.module.css";
import check from "../../../assets/check.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import media from "../../../assets/media.png";
const WhyTickmill = ({ paper, faqs }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div className="container py-4">
      <div className="row gap-5 ">
        <div className="col-12 col-md-7">
          {faqs.map((item, index) => (
            <div key={index} className={`mb-4 ${style.main} p-2`}>
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.question_,
                    }}
                  />
                  {selectedIndex === index ? (
                    <MdKeyboardArrowUp
                      size={30}
                      className="pointer"
                      onClick={() => setSelectedIndex(null)}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      size={30}
                      className="pointer"
                      onClick={() => setSelectedIndex(index)}
                    />
                  )}
                </div>
                {selectedIndex === index && (
                  <div
                    className="m-0 p-0 mt-2"
                    dangerouslySetInnerHTML={{
                      __html: item.answer,
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={`p-0 m-0 col-12 col-md-4 ${style.mediaContainer}`}>
          <img
            loading="lazy"
            alt="media-img"
            src={media}
            className={style.img}
          />
          <div className={style.over}>
            <div>
              <p
                className="m-0 p-0 px-2 text-center"
                dangerouslySetInnerHTML={{ __html: paper.title }}
              />
              {paper.depositMethod.map((item, index) => (
                <div
                  className="mb-3 px-2 d-flex align-items-center gap-2"
                  key={index}
                >
                  <img
                    alt="check/img"
                    loading="lazy"
                    className={style.check}
                    src={check}
                  />
                  <p className="m-0 p-0 text-white fw-bold shamel">
                    {item.item}
                  </p>
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
      </div>
    </div>
  );
};

export default WhyTickmill;
/**
 *
 */

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
