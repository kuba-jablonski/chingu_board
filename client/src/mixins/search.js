export default {
    computed: {
        filteredProjects: function(){
            return this.projects.filter((project) => {
                return project.details.name.toLowerCase().match(this.search.toLowerCase());
            })
        }
    }
}