import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.tsx";
import "./styles/index.css";

import DetailProduct from "./pages/Product/DetailProduct.tsx";
import Category from "./pages/Category/Category.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Category />
  </React.StrictMode>
);
