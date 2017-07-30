import firebase from 'firebase';

const state = {
    user: {
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
    },
    edit: {
        aboutMe: false,
        skills: false,
        links: false
    }  
};

const mutations = {
    TOGGLE_EDIT(state, payload) {
        state.edit[payload.component] = payload.active;
    },
    ABOUT_ME_EDIT(state, aboutMe) {
        state.user.aboutMe = aboutMe;
    },
    SKILLS_EDIT(state, skills) {
        state.user.skills = skills;
    },
    LINKS_EDIT(state, links) {
        state.user.links = links;
    },
    SET_USER_PROFILE(state, user) {
        state.user = user;
    }
}

const actions = {
    getUserProfile({ commit, rootState }) {
        firebase.database().ref(`users/${rootState.uid}`)
            .on('value', snap => {
                commit('SET_USER_PROFILE', snap.val());
            });
    }
}

export default {
    state,
    mutations,
    actions
};