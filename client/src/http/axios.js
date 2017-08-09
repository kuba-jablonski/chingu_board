import Vue from 'vue';
import axios from 'axios';

export const botServer = axios.create({
    baseURL: 'https://project-peddler.herokuapp.com/'
});