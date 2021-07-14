<template>
    <div className='the_box'>
        <div className='loader'></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* .the_box{
    border-radius: 2px;
    background-color:transparent;
    padding:.5rem;
} */
.loader {
  border: 3px solid #0EA0BC;
  border-radius: 50%;
  border-top: 3px solid white;
  width: 25px;
  height: 25px;
  -webkit-animation: spin .5s linear infinite; /* Safari */
  animation: spin .5s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>