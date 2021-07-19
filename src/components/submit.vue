<template>
  <div>
    <span v-if="isAdmin">Admin priviledge</span>
    <span v-else>Admin not authorized</span>
    <button>{{msg}}</button>
  </div>
</template>

<script>
export default {
    name:"submit",
    props:{
        msg:{
            type:String,
            required:true
        },
        isAdmin: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>

</style>