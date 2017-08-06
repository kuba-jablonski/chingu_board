<template>
    <section v-if="project" class="container">
        <h2 class="details-box-heading title has-text-centered is-5">Project Details</h2>
        <div class="details-box box">
            <div class="columns">
                <div class="column">
                    <h2 class="title is-3 has-text-centered">{{ project.details.name }}</h2>
                    <p class="subtitle is-6 has-text-centered submitted">Submitted by&nbsp;
                        <router-link v-if="project.creatorSlack !== 'Anonymous'" :to="`/user/${project.details.creator}`">{{ project.creatorSlack }}</router-link>
                        <span v-if="project.creatorSlack === 'Anonymous'">an anonymous user</span>
                    </p>
                    <p class="has-text-centered">Team:
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
                    
                <button v-if="!(project.details.creator === $store.state.uid) && this.$store.state.authenticated" @click="apply" class="button is-primary">Apply for this project</button>
                    
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
                <router-link :to="`/project/edit/${project.id}`" v-if="project.details.creator === $store.state.uid" class="button">Edit project</router-link>

                </div>
                <div class="column divider">
                    <p class="title is-spaced is-3 has-text-centered">Candidate Profile</p>
                    <p class="subtitle is-4 has-text-centered">Looking for:</p>
                    <p class="line-break">{{ project.candidate.description }}</p>
                    <br>
                    <div class="has-text-centered">
                        <p class="subtitle is-spaced is-4">Skills
                            <span class="icon">
                                <i class="fa fa-superpowers"></i>
                            </span>
                        </p>
                        <div id="skills" class="is-flex field is-grouped is-grouped-centered">
                            <p v-for="skill in project.candidate.skills" :key="skill.name" class="button is-static skill-item">
                                {{ skill.name }}
                                <span class="tag" :class="skill.required">
                                    {{ skill.required }}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import toast from '../../mixins/toast';

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
    mixins: [toast],
    methods: {
        apply() {
            if (!this.$store.state.authenticated) {
                return this.sendNotification('Must be logged in!', 'danger');
            }   

            if (this.$store.getters.aboutMe.chingu === "") {
                return this.sendNotification('Slack username is required.', 'danger');
            }

            if (this.project.details.creator === this.$store.state.uid) {
                return this.sendNotification("Can't apply for own project.", 'danger');                
            }

            if (this.$store.getters.myOutgoingApplications) {
                for (let app in this.$store.getters.myOutgoingApplications) {
                    if (this.$store.getters.myOutgoingApplications[app].project === this.project.id) {
                        return this.sendNotification("Can't apply twice", 'danger'); 
                    }
                }
            }

            const application = {
                user: this.$store.state.uid,
                userSlack: this.$store.getters.aboutMe.chingu,
                project: this.project.id,
                projectName: this.project.details.name,
                creator: this.project.details.creator,
                creatorSlack: this.project.creatorSlack,
                status: 'Pending'
            };

            const newAppRef = this.$firebase.database().ref(`/applications`).push();
            const appKey = newAppRef.key;

            const saveToIncoming = new Promise((resolve, reject) => {
                this.$firebase.database()
                    .ref(`/users/${this.project.details.creator}/incomingApplications/${appKey}`)
                    .set(application)
                    .then(() => resolve())
                    .catch(e => reject(e));
            })

            const saveToOutgoing = new Promise((resolve, reject) => {
                this.$firebase.database()
                    .ref(`/users/${this.$store.state.uid}/outgoingApplications/${appKey}`)
                    .set(application)
                    .then(() => resolve())
                    .catch(e => reject(e));                    
            });

            const saveToApplications = new Promise((resolve, reject) => {
                newAppRef
                    .set(application)
                    .then(() => resolve())
                    .catch(e => reject(e));                    
            });

            Promise.all([saveToIncoming, saveToOutgoing, saveToApplications])
                .then(() => this.sendNotification('Application was sent!', 'success'))
                .catch(e => this.sendNotification(e.message, 'error'));
        },
        confirmDelete(){
            this.deleteConfirmed = true;
            this.$firebase.database().ref('projects').child(this.$route.params.id).set(null)
            .then(this.sendNotification('Project deleted!', 'success'))
            .then(this.$router.go(-1))
            //$router.push('/my-projects');
            .catch(function(err){
                console.log('err', err);
            });              
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
.submitted {
    font-weight: normal;
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
    margin: 3px;
    padding: 3px;
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