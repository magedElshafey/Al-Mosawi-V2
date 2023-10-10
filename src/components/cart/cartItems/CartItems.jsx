import React, { useState } from "react";
import style from "./cartItems.module.css";
import deleteIcon from "../../../assets/delete-svgrepo-com(2).png";
import { useTranslation } from "react-i18next";
import { useQuery, useQueryClient } from "react-query";
import { request } from "../../utils/axios";
const CartItems = ({ items, user }) => {
  // const [cartItems, setCartItems] = useState(items);
  const [t] = useTranslation();
  const queryClient = useQueryClient();
  // const fetchData = (product) => {
  //   const headers = {
  //     user,
  //     type: product.product_type,
  //   };
  //   return request({ url: `/cart/removeItem/${product.id}`, headers });
  // };
  // const { isLoading } = useQuery(["delete-page", user], fetchData, {
  //   enabled: false,
  // });
  // const handleDeleteItems = async (product) => {
  //   if (user) {
  //     await fetchData(product);
  //     queryClient.invalidateQueries(["delete-page", user]);
  //   } else {
  //     const newData = items.filter((item) => item.id !== product.id);
  //     setCartItems(newData);
  //     window.localStorage.setItem("cart", JSON.stringify(newData));
  //   }

  //   // console.log("this is the product id", product.id);
  //   // console.log("this is the product tyep", product.product_type);
  //   // ;

  //   // const newData = items.filter((item) => item.id !== product.id);
  //   // // setItems(newData);
  //   // window.localStorage.setItem("cart", JSON.stringify(newData));
  // };
  return (
    <>
      <div className={`px-3 py-4 ${style.firstContainer}`}>
        <p className="m-0 p-0 fs28 shamel">{t("cart")}</p>
        <p className="mx-0 mt-0 p-0 mb-2">لديك عدد {items.length} منتجات</p>
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
                  src={item.image}
                  className={style.img}
                />
                <p className={`m-0 p-0  fw-bold shamel `}>{item.name}</p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <p className="mx-0 mt-1 mb-0 p-0 fw-bold whiteGreen shamel">
                  {item.price}$
                </p>
                <img
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
