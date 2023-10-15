import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./store/store.js";

import "./index.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/leaflet.css";
import "./assets/css/owl.carousel.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
