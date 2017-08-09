<template>
    
    <section class="container">
        <!-- Explore Projects/ Search -->
         <div class="columns header">
            <div class="column is-half is-offset-one-quarter">
                <h1 class="title is-2 has-text-centered">Explore projects</h1>
                <div class="field search">
                    <div class="control has-icons-right">
                        <input v-model="search" class="input is-large" type="text" placeholder="search projects">
                        <span class="icon is-medium is-right">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div> 
        
        <app-project-tiles :projects="filteredProjects"></app-project-tiles>
        
    </section>
</template>

<script>
import ProjectTiles from './project/ProjectTiles.vue';

export default {
    data() {
        return {
            search: ''
        }
    },
    computed: {
        filteredProjects() {
            return this.$store.getters.filterProjectsByTitle(this.search);
        }
    },
    components: {
        appProjectTiles: ProjectTiles
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
.search{
    margin-top: 40px;
}
</style>
