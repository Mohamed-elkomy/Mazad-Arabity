import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Loader from "../components/ui/Loader/Loader";
import ErrorBoundaryWrapper from "./ErrorBoundary";
import RouteLoader from "./RouteLoader";

/* Lazy Pages */
const HomePage = lazy(() => import("../pages/Home/Home"));
const ReturnPage = lazy(() => import("../pages/Returns/Returns"));
const PrivacyPage = lazy(() => import("../pages/Privacy/Privacy"));
const TermsPage = lazy(() => import("../pages/Terms/Terms"));
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFound"));

export default function RouterApp() {
  return (
    <ErrorBoundaryWrapper>
      <RouteLoader>
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Layout */}
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="returns" element={<ReturnPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </RouteLoader>
    </ErrorBoundaryWrapper>
  );
}
