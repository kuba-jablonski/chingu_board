<template>
    <section class="section container">
        <div class="box">
            <h2 class="title is-3">Your Profile</h2>
            <div class="box">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p class="subtitle is-5">About me</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <a>edit</a>
                    </div>
                </div>
                <br>
                <p>Name</p>
                <p>John Doe</p>
                <br>
                <p>Living in</p>
                <p>New York City</p>
                <br>
                <p>Introduction</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore autem unde dolor explicabo corrupti laboriosam ea optio tenetur sequi aspernatur. Ut voluptas sint omnis sed praesentium unde iure eum cumque, inventore vitae sapiente dolore non maiores. Hic, dicta recusandae quo, aspernatur explicabo ad culpa alias sed accusamus a aperiam blanditiis.</p>
            </div>
            <div class="section">
                <div class="level">
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
                <div class="level">
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

<style lang="scss" scoped>
.skill-item, .link-item {
    margin-right: 10px;
}
</style>
