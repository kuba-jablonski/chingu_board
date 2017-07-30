<template>
    <footer class="footer">
        <div class="container">
            <div class="columns is-inverted">
                <div class="column">
                    <!-- first column -->
                    <p class="title is-6 is-spaced">For Talent</p>
                    <hr>
                    <ul>
                        <li><router-link to="/projects">Explore Projects</router-link></li>
                        <li v-if="!authed"><router-link to="/signup">Sign Up</router-link></li>
                    </ul>
                </div>
                
                <!-- second column -->
                <div class="column">
                    <p class="title is-6 is-spaced">For Project Creators</p>
                    <hr>
                    <ul>
                        <li><router-link v-if="authed" to="/project/create">add a project</router-link></li>
                    </ul>
                    
                    <div v-if="!authed" class="dropdown is-hoverable">    
                        <div class="dropdown-trigger">
                            <router-link to="/signin"><span>get help!</span></router-link>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                                <div class="dropdown-item">
                                    <p>Join the Chingu Project Board, add your own project, recruit a team of developpers, and build together!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- third column -->
                <div class="column">
                    <p class="title is-6">Chingu</p>
                    <hr>
                    <ul>
                        <li>who we are</li>
                        <li><a href="https://chingu-cohorts.github.io/chingu-directory/">join a code cohorts</a></li>
                        <li><a href="https://www.paypal.me/ChinguCohorts">donate</a></li>
                    </ul>
                </div>
                
                <!-- fourth column -->
                <div class="column">
                    <p class="title is-6">Follow us</p>
                    <hr>
                    <ul>
                        
                        <li>
                            <a href="https://medium.com/chingu">medium
                                <span class="is-pulled-right">
                                    <i class="fa fa-medium"></i>
                                </span>
                            </a>
                        </li>
                        
                        
                        <li>
                            <a href="https://facebook.com/chingu.cohorts">facebook
                                <span class="is-pulled-right">
                                    <i class="fa fa-facebook"></i>
                                </span>
                            </a>
                        </li>
                        
                        
                        
                        
                        <li>
                            <a href="https://twitter.com/ChinguCollabs">twitter
                                <span class="is-pulled-right">
                                    <i class="fa fa-twitter"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="content has-text-centered">
                <p>
                    Build by <strong>Bears Team 11</strong>.
                </p>
                <p>
                    <a class="icon" href="https://github.com/jgthms/bulma">
                        <i class="fa fa-github"></i>
                    </a>
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import authed from '../mixins/authed';

export default {
    data() {
        return {
        }
    },
    mixins: [authed]
}

    
</script>

<style lang="scss" scoped>
@import '../assets/styles/settings.scss';
    
.columns {
    text-transform: uppercase;
}
.column {
    margin-bottom: 25px;
}
.dropdown {
    cursor: pointer;
    width: 100%;
}
.dropdown-item{
    text-transform: none;
}
.footer {
    background-color: white;
}
</style>