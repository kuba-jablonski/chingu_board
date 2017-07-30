<template>
    <div class="box">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">Skills</p>
                </div>
            </div>
            <div class="level-right">
                <a @click="stopEdit" class="delete is-medium"></a>
            </div>
        </div>
        <br>
        <label class="label">Add a new skill</label>
        <div class="field has-addons">
            <p class="control">
                <span class="select">
                    <select v-model="addSkill.level">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </span>
            </p>
            <p class="control is-expanded">
                <input v-model="addSkill.name" class="input" type="text">
            </p>
            <p class="control">
                <a @click="addNewSkill" class="button is-primary">
                    Add
                </a>
            </p>
        </div>
        <div v-for="(value, key) in skills" :key="key" class="level">
            <div class="level-left">
                <div class="level-item">{{ key }}</div>
                <a class="level-item tag" @click="changeValue({key: key, value: 'Beginner'})" :class="{'is-black': value === 'Beginner'}">Beginner</a>
                <a class="level-item tag" @click="changeValue({key: key, value: 'Intermediate'})" :class="{'is-black': value === 'Intermediate'}">Intermediate</a>
                <a class="level-item tag" @click="changeValue({key: key, value: 'Advanced'})" :class="{'is-black': value === 'Advanced'}">Advanced</a>
            </div>
            <div class="level-right">
                <div @click="$delete(skills, key)" class="level-item delete"></div>
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
            skills: {},
            addSkill: {
                level: 'Intermediate',
                name: ''
            }
        }
    },
    methods: {
        stopEdit() {
            this.$store.commit('TOGGLE_EDIT', { component: 'skills', active: false });
        },
        changeValue(payload) {
            this.skills[payload.key] = payload.value;
        },
        save() {
            this.$firebase.database().ref(`users/${this.$store.state.uid}/skills`)
                .set(this.skills);
            this.stopEdit();
        },
        addNewSkill() {
            this.$set(this.skills, this.addSkill.name, this.addSkill.level);
            this.addSkill.name = '';
        }
    },
    created() {
        this.skills = JSON.parse(JSON.stringify(this.$store.state.profile.user.skills));
    }
}
</script>
