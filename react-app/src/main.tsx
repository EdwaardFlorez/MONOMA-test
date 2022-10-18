import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Routes
import Routes from "../routes/Routes";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes></Routes>
    </HashRouter>
  </React.StrictMode>
);
