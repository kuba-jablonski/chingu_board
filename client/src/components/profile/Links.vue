<template>
    <div class="section">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">Links</p>
                </div>
            </div>
            <div class="level-right">
                <a @click="$store.commit('TOGGLE_EDIT', {component: 'links', active: true})">
                    edit
                    <span class="icon is-small">
                        <i class="fa fa-pencil"></i>
                    </span>
                </a>
            </div>
        </div>
        
        <div class="field is-grouped">
            <p class="control has-icon-left">
                <a :href="links.portfolio" target="_blank" class="button portfolio">
                    <span class="icon">
                    <i class="fa fa-home"></i>
                    </span>
                    <span>Portfolio</span>
                </a>
            </p>
            <p class="control has-icon-left">
                <a :href="links.github" target="_blank" class="button github">
                    <span class="icon">
                        <i class="fa fa-github"></i>
                    </span>
                    <span>Github</span>
                </a>
            </p>
          
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        links() {
            return this.$store.getters.links;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/settings.scss';

.portfolio{
    color: white;
    background: $color3;
}
.portfolio:hover{
    color: white;
    background: $primary;
}
</style>
