<template>
    <section class="container">
        <div class="columns box">
            <div class="column is-one-third no-account has-text-centered">
                <router-link to="/signup" tag="a" class="signup-link">
                    
                    <span>No account? Create one.</span>
                    <span class="icon">
                                <i class="fa fa-user-plus"></i>
                            </span>
                </router-link></div>            
            <div class="column divider">
                <h2 class="title has-text-centered">Login</h2>
                <div class="field">
                    <p class="control has-icons-left">
                        <input v-model="form.username" class="input" type="text" placeholder="Username">
        <div class="box">
            <h2 class="title has-text-centered">Login</h2>
            <div class="field">
                <p class="control has-icons-left">
                    <input v-model="form.email" class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
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

            <div v-if="error.show" class="notification is-danger">
                <button @click="error.show = false" class="delete"></button>
                {{ error.message }}
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
                            <i class="fa fa-user"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input v-model="form.password" class="input" type="password" placeholder="Password">
                        <span>Sign in with Google</span>
                    </button>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button @click="signInWithProvider(providers.github)" class="button is-fullwidth">
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
import socialLogin from '../../mixins/socialLogin';

export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            error: {
                show: false,
                message: ''
            }
        }
    },
    methods: {
        logIn() {
            this.$firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
                .catch(e => {
                    this.error.show = true;
                    this.error.message = e.message;
                });
        }
    },
    mixins: [socialLogin]
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/signin.scss';
</style>
