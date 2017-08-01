import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';
import Signin from '../components/account/Signin.vue';
import Signup from '../components/account/Signup.vue';
import Profile from '../components/profile/Profile.vue';
import ProjectCreate from '../components/project/ProjectCreate.vue';
import ProjectDetails from '../components/project/ProjectDetails.vue';

import store from '../store/store';
import { router } from './router';

export const routes = [
    { path: '', component: Home},
    { path: '/projects', component: Projects },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
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
    { path: '/user/:id', component: Profile }
];