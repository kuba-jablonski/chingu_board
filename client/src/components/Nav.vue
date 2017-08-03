<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <router-link to="/" tag="a" id="logo" class="navbar-item">
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
                <router-link to="/projects" tag="a" class="navbar-item view-link" active-class="view-link-active" exact>
                    Explore Projects
                </router-link>
                <router-link v-if="authed" to="/my-projects" tag="a" class="navbar-item view-link" active-class="view-link-active" exact>
                    My Projects
                </router-link>
                <router-link v-if="authed" to="/applications" tag="a" class="navbar-item view-link" active-class="view-link-active" exact>
                    Applications
                </router-link>                   
            </div>
    
            <div class="navbar-end">
                    <router-link v-if="authed" to="/project/create" tag="a" class="navbar-item view-link" active-class="view-link-active" exact>
                        Create a New Project
                    </router-link>
                    <router-link v-if="authed" to="/profile" tag="a" class="navbar-item view-link" active-class="view-link-active" exact>
                        Profile
                    </router-link>
    
                <div class="navbar-item">
                    <div class="field">
                        <p class="control">
                            <router-link v-if="!authed" to="/signin" tag="a" class="button is-primary is-outlined">
                                <span class="icon">
                                    <i class="fa fa-sign-in"></i>
                                </span>
                                <span>Login</span>
                            </router-link>
                            <a v-if="authed" @click="logOut" class="button">
                                <span class="icon">
                                    <i class="fa fa-sign-out"></i>
                                </span>
                                <span>Logout</span>
                            </a>
                        </p>
                    </div>
    
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import authed from '../mixins/authed';    
    
export default {
    data() {
        return {
            showDropdown: false
        }
    },
    methods: {
        logOut() {
            this.$firebase.auth().signOut();
        }
    },
    mixins: [authed]
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/settings.scss';

#logo {
    color: $primary;
    font-weight: bold;
}

#navMenu.navbar-menu.is-active{
    min-width: 120px;
    background: rgba(181,194,199, 0.9);
    width: 90%;
    position: absolute;
    top: 50;
    right: 0;
    z-index: 100;
}

.view-link {
    font-size: $size-7;
    text-transform: uppercase;
}

.view-link-active {
    color: $primary
}
</style>
