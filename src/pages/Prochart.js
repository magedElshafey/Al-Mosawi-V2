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
const Prochart = () => {
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
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Hero
        onClick={scrollToNextSection}
        pageName="prochart"
        img={img}
        isBigHero={true}
        isSmallHero={false}
        isMediumHero={false}
        isRow={true}
        secondImg={secondImg}
        title="البروشارت / Prochart"
        intro="أهلا بكم في القسم الأكثر تميزا في موقعنا"
        desc="تحليلات ... صفقات ... ارباح "
        bigDesc={true}
        desc2="سجل الان و تداول بأفضل الصفقات مع الأفضل في عالم التداول"
        isBtn={true}
        action={handleShowModal}
      />
      <div className="container">
        <Advantage data={whatOffer} main={sectionRef} />
        <Maps action={handleShowModal} showModal={showModal} data={quota} />
        <Success />
        <Management />
        <TextContent />
        <PackageModal
          action={handleCloseModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default Prochart;
