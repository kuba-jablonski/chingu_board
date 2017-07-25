<template>
    <div class="section">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">Skills</p>
                </div>
            </div>
            <div class="level-right">
                <a @click="$store.commit('TOGGLE_EDIT', {component: 'skills', active: true})">edit</a>
            </div>
        </div>
        <div id="skills" class="is-flex">
            <div v-for="(value, key) in skills" :key="key" class="skill-item">
                {{ key }}
                <span class="tag">
                    {{ value }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        skills() {
            return this.$store.state.profile.user.skills;
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
