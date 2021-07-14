<template>
    <div>
        <center class="main">
            <img src="../assets/sterlingLogo.png" alt="">
            <h3 class="main__naira">Every naira counts</h3>
            <p class="main__para">Start saving now to get the best benefits from your sterling account</p>
            <h3 class="welcome">Welcome {{email}}</h3>
            <div class="account">
                <div class="account__navigation">
                    <div @click="toggleCurrentBox" class="savings">
                        <p :class="savings__paragraph">Savings account</p>
                    </div>
                    <div @click="toggleSavingsBox" class="current">
                        <p :class="current__paragraph">Current account</p>
                    </div>
                </div>
                <div class="savings__current__box">
                    <div :class="currentActive ? ['current__box__off','current__box'] : 'current__box'  ">
                        <savingsOption title='Instant access to debit card' />
                        <savingsOption title='Global bank transfer' />
                        <savingsOption title='ATM withdrwals' />
                        <savingsOption title='Attractive internet rates' />
                        <savingsOption title='No opening account balance' />
                        <Button />
                    </div>
                    <div :class="savingActive ? ['savings__box__off','savings__box'] : 'savings__box' ">
                        <savingsOption title='Instant access to debit card' />
                        <savingsOption title='Global bank transfer' />
                        <savingsOption title='ATM withdrwals' />
                        <savingsOption title='Attractive internet rates' />
                        <savingsOption title='No opening account balance' />
                        <Button />
                    </div>
                </div>
            </div> 
        </center>
        <!-- <img class="topcircles" src="../assets/Group538.png" alt=""> -->
        <!-- <img class="bottomcircles" src="../assets/group2.png" alt=""> -->
    </div>

</template>

<script>
import savingsOption from './savingsOption.vue'
import  Button from '../utils/button.vue'
export default {
    components:{
        savingsOption,
        Button
    },
    name:"Accountoption",
    data(){
        return{
            savingActive:true,
            currentActive:false,
            savings__paragraph:"brown",
            current__paragraph:"current__brown",
            email:''
        }
    },
    methods:{
        toggleSavingsBox(){
            this.currentActive = true
            this.savingActive = false
            this.current__paragraph = 'greenish'
            this.savings__paragraph = 'brown'
          
        },
        toggleCurrentBox(){
            this.savingActive = true
            this.currentActive = false
            this.savings__paragraph = 'greenish'
            this.current__paragraph = 'brown'
        }
    },
    mounted(){
        const stored__session = localStorage.getItem("session");

        if(!stored__session){
            this.$router.push({name:"Landing"});
        }else{
            const parsed__stored__session = JSON.parse(stored__session);
            this.email = parsed__stored__session.email
            
        }
    }
}
</script>

<style scoped>
*{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.main{
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 1;
}

.main img{
    z-index: 1;
}

.main__naira{
    font-size: 20px;
    font-weight: 500;
    z-index:1;
    margin-top: 20px;
}

.main__para{
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: center;
    color: #929292;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 30px;
    z-index: 1;
}

.welcome{
    margin-bottom: 20px;
}
.account{
    /* height: 400px; */
    max-width: 422px;
    background: #edf4f8;
    z-index: 1;
}

.account__navigation{
    height: 56px;
    display: flex;

}

.savings{
    background:#e0f4f8;
    
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding-left: 30px;
}

.savings__active{
    background:#f1fafc ;
}

.savings p{
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0px;
    text-align: left;
   
   
    
}



.brown{
    color: #00263B86;
}

.greenish{
    color:#009FBB;
;
}

.current{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width:50%;
    cursor: pointer;
    padding-right: 30px;
    background: #e0f4f8;
}

.current p{
    /* color: #00263B86; */
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0px;
    text-align: right;
    float: right;

}

.current__brown{
    color:#00263B86;
}

.current__greenish{
    color:#009FBB;
}

.savings__current__box{
    position: relative;
    width: 100%;
    padding-top:20px;
    background: #e0f4f8;
   
}

.savings__box{
    position: absolute;
    width: 100%;
    /* background: #f0f4f8; */
}

.savings__box__off{
    display: none;
}

.current__box{
    position:absolute;
    width: 100%;
    /* background: #f0f4f8; */
}

.current__box__off{
    display: none;
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
</style>