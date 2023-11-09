import React, { useState } from "react";
import style from "./walletDetails.module.css";
import { useTranslation } from "react-i18next";
import BTN from "../utils/btn/BTN";
import toast from "react-hot-toast";
import { MdKeyboardArrowRight, MdOutlineArrowBackIos } from "react-icons/md";
import { useMutation } from "react-query";
import { request } from "../utils/axios";
import { useSelector } from "react-redux";
const WalletDetails = ({ profit, data }) => {
  const { user } = useSelector((state) => state.authSlice);
  const { i18n } = useTranslation();
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  const handleShowWithdrawForm = () => setShowWithdrawForm(true);
  const handleWithdraw = (data) => {
    const headers = {
      userId: user,
    };
    return request({
      url: "/affiliate/withdraw",
      method: "post",
      data,
      headers,
    });
  };
  const { isLoading, mutate } = useMutation(handleWithdraw, {
    onSuccess: (data) => {
      if (data.data.status) {
        toast.success(data.data.message);
      } else {
        toast.error(data.data.message);
      }
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount.trim() || !method) {
      toast.error(
        i18n.language === "ar" ? "جميع الحقول مطلوبة" : "all field are required"
      );
    } else if (profit < amount) {
      toast.error(
        i18n.language === "ar"
          ? "المبلغ المراد سحبه لا يوجد في المحفظة"
          : "The amount to be withdrawn is not in the wallet"
      );
    } else {
      const data = { amount, method };
      mutate(data);
    }
  };
  return (
    <div>
      <div className="mb-4 d-flex align-items-center justify-content-center flex-wrap gap-3">
        <BTN
          showArrow={false}
          disabled={true}
          text={`${i18n.language === "ar" ? "المحفظة" : "wallet"} : ${profit}$`}
        />
        <BTN
          action={handleShowWithdrawForm}
          text={` ${
            i18n.language === "ar" ? "سحب العمولة" : "withdraw comession"
          }`}
        />
      </div>
      {showWithdrawForm && (
        <form className="my-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="amount" className="d-block mb-1">
              {i18n.language === "ar" ? "المبلغ" : "amount"}
            </label>
            <input
              type="number"
              className="inp"
              id="amount"
              min={0}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="way" className="d-block mb-1">
              {i18n.language === "ar" ? "طريقة السحب" : "withdraw function"}
            </label>
            <select
              className="inp"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="">
                {i18n.language === "ar"
                  ? "اختر طريقة الدفع"
                  : "choose your payment method"}
              </option>
              <option value="hyperpay">hyperpay</option>
              <option value="technicalSupport">technical support</option>
            </select>
          </div>
          <button className={` ${style.btn}`} type="submit">
            {i18n.language === "en" ? (
              <MdKeyboardArrowRight size={20} />
            ) : (
              <MdOutlineArrowBackIos size={20} />
            )}
            <span>{i18n.language === "ar" ? "اسحب" : "withdraw"}</span>
          </button>
        </form>
      )}
      <div className="custom-table">
        <div className="table-header">
          <div className="table-cell header">
            {i18n.language === "ar" ? " الطلب" : "order"}
          </div>
          <div className="table-cell header">
            {i18n.language === "ar" ? "حالة الطلب" : "order status"}
          </div>
          <div className="table-cell header">
            {i18n.language === "ar" ? "ايداع" : "total price"}
          </div>
          <div className="table-cell header">
            {i18n.language === "ar" ? "سحب" : "comession"}
          </div>
        </div>
        {data.map((item, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{item.orderName}</div>
            <div className="table-cell">{item.status}</div>
            <div className="table-cell">
              {item.in === null ? null : item.in + "$"}
            </div>
            <div className="table-cell">
              {item.out === null ? null : item.out + "$"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletDetails;
