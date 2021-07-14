<template>
  <div class="signUp">
        <header>
            <img src="../assets/sterlingLogo.png" alt="sterling logo">
        </header>
        <h3>Start here to experience</h3>
        <h3>premium banking</h3>
        <p class="signUp__para">Verify your email to continue with the sign <br> up process.</p>
        <form  @submit="signUp"   class="form">
            <input v-model="userDetails.email" required placeholder="Makinde@example.com" type="email">
            <button>
                <p v-if="loading===false" class="form__but">Continue</p>
                <preloader v-if="loading===true" />
            </button>
            <router-link class="link" to="login">
                <p class="form__para">Not new here? <span>login</span></p>
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
import Preloader from '../utils/preloader.vue'

export default {
  components: { Preloader },
    name:'signup',
    data(){
        return{
            userDetails:{
                name:'',
                email:'',
                password:''
            },
            loading:false
        }
    },
    methods:{
        async signUp(e){
            e.preventDefault();
            this.loading = true
            await axios.post("https://my-json-server.typicode.com/makinde1034/sterling-serer/user",{
                // name:this.userDetails.name,
                email:this.userDetails.email,
                // password:this.userDetails.password
            }).then((res)=>{
                console.log(res);
                res.loading =false
                if(res.status===201){
                    this.$router.push({name:"Success"});
                    localStorage.setItem('session',JSON.stringify(res.data));
                }
            })
        }
    },
    mounted(){
        const storedInfo = localStorage.getItem('session');
        if(storedInfo){
            this.$router.push({name:"Accountoption"});
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
    margin-bottom: 20px;
    z-index:1;
}

.signUp h3{
    font-size: 20px;
    font-weight: 500;
    z-index:1;
    
}

.signUp__para{
    /* color: #929292; */
    text-align-last: center;
    margin-top: 10px;
    font-size: 18px;
    z-index:1;
}

.topcircles{
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 0;
}

.bottomcircles{
    bottom: 0px;
    right: 0px;
    position: fixed;
    z-index: 0;
}

.form{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    z-index:1;
    align-items: center;
}

.form input{
    height: 64px;
    width: 371px;
    border-radius: 4px;
    background: #f0eaea71;
    padding-left: 20px;
    border: 1px solid #E1E1E1;

}

.form button{
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
    display: flex;
    align-items: center;
    justify-content: center;
    

}

.form__para{
    color:#929292;
    font-size: 16px;
    font-weight: 500;
}

.form__but{
    color: white;
    /* font-size: 8px; */
}


.form  span{
    color:#2d945f;
    cursor: pointer;
}

.link{
    text-decoration: none;
    margin-top: 10px;
}


@media screen and (max-width:600px){
    .signUp{
        /* padding-left: 20px;
        padding-right: 20px; */
    }
    .topcircles{
        height: 100px;
    }

    .bottomcircles{
        height:100px;
    }

    .form button{
        width: 324px;
    }

    .form input{
        width: 324px;
    }
}
</style>