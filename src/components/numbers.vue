<template>
  <div>
    {{number}}
  </div>
</template>

<script>
export default {
  computed:{ 
    number(){
      const even = []
      const odd = []
      for(var i=1;i<10;i++){
        if(i%2===0){
          even.push(i);
        }else{
          odd.push(i);
        }
      }
      return even.join(",");
    }
  }
}
</script>

<style>

</style>