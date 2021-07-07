<template>
  <div class="signUp">
        <header>
            <img src="../assets/sterlingLogo.png" alt="">
        </header>
        <h3>Start here to experience</h3>
        <h3>premium banking</h3>
        <p>Verify your email to continue with the sign <br> up process.</p>
        <form action="">
            <input placeholder="Makinde@example.com" type="text">
            <button>Continue</button>
            <router-link to="login">
                <p>Not new here? <span>login</span></p>
            </router-link>
        </form>
        <!-- <form @submit="signUp"  action="">
            <input v-model="userDetails.name" placeholder="Enter name" type="text">
            <input v-model="userDetails.email" placeholder="Enter email" type="text">
            <input v-model="userDetails.password" placeholder="Enter password" type="text">
            <button>Sign up</button>
            <p>
                <router-link to='/login'>Sign in</router-link>
            </p>
        </form> -->
        <img class="topcircles" src="../assets/Group538.png" alt="">
        <img class="bottomcircles" src="../assets/group2.png" alt="">
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'signup',
    data(){
        return{
            userDetails:{
                name:'',
                email:'',
                password:''
            }
        }
    },
    methods:{
        async signUp(e){
            e.preventDefault();
            await axios.post("http://localhost:3000/user",{
                name:this.userDetails.name,
                email:this.userDetails.email,
                password:this.userDetails.password
            }).then((res)=>{
                console.log(res);
                if(res.status===201){
                    this.$router.push({name:"Home"});
                    localStorage.setItem('session',JSON.stringify(res.data));
                }
            })
        }
    },
    mounted(){
        const storedInfo = localStorage.getItem('session');
        if(storedInfo){
            this.$router.push({name:"Home"});
        }
    }
}
</script>

<style scoped>
*{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.signUp{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

header img{
    margin-bottom: 20px
}

.signUp h3{
    font-size: 20px;
    font-weight: 500;
    
}

.signUp p{
    color: #929292;
    text-align-last: center;
    margin-top: 10px;
    font-size: 18px;
}

.topcircles{
    position: fixed;
    left: 0px;
    top: 0px;
}

.bottomcircles{
    bottom: 0px;
    right: 0px;
    position: fixed;
}

form{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}

form input{
    height: 64px;
    width: 371px;
    border-radius: 4px;
    background: #f0eaea71;
    padding-left: 20px;
    border: 1px solid #E1E1E1;

}

form button{
    height: 59px;
    width: 371px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    background: #0EA0BC;
    color: white;
    font-weight: bold;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    

}

form p{
    color:#929292;
    font-size: 16px;
    font-weight:500;
    text-decoration: none;
}


form  span{
    color:#2d945f;
    cursor: pointer;
}

form a{
    text-decoration: none;
}

</style>