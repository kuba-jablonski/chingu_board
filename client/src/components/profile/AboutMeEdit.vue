<template>
    <div class="box">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">About me</p>
                </div>
            </div>
            <div class="level-right">
                <a @click="stopEdit" class="delete is-medium"></a>
            </div>
        </div>
        <br>
        <div class="columns">
            <div class="field column">
                <label class="label">First Name</label>
                <div class="control">
                    <input v-model="aboutMe.firstName" class="input" type="text" placeholder="Text input">
                </div>
            </div>
            <div class="field column">
                <label class="label">Last Name</label>
                <div class="control">
                    <input v-model="aboutMe.lastName" class="input" type="text" placeholder="Text input">
                </div>
            </div>
        </div>
        <div class="field">
            <label class="label">Living in</label>
            <div class="control">
                <input v-model="aboutMe.livingIn" class="input" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Introduction</label>
            <div class="control">
                <textarea v-model="aboutMe.introduction" class="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button @click="save" class="button is-primary">Save</button>
            </div>
            <div class="control">
                <button @click="stopEdit" class="button is-link">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aboutMe: null
        }
    },
    methods: {
        save() {
            
            this.$store.commit('ABOUT_ME_EDIT', this.aboutMe);
            this.stopEdit();
        },
        stopEdit() {
            this.$store.commit('TOGGLE_EDIT', {component: 'aboutMe', active: false});
        }
    },
    created() {
        this.aboutMe = JSON.parse(JSON.stringify(this.$store.state.profile.user.aboutMe));
    }
}
</script>


<style lang="scss" scoped>
.columns {
    margin-bottom: 0;
}
</style>
