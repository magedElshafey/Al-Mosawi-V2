import React from "react";
import BTN from "../../utils/btn/BTN";
import { useTranslation } from "react-i18next";
const TextContent = ({ data }) => {
  const [t] = useTranslation();
  return (
    <div className="py-4 text-center">
      <p className="fw-bold fs24 shamel  w-75  mx-auto mb-4 p-0">{data}</p>
      <div className="d-flex justify-content-center">
        <BTN text={t("contact us")} />
      </div>
    </div>
  );
};

export default TextContent;
