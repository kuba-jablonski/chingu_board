<template>
    <section>
        <div class="columns">
            <div class="column is-half has-text-centered">
                <p class="subtitle is-3">About me 
                    <span class="icon is-medium">
                        <i class="fa fa-user"></i>
                    </span>
                </p>
                <p><span class="chingu">@{{aboutMe.chingu}}</span></p>
                <p><strong>{{ fullName }}</strong></p>
                <p>{{ aboutMe.livingIn }}</p>
            </div>
            <div class="column is-half has-text-centered">
                <p class="subtitle is-3">Introduction
                    <span class="icon">
                        <i class="fa fa-file-text"></i>
                    </span>
                </p>
                <p class="line-break">{{ aboutMe.introduction }}</p>
            </div>
        </div>
        
        <div class="columns">
            <div class="column is-12">
                <div class="is-pulled-right">
                    <a v-if="personalProfile" @click="$store.commit('TOGGLE_EDIT', {component: 'aboutMe', active: true})">
                        edit
                        <span class="icon is-small">
                            <i class="fa fa-pencil"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
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
.chingu {
    font-size: 3em;
    font-style: italic;
}
</style>
