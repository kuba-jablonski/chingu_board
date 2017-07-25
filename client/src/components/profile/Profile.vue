<template>
    <section class="section container">
        <div class="box">
            <h2 class="title is-3">Your Profile</h2>
            <app-about-me :aboutMe="user.aboutMe"></app-about-me>
            <div class="section">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <p class="subtitle is-5">Skills</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <a>edit</a>
                    </div>
                </div>
                <div class="is-flex">
                    <div class="skill-item">
                        Javascript
                        <span class="tag">
                            Beginner
                        </span>
                    </div>
                    <div>
                        HTML
                        <span class="tag">
                            Advanced
                        </span>
                    </div>
                </div>
            </div>
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

export default {
    components: {
        appAboutMe: AboutMe
    },
    data() {
        return {
            edit: {
                aboutMe: false,
                skills: false,
                links: false
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.profile.user;
        }
    }
}
</script>


<style lang="scss" scoped>
.skill-item,
.link-item {
    margin-right: 10px;
}
</style>
