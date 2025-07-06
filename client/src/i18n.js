import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About": "About",
      "Projects": "Projects",
      "Contact": "Contact",
      "Portfolio": "Portfolio",
    }
  },
  tr: {
    translation: {
      "Home": "Ana Sayfa",
      "About": "Hakkımda",
      "Projects": "Projeler",
      "Contact": "İletişim",
      "Portfolio": "Portföy",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Başlangıç dili
    fallbackLng: "en", // Eğer dil bulunamazsa İngilizce kullan
    interpolation: { escapeValue: false }
  });

export default i18n;
