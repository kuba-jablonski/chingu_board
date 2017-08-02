<template>
    <div class="tile is-ancestor">
        <router-link :to="`/project/${project.id}`" v-for="project in projects" :key="project.id" class="tile is-parent is-4">
            <article class="tile is-child box">
                <div class="level">
                    <div class="level-item">
                        <p class="title is-3">{{ project.details.name }}</p>
                    </div>
                </div>
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            Submitted by &nbsp
                            <router-link v-if="project.creatorSlack !== 'Anonymous'" :to="`/user/${project.details.creator}`">{{ project.creatorSlack }}</router-link>
                            <span v-if="project.creatorSlack === 'Anonymous'">an anonymous user</span>
                        </div>
                    </div>
                </div>
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
        snippet(value){
            return value.length <= 100 ? value : value.slice(0,100) + '...';
        }
    }
}
</script>

<style lang="scss" scoped>
.line-break {
    white-space: pre;
    white-space: pre-line;
}
</style>
