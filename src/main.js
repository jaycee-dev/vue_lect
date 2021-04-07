import Vue from "vue";
//import App from "./App.vue";
import AppAxiosTest from "./AppAxiosTest.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
/* eslint-disable */
new Vue({
    router,
    store,
    render: h => h(AppAxiosTest)
}).$mount("#app");