import { createApp } from "vue";
import route from "./router";
import App from "./App.vue";

import "vfonts/FiraCode.css";

const app = createApp(App);

app.use(route);

app.mount("#app");
