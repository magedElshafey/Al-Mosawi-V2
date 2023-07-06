import React, { useState } from "react";
import style from "./HeroCourse.module.css";
import heroImg from "../../../assets/hero.png";
import GreentTitle from "../greenTitle/GreentTitle";
import {
  AiOutlineEye,
  AiOutlineClockCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaLevelUpAlt } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const HeroCourse = ({ item }) => {
  const [disabledBtn, setDisabledBtn] = useState(false);
  const cartItems = window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [];
  const [items, setItems] = useState(cartItems);

  const nvigate = useNavigate();
  const handleAddToCart = (product) => {
    console.log("this is product", product);
    const index = items.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      setDisabledBtn(true);
    } else {
      const newData = items.push(product);
      setItems(newData);
      window.localStorage.setItem("cart", JSON.stringify(items));
    }
    nvigate("/cart");
  };
  return (
    <div className={style.mainContainer}>
      <img alt="hero_course/img" className={style.heroImg} src={heroImg} />
      <div className={style.overlay}>
        <div className="container">
          <div className="row mt-5 pt-5 pt-lg-0 mt-lg-0 ">
            <div className="col-12 col-md-9 mb-3 mb-md-0">
              <p className="text-white mx-0  mb-2 p-0">الدورات التدريبية</p>
              <p
                className={`mx-0 mb-3 p-0 whiteGreen fw-bolder ${style.text36}`}
              >
                {item.title}
              </p>
              <img
                className={style.challengeImg}
                alt="challenger/img"
                loading="lazy"
                src={item.img}
              />
              <p className="mx-0 p-0 my-3 fw-bold text-white fs-6 fs-md-3">
                {item.desc}
              </p>
              <p className={`mx-0 p-0 my-3 text-white ${style.desc2}`}>
                {item.desc2}
              </p>
            </div>
            <div
              className={`d-none d-md-block  col-md-3 mb-3 mb-md-0 text-center p-2 ${style.priceContainer}`}
            >
              <div className={`position-relative ${style.offerContainer}`}>
                <p className="mt-3 fs-1 fw-bold m-0 p-0 whiteGreen">
                  {item.offer ? item.price - item.offer : item.price} $
                </p>
                <span className={style.offer}>{item.price}$</span>
              </div>
              <div className="my-5 d-flex justify-content-center">
                <div>
                  {" "}
                  <div className="mb-2 d-flex align-items-center gap-2 text-white">
                    <AiOutlineClockCircle size={20} />
                    <p className="m-0 p-0">{item.time}</p>
                  </div>
                  <div className="mb-2 d-flex align-items-center gap-2 text-white">
                    <FaLevelUpAlt size={20} />
                    <p className="m-0 p-0">{item.to}</p>
                  </div>
                  <div className="mb-2 d-flex align-items-center gap-2 text-white">
                    <AiOutlineEye size={20} />
                    <p className="m-0 p-0">مدي الحياة</p>
                  </div>
                </div>
              </div>
              <button className={style.buyBtn}>
                <div className="fw-bold d-flex align-items-center gap-2">
                  <MdArrowBackIos size={15} />
                  <p className="m-0 p-0">اشتري الان</p>
                </div>
                <span className={style.origineal}>
                  ({item.offer ? item.price - item.offer : item.price} $)
                </span>
              </button>
              <button
                disabled={disabledBtn ? true : false}
                onClick={() => handleAddToCart(item)}
                className={`mt-4 ${style.cartBtn} ${
                  disabledBtn ? style.disabled : null
                } `}
              >
                <AiOutlineShoppingCart className="text-white" size={20} />
                <p className="text-white m-0 p-0">أضف لسلة الشراء</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCourse;
