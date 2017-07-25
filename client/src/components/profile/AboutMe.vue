<template>
    <div class="box">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">About me</p>
                </div>
            </div>
            <div class="level-right">
                <a @click="$store.state.profile.edit.aboutMe = true">edit</a>
            </div>
        </div>
        <br>
        <p>Name</p>
        <p>{{ fullname }}</p>
        <br>
        <p>Living in</p>
        <p>{{ aboutMe.livingIn }}</p>
        <br>
        <p>Introduction</p>
        <p>{{ aboutMe.introduction }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        aboutMe() {
            return this.$store.state.profile.user.aboutMe;
        },
        fullname() {
            return this.aboutMe.firstName + ' ' + this.aboutMe.lastName;
        }
    }
}
</script>
