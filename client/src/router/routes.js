import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';
import Signin from '../components/account/Signin.vue';
import Signup from '../components/account/Signup.vue';
import Profile from '../components/profile/Profile.vue';
import ProjectCreate from '../components/project/ProjectCreate.vue';
import ProjectDetails from '../components/project/ProjectDetails.vue';
import MyProjects from '../components/MyProjects.vue';
import Applications from '../components/Applications.vue';
import Who from '../components/Who.vue';

import store from '../store/store';
import { router } from './router';

export const routes = [
    { path: '', component: Home},
    { path: '/projects', component: Projects },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: '/who', component: Who },
    { path: '/profile', component: Profile, 
        beforeEnter(to, from, next) {
            store.state.authenticated ? next() : router.push('/');
        } 
    },
    { path: '/project/create', component: ProjectCreate,
        beforeEnter(to, from, next) {
            store.state.authenticated ? next() : router.push('/');
        } 
    },
    { path: '/project/:id', component: ProjectDetails },
    { path: '/user/:id', component: Profile },
    { path: '/my-projects', component: MyProjects,
        beforeEnter(to, from, next) {
            store.state.authenticated ? next() : router.push('/');
        } 
    },
    { path: '/applications', component: Applications,
        beforeEnter(to, from, next) {
            store.state.authenticated ? next() : router.push('/');
        } 
    },
    { path: '/project/edit/:id', component: ProjectCreate, name: 'projectEdit',
        beforeEnter(to, from, next) {
            const project = store.getters.findProjectById(to.params.id);

            project && (project.details.creator === store.state.uid) ? next() : router.push('/');                    
        } 
    }   
];