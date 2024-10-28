import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import Dashboard from "./pages/Profile/Seller/Dashboard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
