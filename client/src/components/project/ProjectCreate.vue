<template>
    <section class="container" id="top">
        <h2 class="details-box-heading title has-text-centered is-5">Create a New Project</h2>
        <div class="details-box box">
            <div class="columns">
            <div class="column is-5">
                <h3 class="subtitle is-3 has-text-centered">About the project</h3>
                <div class="field">
                    <label class="label is-large">Project Name</label>
                    <div class="control">
                        <input v-model="project.details.name" class="input" type="text" placeholder="Enter your project name">
                    </div>
                </div>
                <div class="is-flex">
                    <div class="field select-item">
                        <label class="label is-medium">Team Size</label>
                        <div class="control">
                            <div class="select">
                                <select v-model="project.details.team">
                                    <option v-for="n in 9" :key="n">{{ n + 1 }} people</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="field select-item">
                        <label class="label is-medium">Commitment</label>
                        <div class="control">
                            <div class="select">
                                <select v-model="project.details.commitment">
                                    <option v-for="n in 8" :key="n">{{ n }} h / day</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label is-large">Project Description</label>
                    <div class="control">
                        <textarea v-model="project.details.description" class="textarea" placeholder="What's your project about?"></textarea>
                    </div>
                </div>
            </div>
            <div class="column is-5 is-offset-1">
                <h3 class="subtitle is-3 has-text-centered">About the candidate</h3>
                <div class="field">
                    <label class="label is-large">Description</label>
                    <div class="control">
                        <textarea v-model="project.candidate.description" class="textarea" placeholder="Who should apply?"></textarea>
                    </div>
                </div>
                <br>
                <p class="subtitle is-4">Desired Skills</p>
                <label class="label is-medium">Add a new skill</label>
                <div class="field has-addons">
                    <p class="control">
                        <span class="select">
                            <select v-model="addSkill.required">
                                <option>Required</option>
                                <option>Optional</option>
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
                <div v-for="(skill, index) in project.candidate.skills" :key="skill.name" class="level">
                    <div class="level-left">
                        <div class="level-item skill-name">{{ skill.name }}</div>
                        <a class="level-item tag" @click="skill.required = 'Required'" :class="{'Required': skill.required === 'Required'}">Required</a>
                        <a class="level-item tag" @click="skill.required = 'Optional'" :class="{'Optional': skill.required === 'Optional'}">Optional</a>
                    </div>
                    <div class="level-right">
                        <div @click="project.candidate.skills.splice(index, 1)" class="level-item delete"></div>
                    </div>
                </div>
            </div>
        </div>
            <div class="field is-grouped">
                <div class="control">
                    <button @click="save" class="button is-primary">Save</button>
                </div>
                <div class="control">
                    <button class="button is-link">Cancel</button>
                </div>
            </div>
        </div>
        <!-- <div v-if="saved">
            <h3>Your project was saved!</h3>
            <hr>
            <h2 class="title is-5">{{ project.details.name }}</h2>
            <p>For a team of : {{ project.details.team }}, {{ project.details.commitment }}</p>
            <p class="subtitle is-5">Project description:</p>
            <p>{{ project.details.description }}</p>
            <hr>
            <p class="subtitle is-5">About the candidate</p>
            <p>{{ project.candidate.description }}</p>
            <br>
            <p class="subtitle is-5">Skills</p>
            <ul>
                <li v-for="(key, value) in project.candidate.skills" :key="key"><strong>{{value}}</strong> - ({{key}})</li>
            </ul>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary">Edit Project</button>
                </div>
                <div class="control">
                    <button class="button is-primary is-outlined" @click="newProject">Add another project</button>
                </div>
            </div> 
        </div> -->
    </section>
</template>

<script>
export default {
    data() {
        return {
            project: {
                details: {
                    name: '',
                    team: '2 people',
                    commitment: '1 h / day',
                    description: '',
                    creator: this.$store.state.uid
                },
                candidate: {
                    description: '',
                    skills: []
                }
            },
            addSkill: {
                required: 'Required',
                name: ''
            },
            // saved: false,
        }
    },
    methods: {
        addNewSkill() {
            const newSkill = {
                name: this.addSkill.name,
                required: this.addSkill.required
            }
            this.project.candidate.skills.push(newSkill);
            this.addSkill.name = '';
        },
        changeValue(payload) {
            this.project.candidate.skills[payload.key] = payload.value;
        },
        save(){
            const newProjectRef = this.$firebase.database().ref('projects').push();
            const projectId = newProjectRef.key;
            this.project.id = projectId;
            newProjectRef.set(this.project);
            // this.saved = true;
        },
        // newProject(){
        //     this.saved = !this.saved;
        //     this.project = this.$store.state.empty.project;
        //     location.href = '#top';
        // }
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/styles/details-box.scss';

.line-break {
    white-space: pre;
    white-space: pre-line;
}
    
.select-item {
    margin-right: 20px;
}
.skill-name {
    font-weight: bold;
}
.Required {
    color: white;
    background: $color4;
}

.Optional {
    color: white;
    background: $color3;
}
</style>
