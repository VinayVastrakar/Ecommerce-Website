import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Order from './components/Order.vue'
import ConnectUs from './components/ConnectUs.vue'
import ProductPage from './components/Product.vue'


const routes= [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'ProductPage',
        component:ProductPage,
        path:'/product'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    },
    {
        name:'Order',
        component:Order,
        path:'/order'
    },
    {
        name:'ConnectUs',
        component:ConnectUs,
        path:'/connectus'
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router