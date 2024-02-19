import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import translationEN from '../public/locales/en/translation.json';
import translationDE from '../public/locales/de/translation.json';
import translationES from '../public/locales/es/translation.json';
import translationFR from '../public/locales/fr/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(Backend).use(initReactI18next).init({
  resources,
  debug: true,
  fallbackLng: 'en',
});

export default i18n;
