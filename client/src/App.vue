<template>
    <div>
        <app-nav></app-nav>
        <router-view></router-view>
        <app-footer></app-footer>
        <toast position="ne"></toast>
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

import { Toast } from 'vuex-toast';

export default {
    components: {
        appNav: Nav,
        appFooter: Footer,
        Toast
    },
    created() {
        this.$store.dispatch('watchAuthState');
        this.$store.dispatch('watchProjects');
    }
}
</script>

<style lang="scss">
@import './assets/styles/settings.scss';
@import '~bulma/bulma.sass';

body {
    background-color: $light;
}
</style>

