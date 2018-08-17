<template>
    <div>
        <h1 style="text-align: center;">Posts</h1><br><br>
        <div v-for="(post, index) in posts" :key="post.id"> 
            <router-link :to="{ name: 'view', params: { id: post.id }}" class="btn btn-default">
                <h2 style="padding-left: 5%">{{ post.title }}</h2>
            </router-link>
            <router-link :to="{ name: 'edit-post', params: { id: post.id } }" class="btn btn-default">
                <button type="button">Edit</button>
            </router-link>
            <button class="btn btn-danger" @click="deletePost(post.id, index)">Delete</button>
            <p style="padding-left: 5%">{{ post.text }}</p><hr>  
        </div>
    </div>
</template>
<script>

import {posts} from '../services/posts.js'

export default {
    name: 'posts',
    data() {
        return {
            posts: []
        }
    },
    methods: {
        deletePost(id, index){
            posts.remove(id)
            .then((response) => {
                this.posts.splice(index, 1)
            })
        }
    },
    beforeRouteEnter (to, from, next) {
    posts.getAll()
      .then((response) => {
          next((vm) => {
            vm.posts = response.data
          })
    })
  }
}
</script>

