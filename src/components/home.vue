<template>
    <Header />
    <h3>{{name}}This my home</h3>
    <button @click="logout">Logout</button>
</template>

<script>
import Header from './header.vue'
export default {
    name:"Home",
    components:{
        Header
    },
    data(){
        return{
            name:""
        }
    },
    methods:{
        logout(){
            localStorage.removeItem('session');
            this.$router.push({name:"Login"});
        }
    },
    mounted(){
        const storedInfo = localStorage.getItem('session');
        // this.name = JSON.parse(storedInfo).name
        if(!storedInfo){
            this.$router.push({name:"Login"});
        }
    }
}
</script>

<style>

</style>