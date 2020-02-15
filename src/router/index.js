import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Details from '../components/Details.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/details',
        name: 'Details',
        component: Details
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router