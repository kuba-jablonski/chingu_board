<template>
    <section class="container">
        <div class="columns box">
            <div class="column is-one-third no-account has-text-centered">
                <router-link to="/signup" tag="a" class="signup-link">
                    No account? Create one.
                </router-link></div>            
            <div class="column left-divider">
                <h2 class="title has-text-centered">Login</h2>
                <div class="field">
                    <p class="control has-icons-left">
                        <input v-model="form.username" class="input" type="text" placeholder="Username">
                        <span class="icon is-small is-left">
                            <i class="fa fa-user"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input v-model="form.password" class="input" type="password" placeholder="Password">
                        <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button @click="logIn" class="button is-fullwidth">
                            <span class="icon is-small is-left">
                                <i class="fa fa-sign-in"></i>
                            </span>
                            <span>Login</span>
                        </button>
                    </p>
                    
                </div>
                <hr>
                <div class="field">
                    <p class="control">
                        <button class="button is-fullwidth">
                            <span class="icon is-small is-left">
                                <i class="fa fa-google"></i>
                            </span>
                            <span>Sign in with Google</span>
                        </button>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-fullwidth">
                            <span class="icon is-small is-left">
                                <i class="fa fa-github"></i>
                            </span>
                            <span>Sign in with Github</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        logIn() {
            // !!!
            this.$store.commit('AUTH', true);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/signin.scss';
</style>
