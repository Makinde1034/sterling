<template>
    <div>
        <section>
            <div class="logo">
                <img src="../assets/sterlingLogo.png" alt="">
            </div>
            <h3>Successful verification</h3>
            <p class="success__para">Your account has been verified successflly, please  continue to fill in the subsequent account opening forms.</p>
            <router-link to="/options">
                <button>Continue</button>
            </router-link>
        </section>
        <img class="topcircles" src="../assets/Group538.png" alt="">
        <img class="bottomcircles" src="../assets/group2.png" alt="">
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
section{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: #f2f2f2; */

}

section h3{
    font-weight: 500;
    margin-top: 10px;
}

section p{
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: center;
    color: #929292;
    margin-top: 10px;
    line-height: 30px;


}

section button{   
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

.success__para{
    width: 30%;
    text-align: center;
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

@media screen and (max-width:600px) {
    .success__para{
        width: 100%;
    }

    .topcircles{
        height: 100px;
    }

    .bottomcircles{
        height: 100px;
    }

    section button{
        width: 324px;
    }
}

</style>