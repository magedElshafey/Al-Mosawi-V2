import React, { useState } from "react";
import HeroBox from "../components/utils/herobox/HeroBox";
import { request } from "../components/utils/axios";
import Spinner from "../components/utils/Spinner/Spinner";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ImgModal from "../components/utils/imgModal/ImgModal";
const Deals = () => {
  const [showImgModal, setShowImgModal] = useState(false);

  const params = useParams();
  const fetchData = (id) => {
    return request({ url: `/deal/show/${id}` });
  };
  const { isLoading, data } = useQuery(["deals -details-page", params.id], () =>
    fetchData(params.id)
  );
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <HeroBox
            dealsData={data.data.data}
            isRecommendations={false}
            isVideo={false}
            isHistory={false}
            isAfilator={false}
            isWallet={false}
          />
          <ImgModal
            showImgModal={showImgModal}
            img={data?.data?.data?.image}
            setShowImgModal={setShowImgModal}
          />
        </div>
      )}
    </>
  );
};

export default Deals;
