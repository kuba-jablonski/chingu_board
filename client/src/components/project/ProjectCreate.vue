<template>
    <section class="section container">
        <div class="box">
            <h2 class="title is-3">Create a New Project</h2>
            <div class="box">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <p class="subtitle is-5">About the project</p>
                        </div>
                    </div>
                </div>
                <br>
                <div class="field">
                    <label class="label">Project Name</label>
                    <div class="control">
                        <input v-model="project.details.name" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="is-flex">
                    <div class="field select-item">
                        <label class="label">Team Size</label>
                        <div class="control">
                            <div class="select">
                                <select v-model="project.details.team">
                                    <option v-for="n in 9" :key="n">{{ n + 1 }} people</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="field select-item">
                        <label class="label">Commitment</label>
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
                    <label class="label">Project Description</label>
                    <div class="control">
                        <textarea v-model="project.details.description" class="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <p class="subtitle is-5">About the candidate</p>
                        </div>
                    </div>
                </div>
                <br>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea v-model="project.candidate.description" class="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>
                <br>
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <p class="subtitle is-5">Desired Skills</p>
                        </div>
                    </div>
                </div>
                <label class="label">Add a new skill</label>
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
                <div v-for="(value, key) in project.candidate.skills" :key="key" class="level">
                    <div class="level-left">
                        <div class="level-item">{{ key }}</div>
                        <a class="level-item tag" @click="changeValue({key: key, value: 'Required'})" :class="{'is-black': value === 'Required'}">Required</a>
                        <a class="level-item tag" @click="changeValue({key: key, value: 'Optional'})" :class="{'is-black': value === 'Optional'}">Optional</a>
                    </div>
                    <div class="level-right">
                        <div @click="$delete(project.candidate.skills, key)" class="level-item delete"></div>
                    </div>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary">Save</button>
                </div>
                <div class="control">
                    <button class="button is-link">Cancel</button>
                </div>
            </div>
        </div>
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
                    description: ''
                },
                candidate: {
                    description: '',
                    skills: {}
                }
            },
            addSkill: {
                required: 'Required',
                name: ''
            }
        }
    },
    methods: {
        addNewSkill() {
            this.$set(this.project.candidate.skills, this.addSkill.name, this.addSkill.required);
            this.addSkill.name = '';
        },
        changeValue(payload) {
            this.project.candidate.skills[payload.key] = payload.value;
        }
    }
}
</script>


<style lang="scss" scoped>
.select-item {
    margin-right: 20px;
}
</style>