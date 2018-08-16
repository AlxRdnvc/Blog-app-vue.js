<template>
    <div>
        <h2 style="text-align: center">{{ post.title }}</h2>
        <p style="padding-left: 5%">{{ post.text }}</p><hr>   
    </div>
</template>
<script>

import {posts} from '../services/posts.js'

export default {
    name: 'posts',
    data(){
        return {
            id: this.$route.params.id,
            post: {}
        }
    },
    created() {
        posts.getPost(this.id)
        .then((response) => {
            this.post = response.data
        })
        .catch(err => console.log(err))
    }
}
</script>