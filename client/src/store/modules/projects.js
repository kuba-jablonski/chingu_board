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
                const project = snap.val();
                const creatorRef = firebase.database().ref(`users/${project.details.creator}/aboutMe`);
                creatorRef.once('value', snap => {
                    const creator = snap.val();
                    project.creatorSlack = 
                        creator !== null && creator.chingu
                        ? creator.chingu
                        : 'Anonymous';
                }).then(() => projects.push(project));
            });
            commit('SET_PROJECTS', projects);
        });
    }
};

const getters = {
    projects(state) {
        return state.projects;
    },
    filterProjectsByTitle(state) {
        return search => {
            return state.projects.filter((project) => {
                return project.details.name.toLowerCase().match(search.toLowerCase());
            });
        }
    },
    myProjects(state, getters, rootState){  
        return state.projects
            .filter(project => project.details.creator === rootState.uid);
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};