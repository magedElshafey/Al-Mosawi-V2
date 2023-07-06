import React from "react";
import style from "./AuthIntro.module.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
const AuthIntro = ({ title, desc }) => {
  return (
    <div className="container pt-5 mt-5">
      <p className={`mx-2 my-2 fw-bold  p-0 ${style.text28}`}>{title}</p>
      {desc ? (
        <p className={`fs18 roboto mx-2 p-0 ${style.desc}`}>{desc}</p>
      ) : null}
      <div className="w-100 w-md-50   d-flex flex-wrap  align-items-center gap-4">
        <button className={`${style.btn} ${style.google}`}>
          <FcGoogle size={30} />
        </button>
        <button className={`${style.btn} ${style.apple}`}>
          <AiFillApple size={30} />
        </button>
      </div>
    </div>
  );
};

export default AuthIntro;
