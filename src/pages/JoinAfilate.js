import React, { useState } from "react";
import heroImg from "../assets/hero.png";
import Hero from "../components/utils/hero/Hero";
import RegModal from "../components/Reg/regmodal/RegModal";
import { useTranslation } from "react-i18next";
import AfilateForm from "../components/joinAfilate/form/AfilateForm";
import Img3D from "../components/joinAfilate/Img3D";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
const JoinAfilate = ({ lang }) => {
  const { i18n, t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const fetchData = () => {
    return request({ url: "/affiliate/term" });
  };
  const { isLoading, data } = useQuery("afilate-page", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <Hero
              isBigHero={false}
              isSmallHero={true}
              isMediumHero={false}
              img={heroImg}
              title={t("afTitle")}
              desc={t("afDesc")}
              isStatic={true}
            />
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <AfilateForm lang={lang} setShowModal={setShowModal} />
                </div>
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <Img3D />
                </div>
              </div>
            </div>
          </div>
          <RegModal
            setShowModal={setShowModal}
            showModal={showModal}
            data={data.data.data.details}
          />
        </>
      )}
    </>
  );
};

export default JoinAfilate;
