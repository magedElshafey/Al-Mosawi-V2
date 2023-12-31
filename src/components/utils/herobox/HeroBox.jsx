import React, { useState } from "react";
import style from "./HeroBox.module.css";
import DealsHeader from "../../deals/dealsHeader/DealsHeader";
import DealsDetails from "../../deals/dealsDetails/DealsDetails";
import RecommendationCard from "../../recommendations/RecommendationCard";
import { useTranslation } from "react-i18next";
import HistoryDetails from "../../history/historyDetails/HistoryDetails";
import { AiOutlineSearch } from "react-icons/ai";
import ReactPlayer from "react-player";
import AccountDetails from "../../forexDetails/accountDetails/AccountDetails";
import AfilatorDashboard from "../../afilatorDashboard/AfilatorDashboard";
import WalletDetails from "../../wallet/WalletDetails";
import ImgModal from "../imgModal/ImgModal";
const HeroBox = ({
  isHistory,
  isVideo,
  isRecommendations,
  isAfilator,
  isWallet,
  videoData,
  dealsData,
  status,
  type,
  date,
  setDate,
  dealType,
  setDealType,
  dealStatus,
  setDealStatus,
  handleSearch,
  accountDetails,
  prochart,
  courses,
  profit,
  wallet,
  historyData,
}) => {
  const { i18n } = useTranslation();
  const [showImgModal, setShowImgModal] = useState(false);
  return (
    <>
      <div className={`position-relative m-0 p-0 ${style.mainDiv}`}>
        <div
          className={`z-3 container ${
            isWallet ? null : "mt-5 pt-5"
          }   mb-0 pb-0`}
        >
          {!isRecommendations &&
            !isVideo &&
            !isHistory &&
            !isAfilator &&
            !isWallet && (
              <div className="m-0 p-0">
                <div className={`p-2 pb-0 m-0 pb-5 ${style.dealsBox}`}>
                  <DealsHeader data={dealsData} />
                  <div
                    className={`pt-2 my-4 z-3 row align-items-center gap-5 `}
                  >
                    <div className="z-3  position-relative col-12 col-md-7  mb-md-0">
                      <img
                        onClick={() => setShowImgModal(true)}
                        alt="bitcoin/img"
                        loading="lazy"
                        src={dealsData.image}
                        className={` pointer ${style.chartsImg}`}
                      />
                    </div>
                    <div className="z-3 col-12 col-md-4  mb-md-0">
                      <DealsDetails data={dealsData} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          {isVideo &&
            !isRecommendations &&
            !isHistory &&
            !isAfilator &&
            !isWallet && (
              <div className="p-0 m-0 z-3 row justify-content-center align-items-center">
                <div className="p-0 m-0z-3 col-12 col-md-8 d-flex flex-column  align-items-center">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{ __html: videoData.mainTitle }}
                    />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: videoData.mainDes }}
                  />
                  <div className="d-none d-md-block">
                    <ReactPlayer
                      url={videoData.link}
                      playing={true}
                      loop={true}
                      muted={true}
                      width={540}
                    />
                  </div>
                  <div className="d-md-none">
                    <ReactPlayer
                      url={videoData.link}
                      playing={true}
                      loop={true}
                      muted={true}
                      width={340}
                    />
                  </div>
                </div>
              </div>
            )}
          {isHistory &&
            !isVideo &&
            !isRecommendations &&
            !isAfilator &&
            !isWallet && (
              <div className=" mt-5 pt-4 pb-3">
                <div className=" d-flex  justify-content-between align-items-center flex-column flex-md-row gap-3 gap-md-0 mb-4">
                  <p className="z-3  m-0 p-0 text-white fw-bolder fs20">
                    {i18n.language === "ar"
                      ? "تاريخ التوصيات"
                      : "History of recommendations"}
                  </p>
                  <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
                    <select
                      value={dealType}
                      onChange={(e) => setDealType(e.target.value)}
                      className={`${style.box2}`}
                    >
                      <option value="" disabled>
                        {i18n.language === "ar"
                          ? "نوع الصفقة - الكل"
                          : "Transaction Type - All"}
                      </option>
                      <option value="buy">{type.buy}</option>
                      <option value="sell">{type.sell}</option>
                    </select>
                    <select
                      value={dealStatus}
                      onChange={(e) => setDealStatus(e.target.value)}
                      className={`${style.box2}`}
                    >
                      <option value="">
                        {i18n.language === "ar"
                          ? " حالة الصفقة"
                          : "Transaction status"}
                      </option>
                      <option value="active">{status.active}</option>
                      <option value="unactive">{status.unactive}</option>
                      <option value="expired">{status.expired}</option>
                    </select>

                    <input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      type="date"
                      className={`text-center bg-light ${style.box2} ${style.inp}`}
                    />

                    <button
                      onClick={handleSearch}
                      className={`book ${style.box} ${style.btn2}`}
                    >
                      <AiOutlineSearch />
                      <span className="mx-0 mt-1 p-0">
                        {i18n.language === "en" ? "show result" : "عرض النتائج"}
                      </span>
                    </button>
                  </div>
                </div>
                <HistoryDetails data={historyData} />
              </div>
            )}
          {!isVideo &&
            isRecommendations &&
            !isHistory &&
            !isAfilator &&
            !isWallet && (
              <>
                <p
                  className={`m-0 p-0  text-white   fs30 fw-bold ${style.reco}`}
                >
                  {i18n.language === "ar"
                    ? "قسم التحليلات و التوصيات"
                    : "Analysis and recommendations section"}
                </p>
                <div className="d-flex flex-wrap  align-items-center gap-4 mt-3 justify-content-center">
                  {historyData.map((item, index) => (
                    <RecommendationCard data={item} key={index} />
                  ))}
                </div>
              </>
            )}
          {!isVideo &&
            !isRecommendations &&
            !isHistory &&
            isAfilator &&
            !isWallet && (
              <>
                <div className="row">
                  <div className="col-12 col-md-3">
                    <AccountDetails isAfilate={true} data={accountDetails} />
                  </div>
                  <div className="col-12 col-md-9">
                    <AfilatorDashboard
                      prochart={prochart}
                      courses={courses}
                      profit={profit}
                    />
                  </div>
                </div>
              </>
            )}
          {!isVideo &&
            !isRecommendations &&
            !isHistory &&
            !isAfilator &&
            isWallet && (
              <>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    <AccountDetails isWallet={true} data={accountDetails} />
                  </div>
                  <div className="col-12 col-md-9">
                    <WalletDetails data={wallet} profit={profit} />
                  </div>
                </div>
              </>
            )}
        </div>
      </div>
      {showImgModal ? (
        <ImgModal
          showImgModal={showImgModal}
          img={dealsData?.image}
          setShowImgModal={setShowImgModal}
        />
      ) : null}
    </>
  );
};

export default HeroBox;
