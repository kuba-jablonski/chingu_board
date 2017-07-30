<template>
    <section class="container">
        <div class="box">
            <h2 class="title has-text-centered">Register</h2>
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
                        <button class="button is-fullwidth">
                            <span class="icon is-small is-left">
                                <i class="fa fa-google"></i>
                            </span>
                            <span>Sign up with Google</span>
                        </button>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-fullwidth">
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
        register() {
            // !!!
            this.$store.commit('AUTH', true);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/signin.scss';
</style>
