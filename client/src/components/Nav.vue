<template>
    <nav class="navbar ">
        <div class="navbar-brand">
            <a class="navbar-item">
                CHINGU BOARD PROJECT
            </a>
    
            <div @click="showDropdown = !showDropdown" :class="{'is-active': showDropdown}" class="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    
        <div :class="{'is-active': showDropdown}" id="navMenu" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item " href="http://bulma.io/">
                    Explore Projects
                </a>
            </div>
    
            <div class="navbar-end">
                <div class="navbar-item">
                    <p class="control">
                        <router-link to="signin" tag="a" class="button">
                            <span class="icon">
                                <i class="fa fa-sign-in"></i>
                            </span>
                            <span>Login</span>
                        </router-link>
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
    }
}
</script>
