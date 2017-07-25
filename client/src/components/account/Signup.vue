<template>
    <section class="section container is-flex">
        <div class="box">
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
                    <button @click="register" class="button">
                        Register
                    </button>
                </p>
                    <button class="button">
                        Cancel
                    </button>
            </div>
            <hr>
            <div class="field">
                <p class="control">
                    <button class="button is-fullwidth">
                        Sign in with Google
                    </button>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-fullwidth">
                        Sign in with Github
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
.is-flex {
    justify-content: center;
}
</style>
