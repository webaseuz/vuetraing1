import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home')
const Course = () => import('@/views/course')
Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            component : Home
        },
        {
            path : '/course',
            component : Course
        }
    ]
})
export default router