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
        uid: null
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
                if (user) {
                    commit('AUTH', true);
                    commit('UID', user.uid);
                    const usersRef = firebase.database().ref('users');
                    usersRef.once('value', snap => {
                        if (!snap.hasChild(user.uid)) {
                            usersRef.child(user.uid).set({
                                aboutMe: {
                                    firstName: '',
                                    lastName: '',
                                    livingIn: '',
                                    introduction: ''
                                },
                                skills: {},
                                links: {
                                    portfolio: '',
                                    github: ''
                                }
                            }).then(() => {
                                dispatch('getUserProfile');
                            })
                        } else {
                            dispatch('getUserProfile');
                        }
                    });
                } else {
                    commit('AUTH', false);
                    commit('UID', null);
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