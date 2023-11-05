import React from "react";
import style from "./walletDetails.module.css";
import { useTranslation } from "react-i18next";
const WalletDetails = ({ profit, data }) => {
  const { i18n } = useTranslation();
  return (
    <div>
      <p
        className={`${style.wallet} d-flex flex-column align-items-center justify-content-center text-white mb-4`}
      >
        <p className="m-0 p-0">
          {i18n.language === "ar" ? "المحفظة" : "wallet"} :
        </p>
        <p className="m-0 p-0 fw-bold">{profit}$</p>
      </p>
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
            <div className="table-cell">{item.out}$</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletDetails;
