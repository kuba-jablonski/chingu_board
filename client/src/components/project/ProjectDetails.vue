<template>
    <section class="container">
        <h2 class="details-box-heading title has-text-centered is-5">Project Details</h2>
        <div class="details-box box">
            <div class="box">
                <h2 class="title is-3">{{ project.details.name }}</h2>
                <p>Team:
                    <span class="tag">
                        {{ project.details.team }}
                    </span> to commit: 
                    <span class="tag">
                        {{ project.details.commitment }}
                    </span>
                </p>
                <br>
                <p class="line-break">{{ project.details.description }}</p>
            </div>
            <div class="box">
                <p class="subtitle is-4">Looking for:</p>
                <p class="line-break">{{ project.candidate.description }}</p>
                <br>
                <p class="subtitle is-spaced is-4">Skills:</p>
                <div id="skills" class="is-flex">
                    <div v-for="skill in project.candidate.skills" :key="skill.name" class="skill-item">
                        {{ skill.name }}
                        <span class="tag" :class="skill.required">
                            {{ skill.required }}
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
                .find(project => project.id === this.$route.params.id);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/details-box.scss';

.skill-item {
    margin: 0 10px 10px 0;
    padding: 5px;
    color: $color4;
    background: $color1;
    border-radius: 5px;
    font-weight: bold;
}

.tag {
    border-radius: 3px;
    background: $color2;
    color: white;
    font-weight: normal;
}
    
.Required {
    background: $color4;
}

.Optional {
    background: $color3;
}
    
#skills {
    flex-wrap: wrap;
}
.line-break {
    white-space: pre;
    white-space: pre-line;
}
</style>