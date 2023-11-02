import React from "react";
import * as animationData from "../../assets/Animation - 1698827873592.json";
import Lottie from "react-lottie";
const Img3D = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      isClickToPauseDisabled
      options={defaultOptions}
      height="80%"
      width="80%"
    />
  );
};

export default Img3D;
