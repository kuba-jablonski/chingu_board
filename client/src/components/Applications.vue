<template>
    <section class="container">
        <h1 class="header title is-2 has-text-centered">Applications </h1>
        <div class="columns">
            <div class="column">
                <h2 class="subtitle is-4 has-text-centered">Incoming Applications
                            <span class="icon">
                                <i class="fa fa-long-arrow-down"></i>
                            </span>
                </h2>
                <ul>
                    <li v-for="(app, appKey) in myIncomingApplications" :key="appKey" class="media">
                        <div v-if="app.status === 'Accepted'" class="media-left"><a class="button is-static accepted">Accepted</a></div>
                        <div v-if="app.status === 'Declined'" class="media-left"><a class="button is-static declined">Declined</a></div>
                        <div class="media-content">
                        User <router-link :to="`/user/${app.user}`"><span class="names">{{ app.userSlack }}</span></router-link> offered to help you with <router-link :to="`/project/${app.project}`"><span class="names">{{ app.projectName }}</span></router-link>.
                        
                            <div class="field is-grouped" v-if="app.status === 'Pending'">
                              <p class="control">
                                <a @click="acceptApplication({app, appKey})" class="button is-success">
                                    <span>Accept</span>
                                    <span class="icon is-small">
                                        <i class="fa fa-check"></i>
                                    </span>
                                </a>
                              </p>
                              <p class="control">
                                <a @click="declineApplication({app, appKey})" class="button is-danger">
                                    <span>Decline</span>
                                    <span class="icon is-small">
                                        <i class="fa fa-times"></i>
                                    </span>
                                  
                                </a>
                              </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <p v-if="!myIncomingApplications" class="has-text-centered">You don't have any incoming application to your project.<br>
                    <router-link to="/projects" class="button is-primary not-yet">Create a project now!</router-link>
                </p>
            </div>
            
            <div class="column">
                <h2 class="subtitle is-4 has-text-centered">
                    Outgoing Applications
                    <span class="icon">
                        <i class="fa fa-long-arrow-up"></i>
                    </span>
                </h2>
                <ul>
                    <li v-for="app in myOutgoingApplications" :key="app.id" class="media">
                        <div v-if="app.status === 'Pending'" class="media-left"><a class="button is-static">Pending</a></div>
                        <div v-if="app.status === 'Accepted'" class="media-left"><a class="button is-static">Accepted</a></div>
                        <div v-if="app.status === 'Declined'" class="media-left"><a class="button is-static">Declined</a></div>
                        <div class="media-content">
                            You offered to help <router-link :to="`/user/${app.creator}`"><span class="names">{{ app.creatorSlack }}</span></router-link> with <router-link :to="`/project/${app.project}`"><span class="names">{{ app.projectName }}</span></router-link>.
                        </div>
                    </li>            
                </ul>
                <p v-if="!myOutgoingApplications" class="has-text-centered">You didn't apply to any project yet.<br>
                    <router-link to="/projects" class="button is-primary not-yet">Join a project now!</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { botServer } from '../http/axios';

export default {
    computed: {
        ...mapGetters([
            'myOutgoingApplications',
            'myIncomingApplications'
        ]),
    },
    methods: {
        acceptApplication(appInfo){
            Promise.all([
                this.$firebase.database().ref(`users/${appInfo.app.creator}/incomingApplications/${appInfo.appKey}`).child('status').set('Accepted'),
                this.$firebase.database().ref(`users/${appInfo.app.user}/outgoingApplications/${appInfo.appKey}`).child('status').set('Accepted'),
                this.$firebase.database().ref(`applications/${appInfo.appKey}`).child('status').set('Accepted')
            ])
            .then(() => botServer.post('app/accept', appInfo.app).then(res => console.log(res)));
        },
        declineApplication(appInfo){
            this.$firebase.database().ref(`users/${appInfo.app.creator}/incomingApplications/${appInfo.appKey}`).child('status').set('Declined');
            this.$firebase.database().ref(`users/${appInfo.app.user}/outgoingApplications/${appInfo.appKey}`).child('status').set('Declined');
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/settings.scss';
.header {
    margin-bottom: 50px;
}
.names {
    font-style: italic;
    font-size: 1.1em;
}
.not-yet{
    margin-top: 20px;
}
.app-status{
    margin-top: auto;
}
    .accepted{
        color: green;
        border-color: green;
        background: rgba(0, 255, 0, 0.1)
    }
    .declined{
        color: red;
        border-color: red;
        background: rgba(255, 0, 0, 0.1)
    }   

</style>
