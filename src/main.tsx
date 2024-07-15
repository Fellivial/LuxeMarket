import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.tsx";
import "./styles/index.css";

import Auth from "./component/Auth/Auth.tsx";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>
);
