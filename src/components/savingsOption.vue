<template>
  <div>
      <div class="savings">
        <p>{{title}}</p>
        <img src="../assets/tt.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  props:['title','img']
}
</script>

<style scoped>

.savings{
  width: 100%;
  padding: 10px 30px 20px 30px;
  background: #e0f4f8;
  display: flex;
  align-items: center;
  justify-content: space-between;

}


.savings p{
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color:  #009FBB;
;

}
</style>