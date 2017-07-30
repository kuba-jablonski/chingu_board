import firebase from 'firebase';

const state = {
    projects: []
};

const mutations = {
    SET_PROJECTS(state, projects) {
        state.projects = projects;
    }
}

const actions = {
    watchProjects({ commit }) {
        const projectRef = firebase.database().ref('projects')

        projectRef.on('value', snap => {
            commit('SET_PROJECTS', snap.val());
        });
    }
}

export default {
    state,
    mutations,
    actions
};