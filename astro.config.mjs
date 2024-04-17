import { defineConfig } from "astro/config";

import SpanishLanguage from "./src/config/locales/spanish.json";
import EnglishLanguage from "./src/config/locales/english.json";

const resources = {
  en: {
    translation: EnglishLanguage,
  },
  es: {
    translation: SpanishLanguage,
  },
};
// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true,
  },
  integrations: [
    astroI18next({
      resources,
      baseLanguage: "en",
      i18next: {
        debug: true, // convenient during development to check for missing keys
        supportedLngs: ["en", "fr"],
      },
    }),
  ],
});
