import React, { useState, useRef } from "react";
import secondImg from "../assets/prochartImg.png";
import img from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import { whatOffer, quota } from "../fakers/data";
import Advantage from "../components/Prochart/advantages/Advantage.jsx";
import Maps from "../components/Prochart/Maps/Maps";
import Success from "../components/Prochart/success/Success";
import Management from "../components/Prochart/managment/Management";
import TextContent from "../components/Prochart/textContent/TextContent";
import PackageModal from "../components/Prochart/package/PackageModal";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
const Prochart = ({ phoneNum }) => {
  const { i18n } = useTranslation();
  const fetchData = () => {
    return request({ url: "/prochart" });
  };
  const { isLoading: loadingProchart, data } = useQuery(
    "prochart-page",
    fetchData,
    {
      cacheTime: 12000,
      staleTime: 12000,
    }
  );
  const sectionRef = useRef(null);
  const scrollToNextSection = () => {
    // Get the next section's offsetTop
    const nextSection = sectionRef.current.nextElementSibling;
    const offsetTop = nextSection.offsetTop;

    // Scroll to the next section smoothly
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState(null);
  const handleShowModal = (id) => {
    setShowModal(true);
    setModalId(id);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {loadingProchart ? (
        <Spinner />
      ) : (
        <div>
          <Hero
            onClick={scrollToNextSection}
            pageName={i18n.language === "en" ? "prochart" : "البروشارت"}
            img={data.data.data.header.image}
            isBigHero={true}
            isSmallHero={false}
            isMediumHero={false}
            isRow={true}
            secondImg={secondImg}
            title={data.data.data.header.title}
            intro={data.data.data.header.welcome}
            desc={data.data.data.header.des}
            bigDesc={true}
            isBtn={true}
            action={handleShowModal}
            btnText={data.data.data.header.buttonTitle}
          />
          <div className="container">
            <Advantage data={data.data.data.pros} main={sectionRef} />
            <Maps
              action={handleShowModal}
              showModal={showModal}
              data={data.data.data.prochart_plans}
            />
            <Success data={data.data.data.slider} />
            <Management data={data.data.data.wallet} />
            <TextContent data={data.data.data.wallet.finalWord} />
            {modalId && (
              <PackageModal
                action={handleCloseModal}
                showModal={showModal}
                setShowModal={setShowModal}
                phoneNum={phoneNum}
                modalId={modalId}
                packages={data.data.data.prochart_plans}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Prochart;
