<template>
    <section class="container">
        <h2 class="details-box-heading title has-text-centered is-5">Your Profile</h2>
        <div class="details-box box">
            <component :is="edit.aboutMe ? 'app-about-me-edit' : 'app-about-me'"></component>
            <component :is="edit.skills ? 'app-skills-edit' : 'app-skills'"></component>
            <component :is="edit.links ? 'app-links-edit' : 'app-links'"></component>
        </div>
    </section>
</template>

<script>
import AboutMe from './AboutMe.vue';
import AboutMeEdit from './AboutMeEdit.vue';
import Skills from './Skills.vue';
import SkillsEdit from './SkillsEdit.vue';
import Links from './Links.vue';
import LinksEdit from './LinksEdit.vue';

export default {
    components: {
        appAboutMe: AboutMe,
        appAboutMeEdit: AboutMeEdit,
        appSkills: Skills,
        appSkillsEdit: SkillsEdit,
        appLinks: Links,
        appLinksEdit: LinksEdit
    },
    computed: {
        edit() {
            return this.$store.state.profile.edit;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/details-box.scss';

</style>

