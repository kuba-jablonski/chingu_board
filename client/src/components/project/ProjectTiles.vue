<template>
    <div class="tile is-ancestor">
        
        <router-link :to="`/project/${project.id}`" v-for="project in projects" :key="project.id" class="tile is-parent is-4">
            <article class="tile is-child box">
                <h3 class="title is-3 project-name">{{ project.details.name }}</h3>
                <p>Submitted by&nbsp;
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
        snippet(value){
            return value.length <= 100 ? value : value.slice(0,100) + '...';
        },
        toUppercase(value){
            return value.toUpperCase();
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
.is-child:hover .title, .is-child:hover p{
    color: white;
}
.is-child:hover {
    background: $color2;
}
.project-name {
    text-transform: capitalize;
}
</style>
