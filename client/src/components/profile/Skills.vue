<template>
    <div class="column is-half">
        <div class="has-text-centered">
            <p class="subtitle is-4">Skills
                <span class="icon">
                    <i class="fa fa-superpowers"></i>
                </span>
            </p>            
            <div class="field is-grouped is-grouped-centered">
                <p v-for="skill in skills" :key="skill.name" class="control">
                    <a class="button is-static skill-item">
                    {{ skill.name }}
                        <span class="tag" :class="skill.level">
                            {{ skill.level }}
                        </span>
                    </a>
                </p>
            </div>   
        </div>
        
        <div class="is-pulled-right">
            <a v-if="personalProfile" @click="$store.commit('TOGGLE_EDIT', {component: 'skills', active: true})">
                edit
                <span class="icon is-small">
                    <i class="fa fa-pencil"></i>
                </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['personalProfile'],
    data() {
        return {
            skillLevel: ''
        }
    },
    computed: {
        skills() {
            return this.$store.getters.skills;
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
    color: $color4;
    border-radius: 5px;
    font-weight: bold;
}

.tag {
    border-radius: 3px;
    margin: 3px;
    padding: 3px;
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