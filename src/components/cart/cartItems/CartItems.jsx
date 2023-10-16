import React, { useEffect, useState } from "react";
import style from "./cartItems.module.css";
import deleteIcon from "../../../assets/delete-svgrepo-com(2).png";
import { useTranslation } from "react-i18next";
import { useQuery, useQueryClient } from "react-query";
import { request } from "../../utils/axios";
import Spinner from "../../utils/Spinner/Spinner";
const CartItems = ({ items, user }) => {
  // const [cartItems, setCartItems] = useState(items);

  const [t] = useTranslation();
  const queryClient = useQueryClient();
  const deleteFromApi = (id, type) => {
    const headers = {
      user,
      type,
    };
    return request({ url: `/cart/removeItem/${id}`, headers });
  };
  const { isLoading, refetch } = useQuery(
    "delete-item",
    (id, type) => deleteFromApi(id, type),
    {
      enabled: false,
      onSuccess: (data) => {
        queryClient.invalidateQueries("cart-page");
        if (data.data.status) {
          console.log(data.data.data.itemsDetails);
          const updatedCart = data.data.data.itemsDetails;
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
      },
    }
  );
  const handleDeleteItems = (item) => {
    console.log("this is the item id", item);
    if (user) {
      refetch(item.id, item.product_type);
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
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
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default CartItems;
