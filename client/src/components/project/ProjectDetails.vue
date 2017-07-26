<template>
    <section class="section container">
        <div class="box">
            <div class="box">
                <p>{{ project.details.name }}</p>
                <span class="tag">
                    {{ project.details.team }}
                </span>
                <span class="tag">
                    {{ project.details.commitment }}
                </span>
                <br>
                <br>
                <p>{{ project.details.description }}</p>
            </div>
            <div class="box">
                <p>Looking for:</p>
                <br>
                <p>{{ project.candidate.description }}</p>
                <br>
                <p>Skills:</p>
                <div id="skills" class="is-flex">
                    <div v-for="(value, key) in project.candidate.skills" :key="key" class="skill-item">
                        {{ key }}
                        <span class="tag">
                            {{ value }}
                        </span>
                    </div>
                </div>
                <br>
                <button class="button is-primary">Apply for this project</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        project() {
            return this.$store.state.projects.projects
                .find(project => project.id == this.$route.params.id);
        }
    }
}
</script>

<style lang="scss" scoped>
.skill-item {
    margin: 0 10px 10px 0;
}
#skills {
    flex-wrap: wrap;
}
</style>
