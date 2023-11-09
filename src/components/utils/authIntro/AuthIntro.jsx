import React from "react";
import style from "./AuthIntro.module.css";
// import { FcGoogle } from "react-icons/fc";
// import { AiFillApple } from "react-icons/ai";
const AuthIntro = ({ title, desc }) => {
  return (
    <div className={`pt-3 pt-md-5 mt-0 mt-md-5 container px-md-5 mx-md-4 `}>
      <p className={`mt-2 mb-4 fw-bold  p-0 fs22 shamel`}>{title}</p>
      {desc ? <p className={`p-0 ${style.desc}`}>{desc}</p> : null}
    </div>
  );
};

export default AuthIntro;
