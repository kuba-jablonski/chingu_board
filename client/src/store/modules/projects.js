import firebase from 'firebase';

const state = {
    projects: []
};

const mutations = {
    SET_PROJECTS(state, projects) {
        state.projects = projects;
    }
};

const actions = {
    watchProjects({ commit }) {
        const projectRef = firebase.database().ref('projects');

        projectRef.on('value', snap => {
            let projects = [];
            snap.forEach(snap => {
                projects.push(snap.val());
            });
            commit('SET_PROJECTS', projects);
        });
    }
};

const getters = {
    projects(state) {
        return state.projects;
    },
    filteredProjects(state) {
        return search => {
            return state.projects.filter((project) => {
                return project.details.name.toLowerCase().match(search.toLowerCase());
            });
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};