import React from "react";
import style from "./heroForex.module.css";
import AccountDetails from "../../forexDetails/accountDetails/AccountDetails";
import Services from "../../forexDetails/services/Services";
const HeroForex = ({ isProchart }) => {
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center text-md-end mt-5   pt-5 z-3 col-12 col-md-2">
            <AccountDetails />
          </div>
          <div className="z-3 mt-5 pt-5  col-12  col-md-10">
            <Services isProchart={isProchart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroForex;
/*
   <div className={`mb-4 ${style.mainContainer}`}>
      <img
        loading="lazy"
        alt="hero/img"
        src={heroImg}
        className={style.mainImg}
      />
      <div className={style.overlay}>
        <div className="container pt-5 mt-5">
          <div className="row mt-5">
       
            
          
           
          </div>
        </div>
      </div>
    </div>
*/
