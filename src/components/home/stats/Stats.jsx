import React from "react";
import style from "./stats.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
const Stats = () => {
  return (
    <iframe
      src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22US%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%20to%20USD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.tradingview.com%2Fwidget%2Fticker-tape%2F%22%7D"
      width="100%"
      height="78"
      frameborder="0"
      style={{ backgroundColor: "#003684" }}
    ></iframe>
  );
};

export default Stats;
/**
 *<div
          className={`d-flex justify-content-center gap-3 align-items-center  ${style.statContainer}`}
        >
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropup />
            </span>
            <span className="text-uppercase text-white ">wwe</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropdown />
            </span>
            <span className="text-uppercase text-white ">dr</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropdown />
            </span>
            <span className="text-uppercase text-white ">tesla</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="green">
              0.77%
              <IoMdArrowDropdown />
            </span>
            <span className="text-uppercase text-white ">btc</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="green">
              0.77%
              <IoMdArrowDropdown />
            </span>
            <span className="text-uppercase text-white ">eth</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropup />
            </span>
            <span className="text-uppercase text-white ">mmm</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span className="red">
              0.77%
              <IoMdArrowDropup />
            </span>
            <span className="text-uppercase text-white ">mmm</span>
          </div>

          <span className="p-0   text-white">popular</span>
        </div>
 */
