<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/" tag="a">chingu projects board</router-link>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/projects" tag="a">Explore projects</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link to="/signin" tag="a">Sign In</router-link>
                    </li>
                    <li>
                        <router-link to="/signup" tag="a">Sign Up</router-link>
                    </li>
                    <li>
                        <router-link to="/add" tag="a">Add a Project</router-link>
                    </li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav> 
</template>
