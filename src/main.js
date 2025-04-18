import { createApp } from "vue";
import App from "./App.vue";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import router from './router'
import './assets/styles.css';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(Particles, {
    init: async (engine) => {
        await loadSlim(engine);
    },
});

app.use(router) ;
app.use(createPinia());
app.mount("#app");
