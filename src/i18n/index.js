import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from "./config";

// Arabic
import arCommon from "./locales/ar/common.json";
import arHome from "./locales/ar/home.json";
import arFooter from "./locales/ar/footer.json";
import arPolicy from "./locales/ar/policy.json";

// English
import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enFooter from "./locales/en/footer.json";
import enPolicy from "./locales/en/policy.json";

const savedLanguage = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      common: arCommon,
      home: arHome,
      footer: arFooter,
      policy: arPolicy,
    },
    en: {
      common: enCommon,
      home: enHome,
      footer: enFooter,
      policy: enPolicy,
    },
  },

  lng: savedLanguage || DEFAULT_LANGUAGE,
  fallbackLng: FALLBACK_LANGUAGE,

  supportedLngs: ["ar", "en"],

  ns: ["common", "home", "footer", "policy"],
  defaultNS: "common",

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

// 💾 حفظ اللغة تلقائيًا
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
