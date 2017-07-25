<template>
    <div class="box">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">About me</p>
                </div>
            </div>
            <div class="level-right">
                <a @click="$store.state.profile.edit.aboutMe = false" class="delete is-medium"></a>
            </div>
        </div>
        <br>
        <div class="columns">
            <div class="field column">
                <label class="label">First Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input">
                </div>
            </div>
            <div class="field column">
                <label class="label">Last Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input">
                </div>
            </div>
        </div>
        <div class="field">
            <label class="label">Living in</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Introduction</label>
            <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary">Save</button>
            </div>
            <div class="control">
                <button class="button is-link">Cancel</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.columns {
    margin-bottom: 0;
}
</style>
