<template>
    <section class="container">
        <h2 class="details-box-heading title has-text-centered is-5">{{ personalProfile ? 'Your Profile' : 'User Profile' }}</h2>
        <div class="details-box box">
            <!-- <div class="column is-half is-offset-one-quarter">
                <h1 class="title has-text-centered">My Projects</h1>
            </div>
            <div class="tile is-ancestor">
                <router-link :to="`/project/${project.id}`" v-for="project in myProjects" :key="project.id" class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <div class="level">
                            <div class="level-item">
                                <p class="title is-3">{{ project.details.name }}</p>
                            </div>
                        </div>
                        <div class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    Submitted by {{ project.creator }}
                                </div>
                            </div>
                        </div>
                        <br>
                        <p class="line-break">{{ project.details.description | snippet}}</p>
                    </article>
                </router-link>
            </div>  -->
            <component :personalProfile="personalProfile" :is="edit.aboutMe ? 'app-about-me-edit' : 'app-about-me'"></component>
            <hr>
            <div class="columns">
                <component :personalProfile="personalProfile" :is="edit.skills ? 'app-skills-edit' : 'app-skills'"></component>
                <component :personalProfile="personalProfile" :is="edit.links ? 'app-links-edit' : 'app-links'"></component>
            </div>
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

import firebase from 'firebase'

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
        },
        personalProfile() {
            return this.$route.path === '/profile';
        }
    },
    beforeRouteLeave(to, from, next) {
        this.$store.commit('TOGGLE_EDIT', { component: 'aboutMe', active: false });
        this.$store.commit('TOGGLE_EDIT', { component: 'skills', active: false });
        this.$store.commit('TOGGLE_EDIT', { component: 'links', active: false });
        this.$store.commit('SET_LINKED_USER_PROFILE', null);
        next();
    },
    beforeRouteEnter(to, from, next) {
        if (to.path === '/profile') {
            next();
        }

        firebase.database().ref(`users/${to.params.id}`)
            .once('value', snap => {
                next(vm => vm.$store.commit('SET_LINKED_USER_PROFILE', snap.val()));
            });
    }     
}

</script>

<style lang="scss" scoped>
@import '../../assets/styles/details-box.scss';
    

</style>

