import { Route, Routes, useLocation } from "react-router";
import CatalogPage from "@/components/CatalogPage";
import ProductPage from "./ProductPage";
import nProgress from "nprogress";
import { useEffect } from "react";

export default function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    nProgress.configure({
      showSpinner: false,
    });

    nProgress.trickle();
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/:id" element={<ProductPage />} />
    </Routes>
  );
}
