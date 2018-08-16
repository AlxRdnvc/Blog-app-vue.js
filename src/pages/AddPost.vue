<template>
    <div>
        <form @submit.prevent>
            <div class="form-group">
                <label for="title">Title</label>
                <input v-model="newPost.title" type="text" class="form-control" id="title" placeholder="Title...">
            </div>
            <div class="form-group">
                <label for="text">Text</label>
                <input v-model="newPost.text" type="text" class="form-control" id="text" placeholder="Text...">
            </div>
            <button @click="addNewPost()" type="submit">Add post</button>
        </form>
    </div>
</template>
<script>
import {posts} from '../services/posts.js'

export default {
    name: 'add-post',
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
        }
    }
}
</script>

