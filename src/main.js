import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const app = createApp(App)

app.use(router)
    .use(Particles, {
        init: async engine => {
            // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
            await loadFull(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
        },
    });
app.mount('#app')
