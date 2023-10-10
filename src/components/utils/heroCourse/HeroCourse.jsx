import React, { useState, useEffect } from "react";
import style from "./HeroCourse.module.css";
import {
  AiOutlineEye,
  AiOutlineClockCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaLevelUpAlt } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { request } from "../../utils/axios.js";
import toast from "react-hot-toast";

const HeroCourse = ({
  title,
  desc,
  img,
  price,
  afterDisscount,
  hours,
  level,
  duration,
  fixedContainer,
  product,
}) => {
  const { t, i18n } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);
  const nvigate = useNavigate();
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

  const [disabledBtn, setDisabledBtn] = useState(false);
  const cartItems = window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [];
  const user = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null;
  const [items, setItems] = useState(cartItems);
  const addCourseToApi = (data) => {
    const headers = {
      type: "course",
      user,
    };
    return request({ url: "/cart/add", method: "post", headers, data });
  };
  const { isLoading, mutate } = useMutation(addCourseToApi, {
    onSuccess: (data) => {
      if (data?.data.status) {
        toast.success(
          i18n.language === "ar" ? ` تم اضافته للعربة بنجاح` : ` added to cart`
        );
        const newData = items.push(product);
        setItems(newData);
        window.localStorage.setItem("cart", JSON.stringify(items));
        nvigate("/cart");
      }
    },
    onError: () => {
      toast.error(
        i18n.language === "en"
          ? "there is an error occurred , please try again"
          : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
      );
    },
  });

  const handleAddToCart = (product) => {
    const index = items.findIndex((item) => item.id === product.id);
    if ((user && index >= 0) || (!user && index >= 0)) {
      setDisabledBtn(true);
    }
    if (user && index < 0) {
      const courseDetails = { productId: product.id };
      mutate(courseDetails);
    }
    if (!user && index < 0) {
      const newData = items.push(product);
      setItems(newData);
      window.localStorage.setItem("cart", JSON.stringify(items));
      nvigate("/cart");
    }
  };
  return (
    <>
      {isLoading ? (
        <div className={style.overlay}></div>
      ) : (
        <div className={style.mainContainer}>
          <div className="z-3 container mt80 py-5">
            <div className="row align-items-center justify-content-center justify-content-md-start ">
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <p className={`text-white mx-0 book   mb-1 p-0 ${style.intro}`}>
                  {i18n.language === "ar" ? "الدورات التدريبية" : "courses"}
                </p>
                <p className={`mx-0 mb-2 p-0 shamel fs28 whiteGreen fw-bolder`}>
                  {title}
                </p>
                <div className={style.imgContainer}>
                  <img
                    className={`rounded ${style.challengeImg}`}
                    alt="challenger/img"
                    loading="lazy"
                    src={img}
                  />
                </div>
                <p
                  className=" m-0 p-0 "
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
                      <AiOutlineClockCircle size={20} />
                      <p
                        className=" m-0 p-0 "
                        dangerouslySetInnerHTML={{ __html: hours }}
                      />
                    </div>
                    <div className="mb-2 d-flex  gap-2 text-white">
                      <FaLevelUpAlt size={20} />
                      <p
                        className=" m-0 p-0 "
                        dangerouslySetInnerHTML={{ __html: level }}
                      />
                    </div>
                    <div className="mb-2 d-flex  gap-2 text-white">
                      <AiOutlineEye size={20} />
                      <p
                        className="m-0 p-0"
                        dangerouslySetInnerHTML={{ __html: duration }}
                      />
                    </div>
                  </div>
                </div>
                <button className={` book ${style.buyBtn}`}>
                  <div className="fw-bold d-flex align-items-center gap-2">
                    <MdArrowBackIos size={15} />
                    <p className="m-0 p-0 fw-bold">{t("buyNow")}</p>
                  </div>
                  <span className={`mt-1 ${style.origineal}`}>
                    ({afterDisscount ? afterDisscount : price} $)
                  </span>
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={disabledBtn ? true : false}
                  className={`mt-4  book ${style.cartBtn} ${
                    disabledBtn ? style.disabled : null
                  } `}
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
      )}
    </>
  );
};

export default HeroCourse;
/*
  <div className={style.mainContainer}>
      
      <div className={style.overlay}>
        <div className="container">
          <div className="row mt-5 pt-5 pt-lg-0 mt-lg-0 ">
            <div className="col-12 col-md-9 mb-3 mb-md-0">
            
            
              
             
            </div>
            <div
              className={`d-none d-md-block  col-md-3 mb-3 mb-md-0 text-center p-2 ${style.priceContainer}`}
            >
              
      
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
*/
