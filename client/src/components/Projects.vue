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
        
        <div class="tile is-ancestor">
            <router-link :to="`/project/${project.id}`" v-for="project in filteredProjects" :key="project.id" class="tile is-parent is-4">
                <article class="tile is-child box">
                    <div class="level">
                        <div class="level-item">
                            <p class="title is-3">{{ project.details.name }}</p>
                        </div>
                    </div>
                    <div class="level">
                        <div class="level-left">
                            <div class="level-item">
                                Submitted by {{ project.creatorSlack }}
                            </div>
                        </div>
                    </div>
                    <br>
                    <p class="line-break">{{ project.details.description | snippet}}</p>
                </article>
            </router-link>
        </div>
        
    </section>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    computed: {
        filteredProjects() {
            return this.$store.getters.filteredProjects(this.search);
        }
    },
    filters: {
        snippet(value){
            return value.length <= 100 ? value : value.slice(0,100) + '...';
        }
    }
}

    
                                                                           
</script>

<style lang="scss" scoped>
@import '../assets/styles/settings.scss';
.is-ancestor, {
    flex-wrap: wrap;
}
.header {
    margin-bottom: 50px;
}
.search{
    margin-top: 40px;
}
.line-break {
    white-space: pre;
    white-space: pre-line;
}
</style>
