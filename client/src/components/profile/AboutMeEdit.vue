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
                    <input v-model="aboutMe.firstName" class="input" type="text" placeholder="First name">
                </div>
            </div>
            <div class="field column">
                <label class="label">Last Name</label>
                <div class="control">
                    <input v-model="aboutMe.lastName" class="input" type="text" placeholder="Last name">
                </div>
            </div>
            <div class="field column">
                <label class="label">Chingu Username</label>
                <div class="control">
                    <input v-model="aboutMe.chingu" class="input" type="text" placeholder="username on Chingu Central">
                </div>
            </div>
        </div>
        
        <div class="field">
            <label class="label">Living in</label>
            <div class="control">
                <input v-model="aboutMe.livingIn" class="input" type="text" placeholder="Where are you?">
            </div>
        </div>
        <div class="field">
            <label class="label">Introduction</label>
            <div class="control">
                <textarea v-model="aboutMe.introduction" class="textarea" placeholder="Tell us about you"></textarea>
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
import toast from '../../mixins/toast';

export default {
    data() {
        return {
            aboutMe: null
        }
    },
    mixins: [toast],
    methods: {
        save() {
            if (!this.aboutMe.firstName || 
                !this.aboutMe.lastName || 
                !this.aboutMe.chingu || 
                !this.aboutMe.livingIn ||
                !this.aboutMe.introduction) {
                return this.sendNotification('All fields are required!', 'danger');
            }
            this.$firebase.database().ref(`users/${this.$store.state.uid}/aboutMe`)
                .set(this.aboutMe);
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
@import '../../assets/styles/settings.scss';
.columns {
    margin-bottom: 0;
}
</style>
