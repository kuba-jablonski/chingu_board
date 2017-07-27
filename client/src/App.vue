<template>
    <div>
        <app-nav></app-nav>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';

export default {
    components: {
        appNav: Nav,
        appFooter: Footer
    }
}
</script>

<style lang="scss">
@import './assets/styles/settings.scss';
@import '~bulma/bulma.sass';

</style>

