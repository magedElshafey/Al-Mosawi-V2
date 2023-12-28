import React, { useRef, useEffect, useState } from "react";
import style from "./modal.module.css";
import close from "../../../assets/cross.png";
import { purchasDetails } from "../../../fakers/data.js";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cart";

const PackageModal = ({
  showModal,
  action,
  setShowModal,
  phoneNum,
  modalId,
  packages,
}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = packages.filter((item) => item.id === modalId);
  const { i18n, t } = useTranslation();
  const [agree, setAgree] = useState(false);
  const modalRef = useRef();
  const handleCloseRef = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      action();
      setShowModal(false);
      setAgree(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseRef);
    return () => {
      document.removeEventListener("mousedown", handleCloseRef);
    };
  }, []);

  const user = localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null;
  const options = {
    position: "top-center", // Custom position
    duration: 3000, // Time until the toast message automatically closes (in milliseconds)
    style: {
      zIndex: 2222221, // Custom z-index
    },
  };
  // handle add to cart
  const isLogin = JSON.parse(window.localStorage.getItem("isLogin"));

  const handleAddToCart = async (product) => {
    if (!agree) {
      toast.error(
        i18n.language === "ar"
          ? "برجاء الموافقة علي الشروط و الاحكام"
          : "Please agree to the terms and conditions"
      );
    } else {
      if (isLogin && agree) {
        const res = await fetch(
          "https://almosawi.admin.technomasrsystems.com/api/cart/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              lang: i18n.language,
              user,
              type: "ProchartPlans",
            },
            body: JSON.stringify({
              productId: product.id,
            }),
          }
        );
        const data = await res.json();

        if (data.status === "faild") {
          toast.error(data.message, options);
        } else {
          dispatch(addToCart(product));
          navigate("/cart");
        }
      } else {
        toast.error(
          i18n.language === "ar"
            ? "تحتاج الي تسجيل الدخول اولا لتقوم ب اضافة باقة البروشارات الي العربة"
            : "you need to login first before adding prochart to the cart"
        );
        navigate("/login");
      }
    }
  };
  return (
    <>
      <div
        className={`${style.mainContainer} ${
          showModal ? style.show : style.hide
        }`}
      >
        <div className="container">
          <div
            ref={modalRef}
            className={`p-3 ${style.modal} ${
              showModal ? style.showModal : style.hideModal
            }`}
          >
            <p className="text-md-center fs18 shamel p-0 mx-0  fw-bold">
              {i18n.language === "ar"
                ? "يمكنك إرسال الطلب أو التواصل مع خدمة العملاء"
                : "You can submit the request or contact customer service"}
            </p>
            <img
              src={close}
              alt="close/img"
              loading="lazy"
              className={style.mainImg}
              onClick={action}
            />
            <div className="row align-items-center">
              <div className="col-12 col-md-7">
                <div className={`py-5 ${style.hero}`}>
                  <div className={` ${style.main}`}>
                    <img
                      alt="data/img"
                      src={data[0].icon}
                      loading="lazy"
                      className={style.img}
                    />

                    <div className="text-center pt-4 mb-2">
                      <div dangerouslySetInnerHTML={{ __html: data[0].name }} />
                    </div>
                    {data[0].plansFeatures.map((item, index) => (
                      <div
                        key={index}
                        className="mb-2 mt-0  d-flex px-5 align-items-centr gap-2"
                      >
                        {item.isTrue ? (
                          <IoCheckmarkCircleSharp className="green" size={20} />
                        ) : (
                          <AiOutlineClose size={20} className={style.false} />
                        )}
                        <p className=" m-0 p-0">{item.name}</p>
                      </div>
                    ))}
                    <div className="my-3 d-flex align-items-center justify-content-center gap-1">
                      <input
                        checked={agree}
                        type="checkbox"
                        value={agree}
                        onChange={() => setAgree(!agree)}
                      />
                      <label>
                        {i18n.language === "ar" ? "اوافق علي" : "agree with"}
                      </label>
                      <span className={style.title2}>
                        {i18n.language === "ar"
                          ? "الشروط و الأحكام"
                          : "terms and conditions"}
                      </span>
                    </div>
                  </div>
                  <div className=" mt-3 d-flex justify-content-center align-items-center gap-2">
                    <div>
                      <p
                        className={`p-0 m-0 fs22  ${style.price} d-inline-block`}
                      >
                        {i18n.language === "en"
                          ? "after discount"
                          : "بعد الخصم"}
                      </p>
                      <p
                        className={`fw-bolder fs22 mx-1 p-0 m-0 ${style.price}   d-inline-block`}
                      >
                        {data[0].discount_price
                          ? data[0].price - data[0].discount_price
                          : data[0].price}{" "}
                        $
                      </p>
                    </div>
                    <p className={`fs20 p-0 m-0 ${style.original}`}>
                      {data[0].price} $
                    </p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-3 ">
                    <button
                      onClick={() => handleAddToCart(data[0])}
                      className={` mt-4 ${style.buyBtn}`}
                    >
                      <div className="fw-bold d-flex align-items-center gap-2">
                        <MdArrowBackIos size={15} />
                        <p className="m-0 p-0 fw-bold">{t("buyNow")}</p>
                      </div>
                      <span className={`${style.origineal}`}>
                        (
                        {data[0].discount_price
                          ? data[0].price - data[0].discount_price
                          : data[0].price}{" "}
                        $)
                      </span>
                    </button>
                    <button
                      onClick={() => handleAddToCart(data[0])}
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
              <div className="col-12 col-md-5">
                <p className="fw-bold shamel fs22 mx-0 my-0 p-0 text-center">
                  {i18n.language === "ar"
                    ? "يمكنك أيضا الاشتراك عن طريق التواصل مع خدمة العملاء"
                    : "You can also subscribe by contacting customer service"}
                </p>
                <a
                  href={`https://wa.me/${phoneNum}`}
                  className="shamel my-3 d-flex justify-content-center align-items-center gap-1 fs22"
                >
                  {i18n.language === "ar" ? (
                    <>
                      <p className="fw-bolder  green mx-0 mt-1 mb-0 shamel p-0 ">
                        {phoneNum}
                      </p>
                      <BsFillTelephoneFill className="green " />
                    </>
                  ) : (
                    <>
                      <BsFillTelephoneFill className="green " />
                      <p className="fw-bolder  green mx-0 mt-1 mb-0 shamel p-0 ">
                        {phoneNum}
                      </p>
                    </>
                  )}
                </a>
                <div className={`p-3 fw-bold ${style.purchas}`}>
                  <p className="text-center fs22 fw-bold shamel mb-2 mx-0 p-0">
                    {i18n.language === "ar"
                      ? " الاشتراك السريع"
                      : "Quick subscription"}
                  </p>
                  <div>
                    {purchasDetails.map((item, index) => (
                      <p
                        className="mx-0 fs18 book text-center p-0 mb-2 green"
                        key={index}
                      >
                        {index + 1}{" "}
                        {i18n.language === "ar" ? item.title : item.enTitle}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageModal;
/** 
 *   <div
        className={`${style.mainContainer} ${
          showModal ? style.show : style.hide
        }`}
      >
        <div className="container">
          <div
            ref={modalRef}
            className={`p-3 ${style.modal} ${
              showModal ? style.showModal : style.hideModal
            }`}
          >
            <p className="text-md-center fs18 shamel p-0 mx-0  fw-bold">
              يمكنك إرسال الطلب أو التواصل مع خدمة العملاء
            </p>
            <img
              src={close}
              alt="close/img"
              loading="lazy"
              className={style.mainImg}
              onClick={action}
            />
            <div className="row align-items-center gap-2">
              <div className="col-12 col-md-7">
                <div className={`p-2 mt-3 ${style.hero}`}>
                  <div className={style.main}>
                    <img
                      alt="data/img"
                      src={data[0].icon}
                      loading="lazy"
                      className={style.img}
                    />

                    <div className="text-center pt-4 mb-2">
                      <div dangerouslySetInnerHTML={{ __html: data[0].name }} />
                    </div>

                    <div className={style.detailsContainer}>
                      {data[0].plansFeatures.map((item, index) => (
                        <div
                          key={index}
                          className="mb-1 mt-0  d-flex px-3 align-items-centr gap-2"
                        >
                          {item.isTrue ? (
                            <IoCheckmarkCircleSharp
                              className="green"
                              size={20}
                            />
                          ) : (
                            <AiOutlineClose size={20} className={style.false} />
                          )}
                          <p className=" m-0 p-0">{item.name}</p>
                        </div>
                      ))}
                      <div className={`text-center my-4 ${style.text} `}>
                        <input
                          type="checkbox"
                          value={agree}
                          onChange={() => setAgree(true)}
                        />
                        <label>
                          {i18n.language === "ar" ? "اوافق علي" : "agree with"}

                          <span className={style.title2}>
                            {i18n.language === "ar"
                              ? "الشروط و الأحكام"
                              : "terms and conditions"}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3 d-flex justify-content-center align-items-center gap-2">
                    <div>
                      <p
                        className={`p-0 m-0 fs22  ${style.price} d-inline-block`}
                      >
                        {i18n.language === "en"
                          ? "after discount"
                          : "بعد الخصم"}
                      </p>
                      <p
                        className={`fw-bolder fs22 mx-1 p-0 m-0 ${style.price}   d-inline-block`}
                      >
                        {data[0].discount_price
                          ? data[0].price - data[0].discount_price
                          : data[0].price}{" "}
                        $
                      </p>
                    </div>
                    <p className={`fs20 p-0 m-0 ${style.original}`}>
                      {data[0].price} $
                    </p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-3 ">
                    <button
                      onClick={() => handleAddToCart(data[0])}
                      className={` mt-4 ${style.buyBtn}`}
                    >
                      <div className="fw-bold d-flex align-items-center gap-2">
                        <MdArrowBackIos size={15} />
                        <p className="m-0 p-0 fw-bold">{t("buyNow")}</p>
                      </div>
                      <span className={`${style.origineal}`}>
                        (
                        {data[0].discount_price
                          ? data[0].price - data[0].discount_price
                          : data[0].price}{" "}
                        $)
                      </span>
                    </button>
                    <button
                      onClick={() => handleAddToCart(data[0])}
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
              <div className="col-12 col-md-4">
                <p className="fw-bold shamel fs22 mx-0 my-0 p-0 text-center">
                  يمكنك أيضا الاشتراك عن طريقالتواصل مع خدمة العملاء
                </p>
                <a
                  href={`https://wa.me/${phoneNum}`}
                  className="shamel my-3 d-flex justify-content-center align-items-center gap-1 fs22"
                >
                  <p className="fw-bolder  green mx-0 mt-1 mb-0 shamel p-0 ">
                    {phoneNum}
                  </p>
                  <BsFillTelephoneFill className="green " />
                </a>

                <div className={`p-3 fw-bold ${style.purchas}`}>
                  <p className="text-center fs22 fw-bold shamel mb-2 mx-0 p-0">
                    الاشتراك السريع
                  </p>
                  <div>
                    {purchasDetails.map((item, index) => (
                      <p
                        className="mx-0 fs18 book text-center p-0 mb-2 green"
                        key={index}
                      >
                        {index + 1} {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
