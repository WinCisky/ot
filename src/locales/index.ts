import { createI18n } from "vue-i18n";
import enUS from "./en-US.json";
import itIT from "./it-IT.json";

var browserLang = navigator.language;
const supportedLangs = [
  "it-IT",
  "en-US",
];

let lang = "en-US";
if (supportedLangs.includes(browserLang)) {
  lang = browserLang;
}

const i18n = createI18n<false>({
  legacy: false,
  locale: lang,
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "it-IT": itIT,
  },
});

export default i18n;
