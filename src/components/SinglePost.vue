<template>
    <div>
        <h2 style="text-align: center">{{ post.title }}</h2>
        <p style="padding-left: 5%">{{ post.text }}</p><hr> 
        <AddComment :post="post" /> 
        <div class="comment" v-for="(comment, index) in post.comments" :key="index">
                <p>{{comment.text}}</p>
                <p>{{comment.createdAt}}</p>
        </div>
    </div>
</template>
<script>


import { posts } from '../services/posts.js'
import AddComment from '../components/AddComment.vue'

export default {
    name: 'posts',
    components: {
        AddComment
    },
    data(){
        return {
            id: this.$route.params.id,
            post: {},
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