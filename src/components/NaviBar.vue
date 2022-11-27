<template>
    <div class="background">
        <div class="header" @click="this.$router.push('/user')">
            <img src="../assets/ablebody-admin-logo.svg" alt="애블바디 로고" class="logo">
        </div>
        <div class="menu">
            <router-link to='/user'>
                <img src="../assets/icons/person-white.svg" alt="">
                유저 관리
            </router-link>
            <router-link to='/qna'>
                <img src="../assets/icons/qna-white.svg" alt="">
                운동생활
            </router-link>
            <router-link to='/report'>
                <img src="../assets/icons/report-white.svg" alt="">
                신고하기
            </router-link>
            <router-link to='/suggestion'>
                <img src="../assets/icons/suggestion-white.svg" alt="">
                제안하기
            </router-link>
            <router-link to='/noti'>
                <img src="../assets/icons/noti-white.svg">
                푸시 및 알림
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
    name: 'navi-bar',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style>
    @import url(../assets/colors.css);
    .background{
        position: absolute;
        width: 15%;
        height: 100%;
        left: 0px;
        top: 0px;

        /* primary/ableBlue */

        background: #0069FF;
        border-radius: 0px 50px 50px 0px;
    }
    .header{
        position: absolute;
        width: 100%;
        height: 6.5%;
        left: 0px;
        top: 48px;
        border-bottom: solid 1px #FFFFFF
    }
    .logo{
        position: absolute;
        left: 11.27%;
        right: 13.66%;
        top: 4.89%;
        bottom: 92.16%;
        width: 75%;
    }
    .menu{
        width: 100%;
        height: wrap;

        position: absolute;
        left: 0px;
        top:15.3%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    .menu-element{
        width: 100%;
        height: 60px;

        display: flex;
        flex-direction: row;
        align-items: center;

        color: var(--white);
        font-size: 24px;
    }
    .menu>a{
        width: 100%;
        height: 60px;

        display: flex;
        flex-direction: row;
        align-items: center;

        color: var(--white);
        font-size: 2.4rem;
        text-decoration: none;
    }
    .menu> a > img{
        width: 40px;
        height: 40px;
        margin-left: 7%;
        margin-right: 10%;
    }
</style>