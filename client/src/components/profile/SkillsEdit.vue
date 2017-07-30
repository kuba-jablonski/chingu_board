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
        <div v-for="(skill, index) in skills" :key="skill.name" class="level">
            <div class="level-left">
                <div class="level-item">{{ skill.name }}</div>
                <a class="level-item tag" @click="skill.level = 'Beginner'" :class="{'is-black': skill.level === 'Beginner'}">Beginner</a>
                <a class="level-item tag" @click="skill.level = 'Intermediate'" :class="{'is-black': skill.level === 'Intermediate'}">Intermediate</a>
                <a class="level-item tag" @click="skill.level = 'Advanced'" :class="{'is-black': skill.level === 'Advanced'}">Advanced</a>
            </div>
            <div class="level-right">
                <div @click="skills.splice(index, 1)" class="level-item delete"></div>
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
            skills: [],
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
            const newSkill = {
                name: this.addSkill.name,
                level: this.addSkill.level
            }
            this.skills.push(newSkill);
            this.addSkill.name = '';
        }
    },
    created() {
        if (this.$store.state.profile.user.skills) {
            this.skills = this.$store.state.profile.user.skills.slice();
        } else {
            this.skills = [];
        }
    }
}
</script>
