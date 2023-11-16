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
import { useDispatch, useSelector } from "react-redux";
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
  const { cartItems } = useSelector((state) => state.cartSlice);
  console.log("this is items in the cart", cartItems);
  const dispatch = useDispatch();
  const data = packages.filter((item) => item.id === modalId);
  const { i18n } = useTranslation();
  const modalRef = useRef();
  const handleCloseRef = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      action();
      setShowModal(false);
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

  const [disabledBtn, setDisabledBtn] = useState(false);
  // handle add to cart
  const isLogin = JSON.parse(window.localStorage.getItem("isLogin"));

  const handleAddToCart = async (product) => {
    if (isLogin) {
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
        toast.error(data.message);
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
                          className="mb-1 mt-0  d-flex justify-content-center align-items-centr gap-2"
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
                        <input type="checkbox" />
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
                      className={`book ${style.btn}`}
                      onClick={() => handleAddToCart(data[0])}
                    >
                      <MdOutlineArrowBackIos size={20} />
                      <span className="mt-1">
                        {i18n.language === "ar" ? "اضف للعربة" : "add to cart"}
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
