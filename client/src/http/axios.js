import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$botServer = axios.create({
    baseURL: 'https://project-peddler.herokuapp.com/'
});