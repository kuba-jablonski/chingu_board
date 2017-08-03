<template>
    <div class="column divider">
        <p class="subtitle is-4 has-text-centered">Links
            <span class="icon">
                <i class="fa fa-link"></i>
            </span>
        </p>
        <div class="field is-grouped is-grouped-centered">
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
        <div>
            <div class="has-text-right">
                <a v-if="personalProfile" @click="$store.commit('TOGGLE_EDIT', {component: 'links', active: true})">
                    edit
                    <span class="icon is-small">
                        <i class="fa fa-pencil"></i>
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['personalProfile'],
    computed: {
        links() {
            return this.$store.getters.links;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/settings.scss';
@import '~bulma/sass/utilities/mixins';
    
.portfolio{
    color: white;
    background: $color3;
}
.portfolio:hover{
    color: white;
    background: $primary;
}

.divider{
    /*@include tablet {
        border-left: 1px solid $color1;
    }*/
    @include mobile {
        border-top: 1px solid $color1;
    }
    
}
</style>
