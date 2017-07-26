<template>
    <section class="section container">
        <div class="box">
            <h2 class="title is-3">Your Profile</h2>
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


