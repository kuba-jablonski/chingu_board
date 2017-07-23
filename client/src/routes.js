import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Signin from './components/account/Signin.vue';
import Signup from './components/account/Signup.vue';
import Add from './components/Add.vue';

export default [
    { path: '', component: Home},
    { path: '/projects', component: Projects },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: '/add', component: Add }
];