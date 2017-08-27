<template>
    <section class="hero is-light">
        <div class="hero-body">
            <div class="container is-flex">
                <h1 class="title is-1">Ching-Who?</h1>
                <div class="columns">
                    <div class="column is-half is-offset-one-quarter box">
                        <h2 class="subtitle is-2 has-text-centered">We Are Chingu!</h2>

                        <p>Chingu is a community of developpers who join forces to level up their skills by building cool projects.</p>
                        <br>
                        <p class="happens  has-text-centered">Here's what happens in Chingu:</p>
                        <br>
                            <ul class="has-text-centered">
                                <li>Ask for help with your coding problems,</li>
                                <li>Discover invaluable resources,</li>
                                <li>Get job ready!</li>
                            </ul>
                        <hr>
                        <h3 class="subtitle is-3  has-text-centered">Join a Cohort!</h3>
                        <p>Cohorts are collaboration teams for developpers. You get to connect with passionate learners who share similar goals, help each other and build projects you can be proud of.</p>
                        <br>
                        <p class=" has-text-centered">Like a bootcamp, with time flexibility, and the cost of a smile. :) </p>
                        <br>
                        <p class="has-text-centered"><a href="https://chingu-cohorts.github.io/chingu-directory/">Join a code cohort!</a></p>
                    </div>
                </div>
            </div>   
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/settings.scss';

.is-flex {
    flex-direction: column;
    align-items: center;
}
    
h2 {
    text-transform: uppercase;
}

.happens {
    font-weight: bold;
}

</style>