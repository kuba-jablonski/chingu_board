import firebase from 'firebase';

const state = {
    user: null,
    edit: {
        aboutMe: false,
        skills: false,
        links: false
    },
    linkedUser: null  
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
    },
    SET_LINKED_USER_PROFILE(state, user) {
        state.linkedUser = user;
    }
};

const actions = {
    getUserProfile({ commit, rootState }) {
        firebase.database().ref(`users/${rootState.uid}`)
            .on('value', snap => {
                commit('SET_USER_PROFILE', snap.val());
            });
    }
};

const getters = {
    fullName(state) {
        if (state.linkedUser || state.user)
        return state.linkedUser 
            ? state.linkedUser.aboutMe.firstName + ' ' + state.linkedUser.aboutMe.lastName
            : state.user.aboutMe.firstName + ' ' + state.user.aboutMe.lastName;
    },
    aboutMe(state) {
        if (state.linkedUser || state.user)
        return state.linkedUser 
            ? state.linkedUser.aboutMe  
            : state.user.aboutMe;
    },
    skills(state) {
        if (state.linkedUser || state.user)
        return state.linkedUser 
            ? state.linkedUser.skills
            : state.user.skills
    },
    links(state) {
        if (state.linkedUser || state.user)
        return state.linkedUser 
            ? state.linkedUser.links
            : state.user.links
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};