import {createRouter,createWebHistory} from 'vue-router'
import SignUp from '../components/signup'
// import Home from '../components/home'
import Login from '../components/signin'
import Add from '../components/add'
import Landing from '../components/landing'
import Success from '../components/successful'
import Accountoptions from '../components/accountoption'

const routes = [
    {
        name:"Signup",
        component:SignUp,
        path:"/signup"
    },
    {
        name:"Landing",
        component:Landing,
        path:"/"
    },  
    {
        name:"Login",
        component:Login,
        path:"/login"
    },
    {
        name:"Add",
        component:Add,
        path:"/add"
    },
    {
        name:"Success",
        component:Success,
        path:"/success"
    },
    {
        name:"Accountoption",
        component:Accountoptions,
        path:"/options"
    }
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router