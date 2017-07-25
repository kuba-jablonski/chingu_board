import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import App from './App.vue';
import routes from './routes';
import store from './store/store';

// temporary setup
Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:3000'
});

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});