<template>
    <div class="main-wrapper">
        <router-link to="/noti/write">
            <button id="noti-btn">
                📝 알림 작성하기
            </button>
        </router-link>
    </div>
</template>

<script>
export default{
    name: "NotiPage"
}
</script>

<style>
.main-wrapper{
    position: relative;
    
}
#noti-btn{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 5px 10px;
    gap: 10px;

    position: absolute;
    width: 180px;
    height: 40px;
    right: 20px;
    top: 0;

    /* primary/ableBlue */

    background: #0069FF;
    border-radius: 10px;
    
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: white;
    border: 0;
}
</style>