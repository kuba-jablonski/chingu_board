import Vue from 'vue';
import Vuex from 'vuex';

// temporary fake data
import profile from './modules/profile';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authenticated: false
    },
    mutations: {
        AUTH(state, boolean) {
            state.authenticated = boolean;
        }
    },
    modules: {
        profile
    }
});