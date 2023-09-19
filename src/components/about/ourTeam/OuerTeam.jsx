import React, { useState } from "react";
import style from "./ourtTeam.module.css";
const OuerTeam = ({ team }) => {
  const [showOriginalText, setShowOriginalText] = useState(true);
  const [cardId, setCardId] = useState(null);

  return (
    <div className="container py-5">
      <p className="m-0 p-0 fw-bolder fs36 shamel text-center">{team.title}</p>
      <p className="mx-0 p-0 my-1 text-center">{team.desc}</p>
      <div className="mt-3 d-flex justify-content-center align-items-center gap-3 flex-wrap">
        {team.members.map((item, index) => (
          <div
            onMouseEnter={() => {
              setShowOriginalText(false);
              setCardId(index);
            }}
            onMouseLeave={() => {
              setShowOriginalText(true);
              setCardId(index);
            }}
            key={index}
            className={style.mainCard}
          >
            <img
              alt="team/img"
              loading="lazy"
              src={item.img}
              className={style.mainImg}
            />
            <div className={style.overlay}>
              <div
                className={`d-flex flex-column  gap-1 ${style.text} ${
                  cardId === index && !showOriginalText
                    ? style.hide
                    : style.show
                }`}
              >
                <p className="m-0 p-0 ">{item.jobTitle}</p>
                <p className="m-0 p-0 fs-5 fw-bold ">{item.name}</p>
              </div>
              <div
                className={`d-flex flex-column  gap-1 ${style.text} ${
                  cardId === index && !showOriginalText
                    ? style.show
                    : style.hide
                }`}
              >
                <p className="m-0 p-0 ">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OuerTeam;
