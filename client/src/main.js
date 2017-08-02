import Vue from 'vue';
import firebase from 'firebase';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import store from './store/store';
import { router } from './router/router';

sync(store, router);

Vue.prototype.$firebase = firebase.initializeApp({
    apiKey: "AIzaSyAqiyo1BlV5L_qktQxWHl68DTSm4trOf2E",
    authDomain: "chingu-board.firebaseapp.com",
    databaseURL: "https://chingu-board.firebaseio.com",
    projectId: "chingu-board",
    // apiKey: "AIzaSyDIOPUYTmuZB48e5Z-W4pqAanYLQ_eRSWo",
    // authDomain: "boardtest-58415.firebaseapp.com",
    // databaseURL: "https://boardtest-58415.firebaseio.com",
    // projectId: "boardtest-58415",
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});