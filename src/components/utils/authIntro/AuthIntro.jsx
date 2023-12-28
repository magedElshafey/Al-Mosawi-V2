import React from "react";
import style from "./AuthIntro.module.css";
// import { FcGoogle } from "react-icons/fc";
// import { AiFillApple } from "react-icons/ai";
const AuthIntro = ({ title, desc }) => {
  return (
    <div className={`pt-3 pt-md-5 mt-0 mt-md-5 container`}>
      <p className={`mt-2 mb-4 fw-bold text-center  p-0 fs20`}>{title}</p>
    </div>
  );
};

export default AuthIntro;
