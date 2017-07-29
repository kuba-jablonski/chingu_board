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
                <span class="tag is-primary">
                    {{ value }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            skillLevel: ''
        }
    },
    computed: {
        skills() {
            return this.$store.state.profile.user.skills;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/settings.scss';
    
.skill-item {
    margin: 0 10px 10px 0;
    padding: 5px;    
    color: white;
    background: $night-blue;
    border-radius: 5px;
}
.tag {
    border-radius: 3px;
    background: $primary;
}
#skills {
    flex-wrap: wrap; 
}
</style>