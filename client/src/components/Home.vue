<template>
    <div>
        <section class="splash">
            <h1>Chingu Projects Board</h1>
            <h2>Build to Learn</h2>
            <p>Add or join a project</p>
            <p>Help and get help</p>
            <p>Level up your skills</p>
            <div class="splash-buttons">
                <router-link type="button" class="btn btn-primary" to="/projects" tag="a">Explore projects</router-link>
                <router-link type="button" class="btn btn-primary" to="/add" tag="a">Add a project</router-link>
            </div>
        </section>
    
        <!-- Some of the latest projects listings -->
        <div class="container">
            <div class="row projects-list">
                <h3>FEATURED PROJECTS</h3>
                <div class="col-lg-4">
                    <h2>Chingu Project #1</h2>
                    <p>Chingu project description. An image may go here too</p>
                    <p>Project languages, skills required, tags...</p>
                </div>
    
                <div class="col-lg-4">
                    <h2>Chingu Project #2</h2>
                    <p>Chingu project description. An image may go here too</p>
                    <p>Project languages, skills required, tags...</p>
                </div>
    
                <div class="col-lg-4">
                    <h2>Chingu Project #3</h2>
                    <p>Chingu project description. An image may go here too</p>
                    <p>Project languages, skills required, tags...</p>
                </div>
    
                <button type="button" class="btn btn-success view-all">View all projects</button>
    
            </div>
        </div>
    
        <section class="mission">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h3>(Y)OUR MISSION</h3>
                        <h4>build the world</h4>
                        <p>Level up your programming or development skills by contributing to projects. Build a portfolio you can be proud of, and learn along the way. As a member of Chingu cohorts, you are part of an ever growing community that you can empower with your skills, as well as having a whole team give life to your own ideas.</p>
                        <button type="button" class="btn btn-default">Join CPB!</button>
                    </div>
                    <div class="col-md-5">
                        <img class="img-responsive center-block" src="https://source.unsplash.com/aRXPJnXQ9lU/500x333" alt="Generic placeholder image">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
