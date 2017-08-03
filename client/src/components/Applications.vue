<template>
    <section class="container">
        <h1 class="header title is-2 has-text-centered">Applications </h1>
        <div class="columns">
            <div class="column">
                <h2 class="subtitle is-4 has-text-centered">Incoming Applications
                            <span class="icon">
                                <i class="fa fa-long-arrow-left"></i>
                            </span>
                </h2>
                <ul>
                    <li v-for="app in myIncomingApplications" :key="app.id">
                        User <router-link :to="`/user/${app.user}`"><span class="names">{{ app.userSlack }}</span></router-link> offered to help you with <router-link :to="`/project/${app.project}`"><span class="names">{{ app.projectName }}</span></router-link>.
                    </li>
                </ul>
                <p v-if="!myIncomingApplications" class="has-text-centered">You don't have any incoming application to your project.<br>
                    <router-link to="/projects" class="button is-primary">Create a project now!</router-link>
                </p>
            </div>
            
            <div class="column">
                <h2 class="subtitle is-4 has-text-centered">
                    Outgoing Applications
                    <span class="icon">
                        <i class="fa fa-long-arrow-right"></i>
                    </span>
                </h2>
                <ul>
                    <li v-for="app in myOutgoingApplications" :key="app.id">
                        You offered to help <router-link :to="`/user/${app.creator}`"><span class="names">{{ app.creatorSlack }}</span></router-link> with <router-link :to="`/project/${app.project}`"><span class="names">{{ app.projectName }}</span></router-link>. 
                    </li>            
                </ul>
                <p v-if="!myOutgoingApplications" class="has-text-centered">You didn't apply to any project yet.<br>
                    <router-link to="/projects" class="button is-primary">Join a project now!</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'myOutgoingApplications',
            'myIncomingApplications'
        ]),
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
.button{
    margin-top: 20px;
}
</style>
