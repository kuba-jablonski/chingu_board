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
        authenticated: false,
        uid: null // firebase user ID
    },
    mutations: {
        AUTH(state, boolean) {
            state.authenticated = boolean;
        },
        UID(state, uid) {
            state.uid = uid;
        }
    },
    actions: {
        watchAuthState({ commit, dispatch }) {
            firebase.auth().onAuthStateChanged(user => {

                const emptyProfile = 
                {
                    aboutMe: {
                        firstName: '',
                        lastName: '',
                        livingIn: '',
                        introduction: ''
                    },
                    skills: [],
                    links: {
                        portfolio: '',
                        github: ''
                    }
                }

                if (user) {
                    commit('AUTH', true);
                    commit('UID', user.uid);

                    const usersRef = firebase.database().ref('users');
                    usersRef.once('value', snap => {
                        if (!snap.hasChild(user.uid)) {
                            usersRef.child(user.uid).set(emptyProfile)
                                .then(() => {
                                    dispatch('getUserProfile');
                                })
                        } else {
                            dispatch('getUserProfile');
                        }
                    });
                } else {
                    commit('AUTH', false);
                    commit('UID', null);
                    commit('SET_USER_PROFILE', emptyProfile)
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