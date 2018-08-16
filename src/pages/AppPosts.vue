<template>
    <div>
        <h1 style="text-align: center;">Posts</h1><br><br>
        <div v-for="(post, index) in posts" :key="index"> 
            <h2 style="padding-left: 5%">{{ post.title }}</h2><br>
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

