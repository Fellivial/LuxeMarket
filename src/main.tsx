import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.tsx";
import "./styles/index.css";

import DetailProduct from "./pages/Product/DetailProduct.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
