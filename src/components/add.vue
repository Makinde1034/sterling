<template>
    <div>
        <h3>welcome, you can start adding restaurants</h3>
    </div>
</template>

<script>
export default {
    name:"Add",
    data(){
        return{
            name:""
        }
    },
    methods:{
        
    },
    mounted(){
        const session  = localStorage.getItem('session');
        // this.name = JSON.parse(session).name
        if(!session){
            this.$router.push({name:"Login"});
        }
    }
    
}
</script>

<style>

</style>