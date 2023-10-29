import React from "react";
import style from "./consultingAppoitmentCard.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Spinner from "../Spinner/Spinner";
import { useQuery } from "react-query";
import { request } from "../axios";
import toast from "react-hot-toast";
const ConsultingAppoitmentCard = ({ item, showButton }) => {
  const { t, i18n } = useTranslation();
  const fetchData = (id) => {
    const headers = {
      appointmentId: id,
    };
    return request({ url: "/consultation/payConsulting", headers });
  };
  const { isLoading, refetch } = useQuery(
    "pay-for-consulting-page",
    () => fetchData(item.id),
    {
      cacheTime: 12000,
      staleTime: 12000,
      enabled: false,
      onSuccess: (data) => {
        console.log("this is the data", data);
        if (data.data.IsSuccess === "true") {
          window.location.href = data.data.Data.invoiceURL;
        } else {
          toast.error(
            i18n.language === "ar"
              ? "حدث خطأ اثناء الاتصال يرجي المحاولة مرة اخري"
              : "there is an error occured , please try again"
          );
        }
      },
    }
  );
  const handleClick = () => {
    refetch();
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className={`${style.mainDiv} px-2 py-2 mb-4 d-flex justify-content-between align-items-center`}
        >
          <p className="m-0 p-0">
            {item.day} {i18n.language === "ar" ? "الموافق" : "on"} {item.date}{" "}
            {i18n.language === "ar" ? "الساعة" : "at"} {item.time}
          </p>
          {showButton && (
            <button
              onClick={() => handleClick(item.id)}
              disabled={item.disabled}
              className={`book ${style.seconBtn} ${
                item.disabled ? style.disapled : null
              }`}
            >
              <MdArrowBackIosNew />
              <span className="mt-1">
                {!item.pay
                  ? i18n.language === "ar"
                    ? "ادفع"
                    : "pay"
                  : t("enterMetting")}
              </span>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ConsultingAppoitmentCard;
