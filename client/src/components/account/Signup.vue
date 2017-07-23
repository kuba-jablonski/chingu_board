<template>
    <div class="container">
        <div class="row">
    
            <h1>SIGN UP</h1>
    
            <form action="/signup" method="POST">
                <div class="form-group">
                    <input class="form-control" type="text" name="username" placeholder="username" required>
                </div>
                <div class="form-group">
                    <input class="form-control" type="password" name="password" placeholder="password" required>
                </div>
                <button class="btn btn-lg btn-default btn-block">Register</button>
            </form>
        </div>
    </div>
</template>
