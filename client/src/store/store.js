import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

// temporary fake data
import profile from './modules/profile';
import projects from './modules/projects';
import empty from './modules/empty';

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
    actions: {
        watchAuthState({ commit }) {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    commit('AUTH', true);
                } else {
                    commit('AUTH', false);
                }
            });
        }
    },    
    modules: {
        profile,
        projects,
        empty
    }
});