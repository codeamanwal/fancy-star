// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import russ from "./locales/russ.json";
import turkish from "./locales/turkish.json";
import arabic from "./locales/arabic.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    russ: { translation: russ },
    turkish: { translation: turkish },
    arabic: { translation: arabic },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  saveMissing: true,
});

export default i18n;
