<template>
    <section class="section container">
        <div class="box">
            <h2 class="title is-3">Your Profile</h2>
            <component :is="edit.aboutMe ? 'app-about-me-edit' : 'app-about-me'"></component>
            <component :is="edit.skills ? 'app-skills-edit' : 'app-skills'"></component>
            <div class="section">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <p class="subtitle is-5">Links</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <a>edit</a>
                    </div>
                </div>
                <div class="is-flex">
                    <p class="link-item">
                        <span class="icon">
                            <i class="fa fa-home"></i>
                        </span>
                        Portfolio
                    </p>
                    <p class="link-item">
                        <span class="icon">
                            <i class="fa fa-github"></i>
                        </span>
                        Github
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AboutMe from './AboutMe.vue';
import AboutMeEdit from './AboutMeEdit.vue';
import Skills from './Skills.vue';
import SkillsEdit from './SkillsEdit.vue';

export default {
    components: {
        appAboutMe: AboutMe,
        appAboutMeEdit: AboutMeEdit,
        appSkills: Skills,
        appSkillsEdit: SkillsEdit
    },
    computed: {
        user() {
            return this.$store.state.profile.user;
        },
        edit() {
            return this.$store.state.profile.edit;
        }
    }
}
</script>


<style lang="scss" scoped>
.link-item {
    margin-right: 10px;
}
</style>
