import React from "react";
import style from "./walletDetails.module.css";
import { useTranslation } from "react-i18next";

const WalletDetails = ({ profit, data }) => {
  const { i18n } = useTranslation();

  return (
    <div>
      <div className="mb-4 d-flex align-items-center justify-content-center flex-wrap gap-3">
        <div
          className={`${style.wallet} d-flex justify-content-center align-items-center  text-white`}
        >
          <p className="m-0 p-0 ">
            {i18n.language === "ar" ? "المحفظة" : "wallet"} : {profit}$
          </p>
        </div>
        <button className="customBtn">
          {i18n.language === "ar" ? "سحب العمولة" : "withdraw comession"}
        </button>
      </div>

      <div className="custom-table">
        <div className="table-header">
          <div className="table-cell">
            {i18n.language === "ar" ? " الطلب" : "order"}
          </div>
          <div className="table-cell">
            {i18n.language === "ar" ? "حالة الطلب" : "order status"}
          </div>
          <div className="table-cell">
            {i18n.language === "ar" ? "ايداع" : "total price"}
          </div>
          <div className="table-cell">
            {i18n.language === "ar" ? "سحب" : "comession"}
          </div>
        </div>
        {data.map((item, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{item.orderName}</div>
            <div className="table-cell">{item.status}</div>
            <div className="table-cell">{item.in}$</div>
            <div className="table-cell">
              {item.out === null
                ? i18n.language === "ar"
                  ? "لم يتم سحب العمولة"
                  : "The commission has not been withdrawn"
                : item.out + "$"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletDetails;
