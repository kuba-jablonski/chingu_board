<template>
    <div class="tile is-ancestor">
        <router-link :to="`/project/${project.id}`" v-for="project in projects" :key="project.id" class="tile is-parent is-6">
            <article class="tile is-child box project-tile">
                <h3 class="title is-4 project-name">{{ project.details.name }}</h3>
                <p class="project-subtitle">Submitted by&nbsp;
                    <router-link v-if="project.creatorSlack !== 'Anonymous'" :to="`/user/${project.details.creator}`">{{ project.creatorSlack }}</router-link>
                    <span v-if="project.creatorSlack === 'Anonymous'">an anonymous user</span>
                </p>
                <br>
                <p class="line-break">{{ project.details.description | snippet }}</p>
            </article>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['projects'],
    filters: {
        snippet(value) {
            return value.length <= 100 ? value : value.slice(0, 400) + '...';
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/details-box.scss';

.line-break {
    white-space: pre;
    white-space: pre-line;
}

.is-child:hover .title,
.is-child:hover p {
    color: white;
}

.is-child:hover a {
    color: $color1;
}

.is-child:hover {
    background: $color3;
    box-shadow: 10px 10px 10px $color1;
}

.project-name {
    margin-bottom: 0;
}

.project-subtitle {
    font-style: italic;
}

.project-tile {
    max-height: 300px;
    min-height: 200px;
    overflow: hidden;
}
</style>
