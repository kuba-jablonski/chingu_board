<template>
    <div class="section">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">Skills</p>
                </div>
            </div>
            <div class="level-right">
                <a @click="$store.commit('TOGGLE_EDIT', {component: 'skills', active: true})">
                    edit
                    <span class="icon is-small">
                        <i class="fa fa-pencil"></i>
                    </span>
                </a>
            </div>
        </div>
        <div id="skills" class="is-flex is-grouped is-grouped-centered">
            <div v-for="skill in skills" :key="skill.name" class="skill-item">
                {{ skill.name }}
                <span class="tag is-primary" :class="skill.level">
                    {{ skill.level }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
    background: $color1;
    border-radius: 5px;
    font-weight: bold;
}

.tag {
    border-radius: 3px;
    color: white;
    font-weight: normal;
}

#skills {
    flex-wrap: wrap;
}
    
.Beginner {
    background: $color3;
}

.Intermediate {
    background: $color2;
}

.Advanced {
    background: $primary;
}
    
    
</style>