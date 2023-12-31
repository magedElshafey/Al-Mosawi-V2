import React from "react";
import style from "./afilatorDashboard.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AiOutlineCopy } from "react-icons/ai";
import toast from "react-hot-toast";
const AfilatorDashboard = ({ prochart, courses, profit }) => {
  const { i18n } = useTranslation();
  const { code } = useSelector((state) => state.afilator);
  const courseLink = "https://almosawi.technomasrsystems.com/course";
  const prochartLink = "https://almosawi.technomasrsystems.com/prochart";
  const specialAccount =
    "https://almosawi.technomasrsystems.com/account/special";
  const maxAccount = "https://almosawi.technomasrsystems.com/account/max";
  const copyToClipboard = (link) => {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = link;

    // Append the input element to the DOM
    document.body.appendChild(tempInput);

    // Select the input element's value
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);
    toast.success(
      i18n.language === "ar" ? "تم نسخ الرابط بنجاح" : "link copied succfully"
    );
  };
  return (
    <div>
      <div className={style.walletContainer}>
        {`${i18n.language === "ar" ? "المحفظة" : "wallet"} : ${profit}$`}
      </div>

      <div className="custom-table my-4">
        <div className="table-header">
          <div className="table-cell header ">
            {i18n.language === "ar" ? "الدورات التدريبية" : "courses"}
          </div>
          <div className="table-cell header">
            {i18n.language === "ar" ? "الروابط" : "link"}
          </div>
        </div>
        {courses.map((course, index) => (
          <div className="table-row" key={index}>
            <div
              className="table-cell"
              dangerouslySetInnerHTML={{ __html: course.title }}
            />

            <div className="table-cell d-flex align-items-center gap-1  align-items-center">
              <AiOutlineCopy
                className="pointer"
                size={15}
                onClick={() =>
                  copyToClipboard(`${courseLink}/${course.id}?r=${code}`)
                }
              />
              <p className="m-0 p-0  customLink">{`${courseLink}/${course.id}?r=${code}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="custom-table my-4 ">
        <div className="table-header">
          <div className="table-cell header">
            {i18n.language === "ar" ? "البروشارت" : "procharts"}
          </div>
          <div className="table-cell header">
            {i18n.language === "ar" ? "الروابط" : "link"}
          </div>
        </div>
        {prochart.map((prochart, index) => (
          <div className="table-row" key={index}>
            <div
              className="table-cell"
              dangerouslySetInnerHTML={{
                __html:
                  i18n.language === "ar"
                    ? prochart.title_ar
                    : prochart.title_en,
              }}
            />

            <div className="table-cell d-flex align-items-center gap-1  align-items-center">
              <AiOutlineCopy
                className="pointer"
                size={15}
                onClick={() => copyToClipboard(`${prochartLink}?r=${code}`)}
              />
              <p className="m-0 p-0  customLink">{`${prochartLink}?r=${code}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="custom-table ">
        <div className="table-header">
          <div className="table-cell header">
            {i18n.language === "ar" ? "الحسابات" : "accounts"}
          </div>
          <div className="table-cell header">
            {i18n.language === "ar" ? "الروابط" : "link"}
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell">
            {i18n.language === "ar" ? "حسابات MAX" : "max account"}
          </div>
          <div className="table-cell d-flex align-items-center gap-1  align-items-center">
            <AiOutlineCopy
              className="pointer"
              size={15}
              onClick={() => copyToClipboard(`${maxAccount}?r=${code}`)}
            />
            <p className="m-0 p-0  customLink">{`${maxAccount}?r=${code}`}</p>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell">
            {i18n.language === "ar" ? "الحسابات الأساية" : "basic account"}
          </div>
          <div className="table-cell d-flex align-items-center gap-1  align-items-center">
            <AiOutlineCopy
              className="pointer"
              size={15}
              onClick={() => copyToClipboard(`${specialAccount}?r=${code}`)}
            />
            <p className="m-0 p-0  customLink">{`${specialAccount}?r=${code}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfilatorDashboard;
