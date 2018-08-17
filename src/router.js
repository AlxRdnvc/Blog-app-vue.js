import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './pages/AppPosts'
import SinglePost from './components/SinglePost'
import AddPost from './pages/AddPost'
import AddComment from './components/AddComment';

Vue.use(VueRouter)

const routes = [
    {path:'/', redirect: '/posts', name: 'home'},
    {path:'/posts' , component: AppPosts, name:'posts'},
    {path: '/posts/:id', component: SinglePost, name: 'view'},
    {path: '/add', component: AddPost, name: 'add-post'},
    {path: '/edit/:id', component: AddPost, name: 'edit-post'}
]

export const router = new VueRouter({
    mode: 'history',
    routes
  })