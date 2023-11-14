import React, { useEffect } from "react";
import Hero from "../components/utils/hero/Hero";
import heroImg from "../assets/hero.png";
import { useTranslation } from "react-i18next";
import OrderStatus from "../components/utils/orderStatus/OrderStatus";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cart";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
const OrderSuccess = () => {
  const user = localStorage.getItem("userId");
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const action = () => {
    navigate("/");
  };
  const codeFromUser = localStorage.getItem("codeFromCourses")
    ? JSON.parse(localStorage.getItem("codeFromCourses"))
    : null;
  useEffect(() => {
    if (codeFromUser) {
      localStorage.removeItem("codeFromCourses");
    }
    dispatch(clearCart());
  }, []);
  const fetchData = () => {
    const headers = {
      user,
    };
    return request({ url: "/user/my-profile", headers });
  };
  const { isLoading, data } = useQuery("account-normal-user-page", fetchData, {
    onSuccess: (data) =>
      localStorage.setItem("type", JSON.stringify(data.data.data.type)),
  });
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Hero
            isBigHero={false}
            isSmallHero={true}
            isMediumHero={false}
            isStatic={true}
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
              title={
                i18n.language === "ar"
                  ? "تم شراء طلبك بنجاح"
                  : "your order has been booked succfully"
              }
              imgLink="https://img.freepik.com/free-photo/happy-successful-businessman_53876-89038.jpg?w=900&t=st=1697639412~exp=1697640012~hmac=e6e7c02f7d41e2a97a4cb24cecb4696761c876556ef343d94754a8652f7f8e38"
              action={action}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSuccess;
