<template>
    <div>
        <section class="benefits">
            <div class="benefits__logo">
                <img src="../assets/sterlingLogo.png" alt="">
            </div>
            <div class="benefits__naira">
                <h3>Every Naira Counts</h3>
                <p>Start saving now to get the best benefits from your sterling account</p>
            </div>
            <div class="benefits__grid">
                <div>
                    <img src="../assets/instant.svg" alt="">
                </div>
                <div>
                    <img src="../assets/global.png" alt="">
                </div>
                <div>
                    <img src="../assets/active.png" alt="">
                </div>
                <div>
                    <img src="../assets/010.svg" alt="">
                </div>
            </div>
            <div class="mask">
                <router-link to='/signup'>
                    <button>Open an acccount for free</button>   
                </router-link>
                <router-link class="login__link" to="/login">
                     <p>Have an account? <span>sign in</span></p> 
                </router-link>
              
            </div>
            <!-- absolue images -->
           
        </section> 
        <div class="img">
            <img class="topcircles" src="../assets/Group538.png" alt="">
            <img class="bottomcircles" src="../assets/group2.png" alt="">
        </div>  
    </div>
    
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        const stored__session = localStorage.getItem("session");
        if(stored__session){
            this.$router.push({name:"Accountoption"});
        }

    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.benefits{
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    align-items: center;
    /* padding-top: 50px; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.benefits__logo img{
    margin-bottom: 30px;
    height: 20px;
}

.benefits__naira{
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

.benefits__naira h3{
    
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: -0.47999998927116394px;
    text-align: center;

}

.benefits__naira p{
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: center;
    color: #929292;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 70px;

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
  
}

.benefits__grid{
    display: grid; 
    grid-auto-rows: 1fr; 
    grid-template-columns: 256px 256px;
    grid-template-rows: 183px 183px;
    gap: 30px 30px; 
    z-index: 1;
   
}

.benefits__grid div img{
    width: 100%;
    height: 100%;
}

.mask{
    z-index: 1;
}

.mask button{
    height: 57px;
    width: 367px;
    border-radius: 4px;
    background: #0EA0BC;
    font-weight: bold;
    color: white;
    font-size: 18px;
    border: none;
    margin-top: 50px;
    cursor: pointer;
}

.mask p{
    text-align: center;
    margin-top: 20px;
    color: #929292;
}

.mask span{
    color: #1F8D54;
    cursor: pointer;
}

.login__link{
    text-decoration: none;
}

@media screen and (max-width:600px){
    .benefits{
        overflow-x: hidden;
        padding-top: 70px;
    }
    html{
        overflow-x: hidden;
        max-width: 100%;
        overflow-x: hidden;
    }
    .topcircles{
        /* display: none; */
        height: 100px;
    }

    .bottomcircles{
        /* display: none; */
        height: 100px;
    }

    .benefits__grid{
        display: flex;
        /* width:100vw; */
        /* width: auto; */
        overflow-x:scroll;
        /* width:300px; */
        /* background:red; */
        grid-template-columns: 0px 0px;
        grid-template-rows: 0px 0px;
        gap: 0px 0px; 
        width:90vw;
        
    }

    .benefits__grid div img{
        width:300px;
        height:200px;
        margin-left: 20px;
    }

    .mask button{
        max-width: 324px;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 3px;
        margin-top: 5px;
    }

/* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.449);
        border-radius: 10px;
    }

/* Handle */
    ::-webkit-scrollbar-thumb {
        background: #0EA0BC;

        border-radius: 10px;
    }

   
}

</style>