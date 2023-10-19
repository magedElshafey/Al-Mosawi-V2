import React from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import { useTranslation } from "react-i18next";
import OrderStatus from "../components/utils/orderStatus/OrderStatus";
import { useNavigate } from "react-router-dom";
const OrderFaild = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const action = () => {
    navigate("/");
  };
  const action2 = () => {
    navigate("/cart");
  };
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        title={i18n.language === "en" ? "order status" : "حالة الطلب"}
      />
      <div className="container py-5">
        <OrderStatus
          btnText={
            i18n.language === "ar"
              ? "الإنتقال الي الصفحة الرئيسية"
              : "go to home page"
          }
          btnText2={
            i18n.language === "ar"
              ? "الإنتقال الي صفحة العربة"
              : "go to cart page"
          }
          title={
            i18n.language === "ar"
              ? "للأسف تعذر شراء طلبك"
              : "sorry your order has not been booked"
          }
          imgLink="https://img.freepik.com/free-photo/worried-stressed-man-bites-finger-nails-afraids-something-feels-embarrassed-while-akes-decision-expresses-negative-emotions-wears-white-jumper-isolated-brown-background-human-reactions_273609-57666.jpg?w=900&t=st=1697640084~exp=1697640684~hmac=513e8a6a24050323c559ee88efd23db35594fb9c25081c8ccfd9690225ef18fa"
          action={action}
          action2={action2}
        />
      </div>
    </div>
  );
};

export default OrderFaild;
