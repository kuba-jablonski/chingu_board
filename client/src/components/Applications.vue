<template>
    <section class="container">
        <h1>Incoming applications:</h1>
        <ul>
            <li v-for="app in myIncomingApplications" :key="app.id">
                User <router-link :to="`/user/${app.user}`">{{ app.userSlack }}</router-link> offered to help you with <router-link :to="`/project/${app.project}`">{{ app.projectName }}</router-link>. 
            </li>
        </ul>
        <h1>Outgoing applications:</h1>
        <ul>
            <li v-for="app in myIncomingApplications" :key="app.id">
                You offered to help <router-link :to="`/user/${app.creator}`">{{ app.creatorSlack }}</router-link> with <router-link :to="`/project/${app.project}`">{{ app.projectName }}</router-link>. 
            </li>            
        </ul>
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
