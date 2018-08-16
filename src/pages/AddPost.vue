<template>
    <div>
        <h1 v-if="(!this.$route.params.id)">Add a post</h1>
        <h1 v-else>Edit post</h1>
        <form @submit.prevent>
            <div class="form-group">
                <label for="title">Title</label>
                <input v-model="newPost.title" type="text" class="form-control" id="title" placeholder="Title..." required>
            </div>
            <div class="form-group">
                <label for="text">Text</label>
                <input v-model="newPost.text" type="text" maxlength="300" class="form-control" id="text" placeholder="Text..." required>
            </div>
            <button class="btn-default" style="margin-right: 20px;" v-if="(!this.$route.params.id)" @click="addNewPost()" type="submit">ADD POST</button>
            <button class="btn-default" style="margin-right: 20px;" v-else @click="editPost(newPost)" type="submit">EDIT</button>
            <input type="reset" value="Reset" />
        </form>
    </div>
</template>
<script>
import {posts} from '../services/posts.js'

export default {
    data(){
        return {
            newPost: {}
        }
    },
    methods: {
        addNewPost(){
           posts.add(this.newPost)
           .then(response => {this.$router.push('/posts')}) // nakon resolve-a redirektuje na pocetnu '/posts' stranicu
           .catch(err => console.log(err)) // ako catch-uje error onda console.log-ujemo error
        },
        editPost(post){
            posts.edit(post)
            .then(response => {this.$router.push('/posts')})
            .catch(err => console.log(err))
        }
    },
    created () {
        if(this.$route.params.id) {
            posts.getPost(this.$route.params.id)
            .then(response => (this.newPost = response.data));
        }
    }
}
</script>

