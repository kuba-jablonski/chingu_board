<template>
    <div class="column">
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
            <div class="level-left skill-item">
                <div class="level-item">{{ skill.name }}</div>
                <a class="level-item tag" @click="skill.level = 'Beginner'" :class="{'Beginner': skill.level === 'Beginner'}">Beginner</a>
                <a class="level-item tag" @click="skill.level = 'Intermediate'" :class="{'Intermediate': skill.level === 'Intermediate'}">Intermediate</a>
                <a class="level-item tag" @click="skill.level = 'Advanced'" :class="{'Advanced': skill.level === 'Advanced'}">Advanced</a>
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
import toast from '../../mixins/toast';

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
    mixins: [toast],
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
            if (!this.addSkill.name) {
                return this.sendNotification("Skill name is empty!", 'danger');
            }
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

<style lang="scss" scoped>
@import '../../assets/styles/settings.scss';
    
.skill-item {
    margin: 0 10px 10px 0;
    padding: 5px;    
    background: $color1;
    border-radius: 5px;
    font-weight: bold;
}

.tag {
    border-radius: 3px;
    /*color: white;*/
    font-weight: normal;
}
.tag:hover {
    color: $white;
    background: $color4;
}
.Beginner, .Intermediate, .Advanced {
    color: white;
}    
.Beginner {
    background: $color2;
}

.Intermediate {
    background: $color3;
}

.Advanced {
    background: $primary;
}
    
    
</style>
