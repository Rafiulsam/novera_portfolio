import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import MonoPrints from "./pages/MonoPrints.jsx";
import Layout from "./layouts/Layout.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/monoprints" element={<MonoPrints />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);