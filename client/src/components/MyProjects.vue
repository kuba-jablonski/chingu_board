<template>
    <section class="container">
        <h1 class=" header title is-2 has-text-centered">My projects</h1>
        <p v-if="myProjects.length === 0">Nothing here yet. <router-link to="/project/create" tag="a">Create a new project.</router-link></p>
        <app-project-tiles v-if="myProjects.length > 0" :projects="myProjects"></app-project-tiles>
    </section>
</template>

<script>
import ProjectTiles from './project/ProjectTiles.vue';

export default {
    components: {
        appProjectTiles: ProjectTiles
    },
    computed: {
        myProjects() {
            return this.$store.getters.myProjects;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/settings.scss';

section {
    padding: 2rem;
} 

.is-ancestor, {
    flex-wrap: wrap;
}
.header {
    margin-bottom: 50px;
}
</style>
