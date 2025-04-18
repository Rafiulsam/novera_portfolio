import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App.jsx";
import Layout from "./layouts/Layout.jsx";
import LoadingPage from "./components/LoadingPage.jsx";

const MonoPrints = lazy(() => import("./pages/MonoPrints"));
const App = lazy(() => import("./App"));

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/monoprints/:series" element={<MonoPrints />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);