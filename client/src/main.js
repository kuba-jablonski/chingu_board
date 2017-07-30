import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import firebase from 'firebase';

import App from './App.vue';
import routes from './routes';
import store from './store/store';

Vue.prototype.$firebase = firebase.initializeApp({
    apiKey: "AIzaSyAqiyo1BlV5L_qktQxWHl68DTSm4trOf2E",
    authDomain: "chingu-board.firebaseapp.com",
    databaseURL: "https://chingu-board.firebaseio.com",
    projectId: "chingu-board",
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