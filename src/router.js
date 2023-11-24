import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'


const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path: '/about',
        name:'About',
        component: ()=>import('./views/About.vue')
    },
    {
        path:'/calc',
        name:'Calc',
        component: ()=> import('./views/Calculation.vue')
    },
    {
        path:'/brew',
        name:'Brew',
        component: () => import('./views/Breweries.vue')
    },
    {
        path:'/people',
        name:'People',
        component: () => import('./views/People.vue')
    }
]

export default ()=>
    createRouter({
        history:createWebHistory(),
        routes
    })
