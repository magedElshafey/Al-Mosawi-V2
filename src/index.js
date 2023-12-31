import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// aos
import "aos/dist/aos.css";
// toaster
import { Toaster } from "react-hot-toast";
// i18next
import "./i18n";
// index css
import "./index.css";
// redux
import { Provider } from "react-redux";
import store from "./Redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Toaster position="bottom-center" reverseOrder={false} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
