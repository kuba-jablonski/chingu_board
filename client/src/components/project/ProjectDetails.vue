<template>
    <section class="container">
        <h2 class="details-box-heading title has-text-centered is-5">Project Details</h2>
        <div class="details-box box">
            <div class="box">
                <h2 class="title is-3">{{ project.details.name }}</h2>
                <p>Team:
                    <span class="tag">
                        {{ project.details.team }}
                    </span> to commit: 
                    <span class="tag">
                        {{ project.details.commitment }}
                    </span>
                </p>
                <br>
                <p>{{ project.details.description }}</p>
            </div>
            <div class="box">
                <p>Looking for:</p>
                <br>
                <p>{{ project.candidate.description }}</p>
                <br>
                <p>Skills:</p>
                <div id="skills" class="is-flex">
                    <div v-for="(value, key) in project.candidate.skills" :key="key" class="skill-item">
                        {{ key }}
                        <span class="tag">
                            {{ value }}
                        </span>
                    </div>
                </div>
                <br>
                <button class="button is-primary">Apply for this project</button>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
    
export default {
    data(){
        return {
            id: this.$route.params.id,
            project: {
                details: {
                    name: '',
                    team: '',
                    commitment: '',
                    description: ''
                    //creator: need the authenticated user username or fullname
                },
                candidate: {
                    description: '',
                    skills: {}
                }
            }
        }
    },
    /*
    computed: {
        project() {
            return this.$store.state.projects.projects
                .find(project => project.id == this.$route.params.id);
        }
    },*/
    created(){
        axios.get('https://boardtest-58415.firebaseio.com/projects/' + this.id +'.json')
            .then(response => this.project = response.data);
        }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/details-box.scss';

.skill-item {
    margin: 0 10px 10px 0;
    padding: 5px;    
    color: white;
    background: #485563;
    border-radius: 5px;
}
.tag {
    border-radius: 3px;
}
#skills {
    flex-wrap: wrap;
}
</style>