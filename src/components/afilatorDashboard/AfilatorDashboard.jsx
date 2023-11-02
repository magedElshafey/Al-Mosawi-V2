import React from "react";
import { Link } from "react-router-dom";
import style from "./afilatorDashboard.module.css";
import { useTranslation } from "react-i18next";
const AfilatorDashboard = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <Link
        className={`${style.wallet} d-flex flex-column align-items-center justify-content-center text-white mb-4`}
        to="/wallet"
      >
        <p className="m-0 p-0">
          {i18n.language === "ar" ? "المحفظة" : "wallet"} :
        </p>
        <p className="m-0 p-0 fw-bold">150$</p>
      </Link>

      <table className={`table  table-hover rounded-sm `}>
        <thead className="text-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">product</th>
            <th scope="col">link</th>
            <th scope="col">afilator code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AfilatorDashboard;
