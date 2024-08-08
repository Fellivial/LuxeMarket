import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.tsx";
import "./styles/index.css";

import DetailProduct from "./pages/Product/DetailProduct.tsx";
import Category from "./pages/Category/Category.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import UserProfile from "./pages/Profile/UserProfile.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProfile />
  </React.StrictMode>
);
