<template>
    <section class="container">
        <div class="box">
            <h2 class="title has-text-centered">Register</h2>
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
    
            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                    <button @click="register" class="button">
                        Register
                    </button>
                </p>
                    <button class="button cancel">
                        Cancel
                    </button>
            </div>
            
            <hr>
            <div class="field">
                    <p class="control">
                        <button @click="signInWithProvider(providers.google)" class="button is-fullwidth">
                            <span class="icon is-small is-left">
                                <i class="fa fa-google"></i>
                            </span>
                            <span>Sign up with Google</span>
                        </button>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button @click="signInWithProvider(providers.github)" class="button is-fullwidth">
                            <span class="icon is-small is-left">
                                <i class="fa fa-github"></i>
                            </span>
                            <span>Sign up with Github</span>
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
        register() {
            this.$firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
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
