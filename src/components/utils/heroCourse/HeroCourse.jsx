import React, { useState, useEffect } from "react";
import style from "./HeroCourse.module.css";
import timer from "../../../assets/timer.svg";
import levels from "../../../assets/levels.svg";
import eye from "../../../assets/eye.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/cart.js";
import { useMediaQuery } from "react-responsive";
const HeroCourse = ({
  title,
  desc,
  img,
  price,
  afterDisscount,
  hours,
  level,
  video,
  duration,
  fixedContainer,
  product,
}) => {
  const { t, i18n } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);
  const nvigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartSlice);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const user = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null;
  // handle add product to cart
  // const handleAddToCart = async (product) => {
  //   const index = cartItems.findIndex((item) => item.id === product.id);
  //   if (index >= 0) {
  //     toast.error(
  //       i18n.language === "ar"
  //         ? "هذا المنتج موجود بالفعل في العربة"
  //         : "this item is already on the cart"
  //     );
  //   } else {
  //     if (user) {
  //       const res = await fetch(
  //         "https://almosawi.admin.technomasrsystems.com/api/cart/add",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             lang: i18n.language,
  //             user,
  //             type: "course",
  //           },
  //           body: JSON.stringify({
  //             productId: product.id,
  //           }),
  //         }
  //       );
  //       const data = await res.json();
  //       if (data.status === "faild") {
  //         toast.error(data.message);
  //       } else {
  //         dispatch(addToCart(product));
  //         nvigate("/cart");
  //       }
  //     } else {
  //       dispatch(addToCart(product));
  //       nvigate("/cart");
  //     }
  //   }
  // };
  const handleAddToCart = async (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (!user && index < 0) {
      dispatch(addToCart(product));
      nvigate("/cart");
    } else if (!user && index >= 0) {
      toast.error(
        i18n.language === "ar"
          ? "هذا المنتج موجود بالفعل في العربة"
          : "this item is already on the cart"
      );
    } else if (user && index >= 0) {
      toast.error(
        i18n.language === "ar"
          ? "هذا المنتج موجود بالفعل في العربة"
          : "this item is already on the cart"
      );
    } else if (user && index < 0) {
      const res = await fetch(
        "https://almosawi.admin.technomasrsystems.com/api/cart/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            lang: i18n.language,
            user,
            type: "course",
          },
          body: JSON.stringify({
            productId: product.id,
          }),
        }
      );
      const data = await res.json();
      console.log("data from cart", data);
      if (data.status === "faild") {
        toast.error(data.message);
      } else {
        dispatch(addToCart(product));
        nvigate("/cart");
      }
    }
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={style.mainContainer}
      >
        <div className="z-3 container mt80 py-5">
          <div className="row align-items-center justify-content-center justify-content-md-start ">
            <div className="col-12 col-md-9 mb-2 mb-md-0">
              <p className={`text-white mx-0 book   mb-1 p-0 ${style.intro}`}>
                {i18n.language === "ar" ? "الدورات التدريبية" : "courses"}
              </p>
              <p className={`mx-0 mb-2 p-0 shamel fs48 whiteGreen fw-bolder`}>
                {title}
              </p>
              <div className={style.imgContainer}>
                <ReactPlayer
                  url={video}
                  playing={true}
                  loop={true}
                  muted={true}
                  controls
                  width={isMobile ? "100%" : 700}
                />
                {/**
                 *  <video className={`rounded ${style.challengeImg}`} controls>
                  <source type="video/mp4" src={video} />
                </video>
                 */}
              </div>
              <p
                className=" m-0 p-0 mt-3 "
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>

            <div
              className={`price-container ${style.priceContainer} ${
                isFixed && fixedContainer && i18n.language === "ar"
                  ? style.fixedRight
                  : null
              } ${
                isFixed && fixedContainer && i18n.language === "en"
                  ? style.fixedLeft
                  : null
              } ${!isFixed && null}`}
            >
              <div className={`position-relative ${style.offerContainer}`}>
                <p className="mt-3 shamel fs28 fw-bold m-0 p-0 whiteGreen">
                  {afterDisscount ? afterDisscount : price} $
                </p>
                <span className={style.offer}>{price}$</span>
              </div>
              <div className="mb-3 mt-4 d-flex">
                <div>
                  <div className="mb-2 d-flex align-items-center gap-2 text-white">
                    <img
                      loading="lazy"
                      className={style.icon}
                      alt="icon/img"
                      src={timer}
                    />

                    <p
                      className=" m-0 p-0 "
                      dangerouslySetInnerHTML={{ __html: hours }}
                    />
                  </div>
                  <div className="d-flex  gap-2 text-white">
                    <img
                      loading="lazy"
                      className={style.icon}
                      alt="icon/img"
                      src={levels}
                    />

                    <p
                      className=" m-0 p-0 "
                      dangerouslySetInnerHTML={{ __html: level }}
                    />
                  </div>
                  <div className="mb-2 d-flex  gap-2 text-white">
                    <img
                      loading="lazy"
                      className={style.icon}
                      alt="icon/img"
                      src={eye}
                    />
                    <p
                      className="m-0 p-0"
                      dangerouslySetInnerHTML={{ __html: duration }}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className={` book ${style.buyBtn}`}
              >
                <div className="fw-bold d-flex align-items-center gap-2">
                  {i18n.language === "ar" ? (
                    <MdArrowBackIos size={15} />
                  ) : (
                    <IoIosArrowForward size={15} />
                  )}

                  <p className="m-0 p-0 fw-bold">{t("buyNow")}</p>
                </div>
                <span className={`mt-1 ${style.origineal}`}>
                  ({afterDisscount ? afterDisscount : price} $)
                </span>
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className={`mt-4  book ${style.cartBtn}`}
              >
                <AiOutlineShoppingCart className="text-white" size={20} />
                <p className="text-white m-0 mt-1 p-0 fw-bold">
                  {t("addToCart")}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCourse;
