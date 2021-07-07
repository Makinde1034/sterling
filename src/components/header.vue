<template>
  <div>
      <nav>
          <ul>
              <li>Home</li>
              <li>Add restaurant</li>
              <li>Update restaurant</li>
              <li>Logout</li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{

        }
    },

}
</script>

<style>
nav{
    display: flex;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 8vh;
}
nav ul{
    display: flex;
    width: 50%;
    display: flex;
    justify-content: space-between;
}

nav ul li{
    cursor: pointer;
}

nav ul li:hover{
    border-bottom: 2px solid orange;
}
</style>