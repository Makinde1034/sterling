<template>
    <div class="signIn">
        <header>
            <img src="../assets/sterlingLogo.png" alt="sterling logo">
        </header>
        <h3>Start here to experience</h3>
        <h3>premium banking</h3>
        <p>Sign in to continue filling the from <br> where you stopped the last time</p>
        <form  @submit="loguserIn" class="form">
        
            <input  required v-model="loginDetails.email"   placeholder="Makinde@example.com" type="text">
            <button>Continue</button>
            <router-link class="signup__link" to="/signup">
                <p>First time here?<span> open an account</span></p>
            </router-link>
         
        </form>
        <!-- <form @submit="loguserIn" action="">
            <input required v-model="loginDetails.email" placeholder="email" type="text">
            <input required v-model="loginDetails.password" placeholder="password" type="text">
            <button>
                <p v-if="loader===false">Sign in</p>
                <Preloader v-else />
            </button>
            <p :class="style">Email or password is not correct, try again</p>
        </form>
   -->
        <img class="topcircles" src="../assets/Group538.png" alt="top circle">
        <img class="bottomcircles" src="../assets/group2.png" alt="bottom cirle">
    </div>
</template>

<script>
import axios from 'axios'
// import Preloader from '../utils/preloader.vue'

export default {
//   components: { Preloader },
    data(){
        return{
            loginDetails:{
                email:'',
                // password:''
            },
            loader:false,
            style:"red"
        }
    },
    methods:{
        async loguserIn(e){
            e.preventDefault()
            this.loader=true
            await axios.get(`https://my-json-server.typicode.com/makinde1034/sterling-serer/user?email=${this.loginDetails.email}`).
            then((res)=>{
                console.log(res)
                if(res.status===200 && res.data.length>0){
                    this.$router.push({name:"Accountoption"});
                    localStorage.setItem('session',JSON.stringify(res.data));
                    this.loader =false
                }else{
                    this.loader = false
                    this.style='redActive'
                }
            });
        }
    },
    mounted(){
        const session = localStorage.getItem('session');
        if(session){
            this.$router.push({name:'Home'});
        }
        
    }
}
</script>

<style scoped>

header img{
    margin-bottom: 10px;
}

.signIn{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.signIn h3{
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    
    
}

.signIn p{
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


/*  */
.red{
    color:red;
    display: none;
}

.redActive{
    display: block;
    color: red;
}

.form{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
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
    

}

.form p{
    color:#929292;
    font-size: 16px;
    font-weight: 500;
}

.form span{
    color:#2d945f;
    cursor: pointer;
}

.signup__link{
    text-decoration: none;
}

@media screen and (max-width:600px) {
    .topcircles{
        height: 100px;
    }

    .bottomcircles{
        height:100px;
    }

    .form{
        align-items: center;
    }

    .form button{
        width: 324px;
    }

    .form input{
        width:324px
    }
}
</style>