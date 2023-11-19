import React from "react";
import MainBtn from "../../utils/mainBtn/MainBtn";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const TextContent = ({ text }) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="container pt-5 pb-3">
      <div className="d-flex flex-column align-items-center justify-content-center gap-2">
        <h2
          className="w-75 text-center m-0 p-0 lh fw-bold fs26 shamel "
          dangerouslySetInnerHTML={{ __html: text }}
        />

        <MainBtn action={handleClick} text={t("contact us")} />
      </div>
    </div>
  );
};

export default TextContent;
