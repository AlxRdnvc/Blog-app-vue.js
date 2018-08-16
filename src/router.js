import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './pages/AppPosts'
import SinglePost from './components/SinglePost'

Vue.use(VueRouter)

const routes = [
    {path:'/', redirect: '/posts', name: 'home'},
    {path:'/posts' , component: AppPosts, name:'posts'},
    {path: '/posts/:id', component: SinglePost, name: 'view'}
]

export const router = new VueRouter({
    mode: 'history',
    routes
  })