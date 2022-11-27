<template>
  <div class="noti-write-page">
    <div style="width: 100%; position: relative; height: fit-content;">
        <button id="noti-btn">
            알림 보내기
        </button>
    </div>
    <div class="noti-inputs">
        <div class="left-input">
            <div class="each-input">
                <div>
                    <img src="../assets/icons/clock.svg" alt="">
                    <h2>발송 시간</h2>
                </div>
                <div style="display: flex; gap: 20px;">
                    <select name="time-option" id="sending-type" style="width: 135px;">
                        <option value="instant">즉시</option>
                        <option value="scheduled">예약</option>
                    </select>
                    <input type="date" style="width: 130px">
                    <input type="time" style="width: 130px">
                </div>
            </div>
            <div class="each-input">
                <div>
                    <img src="../assets/icons/bell.svg" alt="">
                    <h2>알림 타입</h2>
                </div>
                <div style="height: 20px; display: flex">
                    <label style="font-size: 15px; margin-right: 30px; font-weight: 600;">인앱 알림</label>
                    <label style="font-size: 15px; margin-right: 20px;"><input type="radio" name="inapp-type">모두에게</label>
                    <label style="font-size: 15px"><input type="radio" name="inapp-type">마케팅 수신동의만</label>
                </div>
                <div style="width: 80%; height: 1px; background: black; margin: 5px 0;"></div>
                <div style="height: 20px; display: flex">
                    <label style="font-size: 15px; margin-right: 30px; font-weight: 600;">푸시 알림</label>
                    <label style="font-size: 15px; margin-right: 20px;"><input type="radio" name="push-type">모두에게</label>
                    <label style="font-size: 15px"><input type="radio" name="push-type">마케팅 수신동의만</label>
                </div>
            </div>
            <div class="each-input">
                <div>
                    <img src="../assets/icons/share.svg" alt="">
                    <h2>딥링크</h2>
                </div>
                <input type="text" style="height: 30px; width:80%">
            </div>
        </div>
        <div class="right-input">
            <div class="each-input">
                <div>
                    <img src="../assets/icons/Title.svg" alt="">
                    <h2>제목</h2>
                </div>
                <textarea name="title" id="title-input" cols="35" rows="5"></textarea>
            </div>
            <div class="each-input">
                <div>
                    <img src="../assets/icons/message.svg" alt="">
                    <h2>내용</h2>
                </div>
                <textarea name="body" id="title-input" cols="35" rows="5"></textarea>
            </div>
        </div>
    </div>
    <div class="user-input">
        <div style="display: flex; height: 30px; align-items: center; margin-bottom: 10px;">
            <img src="../assets/icons/user-stroked.svg" alt="" style="margin-right: 10px">
            <h2>대상 유저</h2>
        </div>
        <div style="height: 20px; width: fit-content;">
            <label style="font-size: 15px; margin-right: 20px;"><input type="radio" name="user-type" checked>전체</label>
            <label style="font-size: 15px"><input type="radio" name="user-type">선택</label>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "NotiWritePage"
}
</script>

<style>
.noti-write-page{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
#noti-btn{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 10px;
    gap: 10px;

    position: relative;
    width: 200px;
    height: 30px;
    left: 80%;
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
.noti-inputs{
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 50%;
}
.noti-inputs > div{
    height: 100%;
    width: 50%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.each-input{
    display: flex;
    flex-direction: column;
    height: auto;
}
.each-input > :nth-child(1){
    display: flex;
}
.each-input > :nth-child(1) > img{
    margin-right: 10px;
}
.each-input > textarea{
    height: 70px;
    overflow-y: auto;
}
.user-input{
    display: flex;
    flex-direction: column;
    width: 100%px;
    height: 100px;
    padding: 0 30px;
}
</style>