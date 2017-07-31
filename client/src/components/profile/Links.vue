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
        <div class="is-flex">
            <a :href="links.portfolio" target="_blank" class="link-item">
                <span class="icon">
                    <i class="fa fa-home"></i>
                </span>
                Portfolio
            </a>
            <a :href="links.github" target="_blank" class="link-item">
                <span class="icon">
                    <i class="fa fa-github"></i>
                </span>
                Github
            </a>
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
.link-item {
    margin-right: 10px;
}
</style>
