<template>
    <section class="container">
        <h2 class="details-box-heading title has-text-centered is-5">Project Details</h2>
        <div class="details-box box">
            <div class="columns">
                <div class="column">
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
                    <p class="line-break">{{ project.details.description }}</p>
                    <br>
                    
                <button v-if="!project.details.creator === $store.state.uid" class="button is-primary">Apply for this project</button>
                    
                    <!-- modal for project deletion -->
                    
                <div class="modal" :class="{ 'is-active' : askDelete }">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Delete a project</p>
                        </header>
                        <section class="modal-card-body">
                            <p>You hit that red button...</p>
                            <p>Are you sure you want to delete this project?</p>
                        </section>
                        <footer class="modal-card-foot">
                            <a class="button is-danger" @click="confirmDelete">Confirm</a>
                            <a class="button" @click="askDelete = !askDelete">Cancel</a>
                            <br>
                            <p v-if="deleteConfirmed" :class="{ 'delete-confirmed' : deleteConfirmed }">deleting project...</p>
                        </footer>
                    </div>
                </div>
                <button v-if="project.details.creator === $store.state.uid" @click="askDelete = !askDelete" class="button is-danger">Delete project</button>  
                    
                </div>
                <div class="column divider">
                    <p class="title is-spaced is-3">Candidate Profile</p>
                    <p class="subtitle is-5">Looking for:</p>
                    <p class="line-break">{{ project.candidate.description }}</p>
                    <br>
                    <p class="subtitle is-spaced is-5">Skills:</p>
                    <div id="skills" class="is-flex">
                        <div v-for="skill in project.candidate.skills" :key="skill.name" class="skill-item">
                            {{ skill.name }}
                            <span class="tag" :class="skill.required">
                                {{ skill.required }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            askDelete: false,
            deleteConfirmed: false
        }
    },
    computed: {
        project() {
            return this.$store.state.projects.projects
                .find(project => project.id === this.$route.params.id);
        }
    },
    methods: {
        confirmDelete(){
            this.deleteConfirmed = true;
            // set or update can return a promise to know when the update has been done
            this.$firebase.database().ref('projects').child(this.$route.params.id).set(null);
            // or remove
            //this.$firebase.database().ref('projects').child(this.$route.params.id).remove();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/details-box.scss';
@import '~bulma/sass/utilities/mixins';

.divider{
    /*@include tablet {
        border-left: 1px solid $color1;
    }*/
    @include mobile {
        border-top: 1px solid $color1;
    }
    
}
    
.skill-item {
    margin: 0 10px 10px 0;
    padding: 5px;
    color: $color4;
    background: $color1;
    border-radius: 5px;
    font-weight: bold;
}

.tag {
    border-radius: 3px;
    background: $color2;
    color: white;
    font-weight: normal;
}
    
.Required {
    background: $color4;
}

.Optional {
    background: $color3;
}
    
#skills {
    flex-wrap: wrap;
}
.line-break {
    white-space: pre;
    white-space: pre-line;
}

</style>