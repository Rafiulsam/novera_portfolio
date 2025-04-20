import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MonoPrints = lazy(() => import("./pages/MonoPrints"));
const App = lazy(() => import("./App"));
const Contact = lazy(() => import("./pages/Contact"));

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/monoprints/:series" element={<MonoPrints />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);