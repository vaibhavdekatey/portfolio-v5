import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Inspector } from "react-dev-inspector";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Inspector>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Inspector>
  </BrowserRouter>,
);
