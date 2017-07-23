<template>
    <div class="container">
        <div class="row">
            <h1>SIGN IN</h1>
            <form>
                <div class="form-group">
                    <input v-model="form.username" class="form-control" type="text" name="username" placeholder="username" required>
                </div>
                <div class="form-group">
                    <input v-model="form.password" class="form-control" type="password" name="password" placeholder="password" required>
                </div>
                <button @click.prevent="logIn" class="btn btn-lg btn-default btn-block">Login</button>
            </form>
        </div>
    </div>
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
            this.$http.get('/api/test').then(res => console.log(res));
        }
    }
}
</script>
