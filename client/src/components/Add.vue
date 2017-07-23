<template>
    <div class="container form-group">
        <h1>Add your project!</h1>
        <form action="/add" method="POST">
            <div class="form-group">
                <label class="col-sm-2 col-form-label">Title</label>
                <input type="text" class="form-control" name="blog[title]" placeholder="Enter the title">
            </div>
            <div class="form-group">
                <label class="col-sm-2 col-form-label">Prototype/image</label>
                <input type="text" class="form-control" placeholder="URL">
            </div>
            <div class="form-group">
                <label class="col-sm-2 col-form-label">Content</label>
                <textarea class="form-control" rows="5" placeholder="Write your description"></textarea>
            </div>
            <input class="btn btn-lg btn-default btn-block" type="submit">
        </form>
    </div>
</template>
