<template>
    
    <section class="section container">
        <!-- Explore Projects/ Search -->
        <div class="columns header">
            <div class="column is-half is-offset-one-quarter">
                <h1 class="title is-2 has-text-centered"><strong>Explore projects</strong></h1>
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
                                Submitted by {{ project.creator }}
                            </div>
                        </div>
                    </div>
                    <br>
                    <p>{{ project.details.description }}</p>
                </article>
            </router-link>
        </div>
        
    </section>
</template>

<script>
import axios from 'axios';
import search from '../mixins/search';
    
export default {
    data() {
        return {
            projects: [],
            search: ''
        }
    },
    /*computed: {
        projects() {
            return this.$store.state.projects.projects;
        }
    },
    computed: {
        filteredProjects: function(){
            return this.projects.filter((project) => {
                return project.details.description.match(this.search);
            })
        }
    },*/
    created(){
        axios.get('https://boardtest-58415.firebaseio.com/projects.json')
        .then(function(data){
            var rawProjects = [];
            for (let key in data.data) {
                data.data[key].id = key
                rawProjects.push(data.data[key]);
            }
            //this.projects = rawProjects;
            return rawProjects;
        })
           .then(result => this.projects = result);
    },
    mixins: [search]
}

    
                                                                           
</script>

<style lang="scss" scoped>

.is-ancestor {
    flex-wrap: wrap;
}
.header {
    margin-bottom: 50px;
}
    .search{
        margin-top: 40px;
    }
</style>
