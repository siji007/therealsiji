import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTailwind from 'vue-tailwind'
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueTailwind);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import "@/assets/styles/main.css";

import { routes } from './routes';
import VueRouter from 'vue-router'
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
{/* <script src="https://cdn.tailwindcss.com"></script> */}
Vue.use(LottieAnimation); // add lottie-animation to your global scope
// import 'jquery'
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router
}).$mount('#app')