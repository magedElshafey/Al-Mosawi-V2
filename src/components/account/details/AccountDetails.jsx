import React from "react";
import style from "./accountDetails.module.css";
import { Link } from "react-router-dom";
import BTN from "../../utils/btn/BTN";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { request } from "../../utils/axios";
import Spinner from "../../utils/Spinner/Spinner";
import AfilatorDashboard from "../../afilatorDashboard/AfilatorDashboard";
import WalletDetails from "../../wallet/WalletDetails";
import { handleRequest } from "../../../Redux/afilator";
import toast from "react-hot-toast";
const AccountDetails = ({ accountDetails, type, isTickmill }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpenAccount = () => navigate("/forex-account");
  const handleClick = () => navigate("/edit");
  const { isLogin, user } = useSelector((state) => state.authSlice);
  const { afilatorId, requestSent } = useSelector((state) => state.afilator);
  const accountType = JSON.parse(localStorage.getItem("accountType"));
  const fetchData = async () => {
    const headers = {
      userId: isLogin ? user : afilatorId,
    };
    return await request({ url: "/affiliate/links", headers });
  };
  const { isLoading, data } = useQuery("affiliate dashboard-page", fetchData);
  // wallet details
  const fetchWallet = async () => {
    const headers = {
      userId: isLogin ? user : afilatorId,
    };
    return await request({ url: "/affiliate/walletHistroy", headers });
  };
  const { isLoading: loadingWallets, data: wallets } = useQuery(
    "wallet-dashboard-page",
    fetchWallet
  );
  const handleAfilate = async () => {
    const res = await fetch(
      "https://almosawi.admin.technomasrsystems.com/api/affiliate/store",
      {
        method: "POST",
        headers: {
          userId: user,
          lang: i18n.language,
          "Content-Type": "application/json",
        },
        body: "",
      }
    );
    const data = await res.json();
    console.log("data from afilate", data);
    if (data.status) {
      toast.success(data.message);
      dispatch(handleRequest());
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      {isLoading || loadingWallets ? (
        <Spinner />
      ) : (
        <div>
          <div className={`p-4 mb-3  ${style.mainContainer}`}>
            <p className="fw-bolder shamel fs26 d-inline-block mx-0 mt-0 p-0  mb-1">
              {i18n.language === "ar" ? "مرحبا" : "welcome"} ,{" "}
            </p>
            <p
              className={`m-0 shamel fs26 fw-bolder me-2 p-0 d-inline-block ${style.name}`}
            >
              {accountDetails.name}
            </p>
            <p className={` ${style.desc}  m-0 p-0 `}>
              {i18n.language === "ar"
                ? "يمكنك تغيير هذه المعلومات عن طريق التواصل مع"
                : "You can change this information by contacting"}
              <Link to="" className={`m-0 p-0 ${style.customerService}`}>
                {" "}
                {i18n.language === "ar" ? "خدمة العملاء" : "customer service"}
              </Link>
            </p>
            <div className="row mb-3 mt-5">
              <div className="col-12 col-md-6 mb-2 mb-md-0">
                <div>
                  <span>{t("name")} : </span>{" "}
                  <p className="shamel  m-0 d-inline-block p-0 fw-bold ">
                    {accountDetails.name}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-2 mb-md-0">
                <div>
                  <span> {t("phone")} : </span>{" "}
                  <p className="shamel m-0 d-inline-block p-0 fw-bold">
                    {accountDetails.phone}
                  </p>
                </div>
              </div>
            </div>

            {isTickmill ? (
              <div className="row mb-2">
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <div>
                    <span> {t("accountNum")} : </span>{" "}
                    <p className="shamel m-0 d-inline-block p-0 fw-bold ">
                      {accountDetails.account_number}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <div>
                    <span>{t("accountKind")} : </span>{" "}
                    <p className="shamel m-0 d-inline-block p-0 fw-bold  text-uppercase">
                      {accountDetails.account_type}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {isTickmill ? (
              <div className="mb-2">
                <span> {t("investment")} : </span>{" "}
                <p className="shamel m-0 d-inline-block p-0 fw-bold  text-uppercase">
                  {accountDetails.invest_amount}$
                </p>{" "}
                <Link to="/" className={`${style.customerService}`}>
                  {t("edit")}
                </Link>
              </div>
            ) : null}
            <div className="mb-2 mt-4 d-flex align-items-center gap-2 flex-wrap">
              <BTN
                action={handleClick}
                text={
                  isTickmill
                    ? t("editInfo")
                    : i18n.language === "en"
                    ? "edit account"
                    : "تعديل الحساب"
                }
              />
              {!isTickmill &&
                accountType === null &&
                type === null &&
                !requestSent && (
                  <BTN
                    action={handleAfilate}
                    text={
                      i18n.language === "ar"
                        ? "انضم الي برنامج ال afilate"
                        : "join afilate"
                    }
                  />
                )}
              {!isTickmill && accountType === null && type === null && (
                <BTN
                  action={handleOpenAccount}
                  text={
                    i18n.language === "ar"
                      ? "طلب فتح حساب تداول"
                      : "Request to open a trading account"
                  }
                />
              )}
            </div>
          </div>
          {accountDetails.referral_code && (
            <div>
              <div className="my-4">
                <h4 className="mb-3">
                  {i18n.language === "ar"
                    ? "لوحة تحكم ال afilator"
                    : "afilator dashboard"}
                </h4>
                <AfilatorDashboard
                  prochart={data.data.prochart}
                  courses={data.data.courses}
                  profit={data.data.profit}
                />
              </div>
              {wallets.data.profit !== 0 && (
                <div className="mb-4">
                  <h4 className="mb-3">
                    {i18n.language === "ar"
                      ? "تفاصيل المحفظة"
                      : "wallet details"}
                  </h4>
                  <WalletDetails
                    profit={wallets?.data?.profit}
                    data={wallets?.data?.data}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AccountDetails;
