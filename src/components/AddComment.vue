<template>
<div>
    <form>
        <div class="form-group">
            <label for="text">Add Comment</label>
            <textarea class="form-control" type="text" id="text" required v-model="newComment.text"></textarea>
        </div>
        <div class="form-group">
            <button @click="addComment(post.id)" type="button">Send comment</button>
        </div>
    </form>
</div>
</template>
<script>
import { posts } from './../services/posts.js'
export default {
    name: 'add-comment',
    props: ['post'],
    data(){
        return {
            newComment: {},
            comments: []
        }
    },
    methods: {
        addComment(postId){
            let comment = {
                ...this.newComment,
                postId
            }
            posts.addComment(comment, postId)
            .then(response => {this.$router.go(0)
            .catch(err => console.log(err))
            })
        }
    }
}
</script>

