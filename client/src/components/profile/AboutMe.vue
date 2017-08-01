<template>
    <div class="box">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">About me</p>
                </div>
            </div>
            <div class="level-right">
                <a v-if="personalProfile" @click="$store.commit('TOGGLE_EDIT', {component: 'aboutMe', active: true})">
                    edit
                    <span class="icon is-small">
                        <i class="fa fa-pencil"></i>
                    </span>
                </a>
            </div>
        </div>
        <br>
        <p>Name</p>
        <p>{{ fullName }} - @{{aboutMe.chingu}}</p>
        <br>
        <p>Living in</p>
        <p>{{ aboutMe.livingIn }}</p>
        <br>
        <p>Introduction</p>
        <p class="line-break">{{ aboutMe.introduction }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['personalProfile'],
    computed: {
        ...mapGetters([
            'aboutMe',
            'fullName'
        ])
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/settings.scss';

.line-break {
    white-space: pre;
    white-space: pre-line;
}
</style>
