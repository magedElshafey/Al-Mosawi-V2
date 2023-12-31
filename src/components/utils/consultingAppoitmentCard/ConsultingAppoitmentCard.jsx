import React from "react";
import style from "./consultingAppoitmentCard.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Spinner from "../Spinner/Spinner";
import { useQuery, useQueryClient } from "react-query";
import { request } from "../axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const ConsultingAppoitmentCard = ({ item, showButton }) => {
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  const [disabledCanclle, setDisableCancle] = useState(false);
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

  // handle canclle
  const canclleAppointment = (id) => {
    const headers = {
      appointmentId: id,
    };
    return request({ url: "/consultation/cancelAppointment", headers });
  };
  const { isLoading: loadingCanclle, refetch: canclle } = useQuery(
    "canclle-consulting-page",
    () => canclleAppointment(item.id),
    {
      enabled: false,
      onSuccess: (data) => {
        if (data.data.status === "success") {
          toast.success(data.data.message);
          queryClient.invalidateQueries("consultation-page");
          setDisableCancle(true);
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
  const handleCanclle = () => {
    canclle();
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className={`${style.mainDiv} px-2 py-2 mb-4 d-flex justify-content-between align-items-center flex-column flex-md-row gap-2 gap-md-0`}
        >
          <p className="m-0 p-0">
            {item.day} {i18n.language === "ar" ? "الموافق" : "on"} {item.date}{" "}
            {i18n.language === "ar" ? "الساعة" : "at"} {item.time}
          </p>
          {showButton && (
            <div className="d-flex flex-column align-items-center gap-3">
              <button
                onClick={() => handleClick(item.id)}
                disabled={item.disabled}
                className={`book ${style.seconBtn} ${
                  item.disabled ? style.disapled : null
                }`}
              >
                {i18n.language === "ar" ? (
                  <MdArrowBackIosNew />
                ) : (
                  <IoIosArrowForward />
                )}

                <span>
                  {!item.pay
                    ? i18n.language === "ar"
                      ? "ادفع"
                      : "pay"
                    : t("enterMetting")}
                </span>
              </button>
              {!item.pay ? (
                <button
                  onClick={() => handleCanclle(item.id)}
                  disabled={disabledCanclle}
                  className={`book ${style.seconBtn} ${
                    item.disabled ? style.disapled : null
                  }`}
                >
                  {i18n.language === "ar" ? (
                    <MdArrowBackIosNew />
                  ) : (
                    <IoIosArrowForward />
                  )}
                  <span>
                    {!item.pay
                      ? i18n.language === "ar"
                        ? "الغاء المعاد"
                        : "canclle appointment"
                      : t("enterMetting")}
                  </span>
                </button>
              ) : null}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ConsultingAppoitmentCard;
