<template>
    <div class="box">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">Links</p>
                </div>
            </div>
            <div class="level-right">
                <a @click="stopEdit" class="delete is-medium"></a>
            </div>
        </div>
        <br>
        <div class="columns">
            <div class="field column">
                <label class="label">Portfolio</label>
                <div class="control">
                    <input v-model="links.portfolio" class="input" type="text" placeholder="Text input">
                </div>
            </div>
            <div class="field column">
                <label class="label">Github</label>
                <div class="control">
                    <input v-model="links.github" class="input" type="text" placeholder="Text input">
                </div>
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
            links: null
        }
    },
    methods: {
        stopEdit() {
            this.$store.commit('TOGGLE_EDIT', { component: 'links', active: false });
        },
        save() {
            this.$firebase.database().ref(`users/${this.$store.state.uid}/links`)
                .set(this.links);
            this.stopEdit();
        }
    },
    created() {
        this.links = JSON.parse(JSON.stringify(this.$store.state.profile.user.links));
    }
}
</script>
