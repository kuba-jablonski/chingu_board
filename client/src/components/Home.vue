<template>
    <section class="hero is-medium is-primary">
        <div class="hero-body">
            <div class="container is-flex">
                <h1 class="title is-1">
                    Bring ideas to life
                </h1>
                <h2 class="subtitle is-4">
                    contribute to the chingu community
                </h2>
                <br>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-medium is-primary is-inverted">
                            <span class="icon">
                                <i class="fa fa-search"></i>
                            </span>
                            <span class="is-size-6">Explore projects</span>
                        </button>
                    </div>
                    <div class="control">
                        <button class="button is-medium is-primary is-inverted">
                            <span class="icon">
                                <i class="fa fa-user-plus"></i>
                            </span>
                            <span class="is-size-6">Join an Adventure</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '../assets/styles/settings.scss';

.title {
    font-weight: bold;
    text-decoration: underline;
    text-transform: uppercase;
}

.is-flex {
    flex-direction: column;
    align-items: center;
}

.button {
    text-transform: uppercase;
}

@media (max-width: $tablet) {
    .title {
        font-size: $size-2;
    }
}
</style>
