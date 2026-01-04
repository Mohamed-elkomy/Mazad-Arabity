import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import RouterApp from "./router/AppRouter";
import ScrollToTop from "./router/ScrollToTop";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <ScrollToTop />
      <RouterApp />
    </>
  );
}
