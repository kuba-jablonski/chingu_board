import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

import { router } from '../router/router';

import profile from './modules/profile';
import projects from './modules/projects';
// import empty from './modules/empty';

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
        watchAuthState({ commit, dispatch, state }) {
            firebase.auth().onAuthStateChanged(user => {

                const emptyProfile = 
                {
                    aboutMe: {
                        firstName: '',
                        lastName: '',
                        livingIn: '',
                        introduction: '',
                        chingu: ''
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
                    commit('SET_USER_PROFILE', emptyProfile);
                    const usersRef = firebase.database().ref('users');
                    usersRef.once('value', snap => {
                        if (!snap.hasChild(user.uid)) {
                            usersRef.child(user.uid).set(emptyProfile)
                                .then(() => {
                                    dispatch('getUserProfile');
                                    if (state.route.path === '/signup' || state.route.path === '/signin') {
                                        router.push('/profile');
                                    }
                                })
                        } else {
                            dispatch('getUserProfile');
                            if (state.route.path === '/signup' || state.route.path === '/signin') {
                                router.push('/projects');
                            }
                        }
                    });
                } else {
                    commit('AUTH', false);
                    commit('UID', null);
                    commit('SET_USER_PROFILE', emptyProfile);
                    if (state.route.path === '/profile' 
                    || state.route.path === '/project/create' 
                    || state.route.path === '/my-projects'
                    || state.route.path === '/applications') {
                        router.push('/projects');
                    }
                }
            });
        }
    },
    modules: {
        profile,
        projects,
        // empty
    }
});