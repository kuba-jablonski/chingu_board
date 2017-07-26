<template>
    <section class="section container">
        <div class="tile is-ancestor">
            <router-link :to="`/project/${project.id}`" v-for="project in projects" :key="project.id" class="tile is-parent is-6">
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
export default {
    computed: {
        projects() {
            return this.$store.state.projects.projects;
        }
    }
}
</script>
