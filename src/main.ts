import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./locales";
import { createMetaManager } from "vue-meta";
import VueSplide from "@splidejs/vue-splide";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(createMetaManager());
app.use(VueSplide);

app.mount("#app");
