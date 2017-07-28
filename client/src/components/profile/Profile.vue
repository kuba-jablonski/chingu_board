<template>
    <section class="container">
        <h2 id="profile-heading" class="title has-text-centered is-5">Your Profile</h2>
        <div id="profile-section" class="box">
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
@import '../../assets/styles/settings.scss';

#profile-section {
    margin: 2rem auto;
}

#profile-heading {
    position: relative;
    top: 2rem;
    left: 2rem;
    z-index: 10;
    border-radius: 5px 5px 0 0;
    background-color: white;
    max-width: 300px;
    border: 1px solid #D5D5D5;
    border-bottom: none;
    color: $primary;
    font-weight: bold;
    padding: 5px 0;
    @media (max-width: $tablet) {
        margin: 0 auto;
        left: 0;
    }
}
</style>

