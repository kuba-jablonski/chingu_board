<template>
    <nav class="navbar ">
        <div class="navbar-brand">
            <router-link to="/" tag="a" class="navbar-item">
                CHINGU BOARD PROJECT
            </router-link>
    
            <div @click="showDropdown = !showDropdown" :class="{'is-active': showDropdown}" class="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    
        <div :class="{'is-active': showDropdown}" id="navMenu" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/projects" tag="a" class="navbar-item ">
                    Explore Projects
                </router-link>
            </div>
    
            <div class="navbar-end">
                <div class="navbar-item">
                    <router-link v-if="authed" to="/project/create" tag="a" class="navbar-item">
                        Create a New Project
                    </router-link>
                    <router-link v-if="authed" to="/profile" tag="a" class="navbar-item">
                        Profile
                    </router-link>
    
                    <p class="control">
                        <router-link v-if="!authed" to="/signin" tag="a" class="button">
                            <span class="icon">
                                <i class="fa fa-sign-in"></i>
                            </span>
                            <span>Login</span>
                        </router-link>
                        <a v-if="authed" @click="logOut" class="button">
                            <span class="icon">
                                <i class="fa fa-sign-in"></i>
                            </span>
                            <span>Logout</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showDropdown: false
        }
    },
    computed: {
        authed() {
            return this.$store.state.authenticated;
        }
    },
    methods: {
        logOut() {
            this.$store.commit('AUTH', false);
        }
    }
}
</script>
