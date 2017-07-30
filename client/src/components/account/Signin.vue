<template>
    <section class="container">
        <div class="box">
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
            <div class="field is-grouped">
                <p class="control">
                    <button @click="logIn" class="button">
                        Login
                    </button>
                </p>
                <router-link to="/signup" tag="a" class="signup-link">
                    No account? Create one.
                </router-link>
            </div>
            <hr>
            <div class="field">
                <p class="control">
                    <button @click="signInWithProvider(providers.google)" class="button is-fullwidth">
                        <span class="icon is-small is-left">
                            <i class="fa fa-google"></i>
                        </span>
                        <span>Sign in with Google</span>
                    </button>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button @click="signInWithProvider(providers.github)" class="button is-fullwidth">
                        <span class="icon is-small is-left">
                            <i class="fa fa-github"></i>
                        </span>
                        <span>Sign in with Github</span>
                    </button>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import socialLogin from '../../mixins/socialLogin';

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
    },
    mixins: [socialLogin]
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/signin.scss';

.signup-link {
    margin-top: auto;
}
</style>
