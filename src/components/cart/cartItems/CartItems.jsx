import React from "react";
import style from "./cartItems.module.css";
import deleteIcon from "../../../assets/delete-svgrepo-com(2).png";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import secondImg from "../../../assets/secondImg.png";
import { removeFromCart, addAllProductToCart } from "../../../Redux/cart";
const CartItems = ({ user, items }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const lang = i18n.language;
  // const deleteFromApi = async (item) => {
  //   const res = await fetch(
  //     `https://almosawi.admin.technomasrsystems.com/api/cart/removeItem/${item.id}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         user,
  //         "Content-Type": "application/json",
  //         lang,
  //         type: item.product_type,
  //       },
  //     }
  //   );
  //   const data = await res.json();
  //   if (data.status === "success") {
  //     setCart(data.data.itemsDetails);
  //     toast.success(`${item.title} deleted successfully`);
  //   } else {
  //     toast.error("try again");
  //   }
  //   console.log("data from delete", data.data);

  //   return data;
  // };

  // const handleDeleteItems = (item) => {
  //   if (user) {
  //     deleteFromApi(item);
  //   } else {
  //     const updatedCart = items.filter((cartItem) => cartItem.id !== item.id);
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   }
  // };
  const handleDeleteItems = async (product) => {
    if (user) {
      const res = await fetch(
        `https://almosawi.admin.technomasrsystems.com/api/cart/removeItem/${product.id}`,
        {
          method: "GET",
          headers: {
            user,
            "Content-Type": "application/json",
            lang,
            type: "course",
          },
        }
      );
      const data = await res.json();
      if (data.status === "faild") {
        toast.error(data.message);
      } else {
        dispatch(addAllProductToCart(data.data.itemsDetails));
        toast.success(
          i18n.language === "ar"
            ? "تم الحذف من العربة بنجاح"
            : "item removed from the cart succefully"
        );
      }
    } else {
      dispatch(removeFromCart(product));
    }
  };
  return (
    <>
      <div className={`px-3 py-4 ${style.firstContainer}`}>
        <p className="m-0 p-0 fs28 shamel">{t("cart")}</p>
        <p className="mx-0 mt-0 p-0 mb-2">
          {i18n.language === "ar"
            ? `لديك ${items.length} في عربة التسوق`
            : `you have ${items.length} items on the cart`}
        </p>
        <div className={`p-2`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`py-2 d-flex justify-content-between align-items-center flex-column flex-md-row gap-3 gap-md-0 mb-4 p-2 ${style.card}`}
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  alt="product/img"
                  loading="lazy"
                  src={item.image ? item.image : secondImg}
                  className={style.img}
                />
                <p className={`m-0 p-0  fw-bold shamel `}>
                  {user ? item.name : item.title || item.name}
                </p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <p className="mx-0 mt-1 mb-0 p-0 fw-bold whiteGreen shamel">
                  {item.price_after_discount
                    ? item.price_after_discount
                    : item.price}
                  $
                </p>
                <img
                  onClick={() => handleDeleteItems(item)}
                  alt="delete/icon"
                  loading="lazy"
                  src={deleteIcon}
                  className={`${style.deleteIcon} pointer`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartItems;
