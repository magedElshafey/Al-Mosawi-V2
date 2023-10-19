import React, { useRef, useEffect, useState } from "react";
import style from "./modal.module.css";
import close from "../../../assets/cross.png";
import { purchasDetails } from "../../../fakers/data.js";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { toast } from "react-hot-toast";
import Spinner from "../../utils/Spinner/Spinner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { request } from "../../utils/axios.js";
const PackageModal = ({
  showModal,
  action,
  setShowModal,
  phoneNum,
  modalId,
  packages,
}) => {
  const navigate = useNavigate();
  const data = packages.filter((item) => item.id === modalId);
  const { i18n } = useTranslation();
  const modalRef = useRef();
  const handleCloseRef = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      action();
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
  const cartItems = window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [];
  const [disabledBtn, setDisabledBtn] = useState(false);
  // handle add to cart
  const isLogin = JSON.parse(window.localStorage.getItem("isLogin"));
  const addProchartToApi = (data) => {
    const headers = {
      type: "ProchartPlans",
      user,
    };
    return request({ url: "/cart/add", method: "post", headers, data });
  };
  const { isLoading, mutate } = useMutation(addProchartToApi, {
    onSuccess: (data) => {
      toast.success(
        i18n.language === "ar" ? ` تم اضافته للعربة بنجاح` : ` added to cart`
      );
      window.localStorage.setItem(
        "cart",
        JSON.stringify(data?.data?.data?.itemsDetails)
      );
      navigate("/cart");
    },
    onError: () => {
      toast.error(
        i18n.language === "en"
          ? "there is an error occurred , please try again"
          : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
      );
    },
  });
  const handleAddToCart = async (product) => {
    console.log("this is the product", product);
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      setDisabledBtn(true);
      toast.error(
        i18n.language === "en"
          ? "this item already at the cart"
          : "هذا المنتج موجود في العربة بالفعل"
      );
    } else {
      if (isLogin) {
        const courseDetails = { productId: product.id };
        await mutate(courseDetails);
        setShowModal(false);
      } else {
        setShowModal(false);
        navigate("/login");
      }
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
                        <div
                          dangerouslySetInnerHTML={{ __html: data[0].name }}
                        />
                      </div>

                      <div className={style.detailsContainer}>
                        {data[0].plansFeatures.map((item, index) => (
                          <div
                            key={index}
                            className="mb-1 mt-0  d-flex justify-content-center align-items-centr gap-2"
                          >
                            {item.isTrue ? (
                              <IoCheckmarkCircleSharp
                                className="green"
                                size={20}
                              />
                            ) : (
                              <AiOutlineClose
                                size={20}
                                className={style.false}
                              />
                            )}
                            <p className=" m-0 p-0">{item.name}</p>
                          </div>
                        ))}
                        <div className={`text-center my-4 ${style.text} `}>
                          <input type="checkbox" />
                          <label>
                            أوافق علي{" "}
                            <span className={style.title2}>
                              الشروط و الأحكام
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 d-flex justify-content-center align-items-center gap-2">
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
                    <div className="d-flex justify-content-center ">
                      <button
                        disabled={disabledBtn ? true : false}
                        className={`book ${style.btn}`}
                        onClick={() => handleAddToCart(data[0])}
                      >
                        <MdOutlineArrowBackIos size={20} />
                        <span className="mt-1">
                          {i18n.language === "ar"
                            ? "اضف للعربة"
                            : "add to cart"}
                        </span>
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
      )}
    </>
  );
};

export default PackageModal;
/*
     <div className="container">
        <div
          ref={modalRef}
          className={`${style.modal} ${
            showModal ? style.showModal : style.hideModal
          }`}
        >
          <div className="p-3">
           
           >
            </p>
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
            
              </div>
              
            </div>
          </div>
        </div>
      </div>
*/
/**
 *  {data.map((item, index) => (
                   
                  ))}
 */
