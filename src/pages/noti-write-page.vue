<template>
  <div class="noti-write-page">
    <div style="width: 100%; position: relative; height: fit-content;">
        <button id="noti-btn">
            알림 보내기 👉
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
        <div style="display: flex; height: 30px; align-items: center; margin-bottom: 10px; margin-left: 30px;">
            <img src="../assets/icons/user-stroked.svg" alt="" style="margin-right: 10px">
            <h2>대상 유저</h2>
        </div>
        <div style="height: 20px; width: fit-content; margin-left: 30px;">
            <label style="font-size: 15px; margin-right: 20px;"><input type="radio" name="user-type" checked>전체</label>
            <label style="font-size: 15px"><input type="radio" name="user-type">선택</label>
            <span style="font-size: 15px; position: absolute; right:40px">총 100명</span>
        </div>
        <div class="select-user-area">
            <div class="selected-user-table-bg">
                <div class="selected-user-table-head">
                    <input type="checkbox" name="selected-user-total-checkbox">
                    <p style="width: calc(15px * 5)">유저 ID</p>
                    <p style="width: calc(15px * 15)">닉네임</p>
                    <p style="width: calc(15px * 2)">성별</p>
                    <p style="width: calc(15px * 10)">마케팅 수신 동의</p>
                    <p style="width: calc(15px * 12)">생성일</p>
                    <p style="width: calc(15px * 12)">수정일</p>
                    <p style="width: calc(15px * 4)">앱 버전</p>
                    <p style="width: calc(15px * 7)">UID</p>
                    <p style="width: calc(15px * 7); text-align: left;">하는 운동</p>
                </div>
                <div class="line"/>
                <div class="selected-user-table-content">
                    <div class="selected-user-table-row">
                        <input type="checkbox" name="selected-user-total-checkbox">
                        <p style="width: calc(15px * 5)">9999</p>
                        <p style="width: calc(15px * 15)">hellohellohellohello</p>
                        <p style="width: calc(15px * 2)">남성</p>
                        <p style="width: calc(15px * 10)">동의</p>
                        <p style="width: calc(15px * 12)">2022-12-25T16:32:33</p>
                        <p style="width: calc(15px * 12)">2022-12-25T16:32:33</p>
                        <p style="width: calc(15px * 4)">1.4.0</p>
                        <p style="width: calc(15px * 7)">9999999</p>
                        <p style="width: calc(15px * 7); text-align: left;">웨이트</p>
                    </div>
                </div>
            </div>
            <div style="display: flex; justify-content: right; width: calc(100% - 60px); padding: 10px 30px;">
                <p style="margin: 0 30px; font-size: 15px">선택한 유저 10명</p>
                <button style="background: var(--ablered); border: 0; height:24px; width:60px; border-radius: 5px; color: white; font-weight:600">삭제</button>
            </div>
        </div>
        <div style="height:0px; width: 100%; border-bottom: 2px black dotted; margin: 20px 0;"/>
        <div class="unselect-user-area">
            <div class="unselect-user-area">
                <div class="user-search-bar">
                    <p>성별</p> 
                    <select name="search-gender-option" id="search-gender-option" style="width: 50px;">
                        <option value="all">전체</option>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                    </select>
                    <p>마케팅 수신동의</p> 
                    <select name="search-marketing-option" id="search-gender-option" style="width: 50px;">
                        <option value="all">전체</option>
                        <option value="consent">동의</option>
                        <option value="refusal">거부</option>
                    </select>
                    <div class="multiselect">
                        <div class="selectBox" @click="showCheckboxes()">
                        <select>
                            <option>운동 종목 전체</option>
                        </select>
                        <div class="overSelect"></div>
                        </div>
                        <div id="checkboxes" v-if="exerciseDropdown">
                        <label for="one">
                            <input type="checkbox" id="one" />First checkbox</label>
                        <label for="two">
                            <input type="checkbox" id="two" />Second checkbox</label>
                        <label for="three">
                            <input type="checkbox" id="three" />Third checkbox</label>
                        </div>
                    </div>
                    <select name="search-option" id="search-option" style="width: 70px;">
                        <option value="all">유저 ID</option>
                        <option value="consent">닉네임</option>
                        <option value="refusal">생성일</option>
                        <option value="refusal">수정일</option>
                        <option value="refusal">앱 버전</option>
                        <option value="refusal">UID</option>
                    </select>
                    <input type="text" name="search-word" id="search-word">
                    <button>검색</button>
                </div>
                <div>
                    <span style="font-size: 15px; position: absolute; right:40px">총 100명</span>
                </div>
                <div class="unselected-user-table-bg">
                    <div class="unselected-user-table-head">
                        <input type="checkbox" name="unselected-user-total-checkbox">
                        <p style="width: calc(15px * 5)">유저 ID</p>
                        <p style="width: calc(15px * 15)">닉네임</p>
                        <p style="width: calc(15px * 2)">성별</p>
                        <p style="width: calc(15px * 10)">마케팅 수신 동의</p>
                        <p style="width: calc(15px * 12)">생성일</p>
                        <p style="width: calc(15px * 12)">수정일</p>
                        <p style="width: calc(15px * 4)">앱 버전</p>
                        <p style="width: calc(15px * 7)">UID</p>
                        <p style="width: calc(15px * 7); text-align: left;">하는 운동</p>
                    </div>
                    <div class="line"/>
                    <div class="unselected-user-table-content">
                        <div class="unselected-user-table-row">
                            <input type="checkbox" name="unselected-user-total-checkbox">
                            <p style="width: calc(15px * 5)">9999</p>
                            <p style="width: calc(15px * 15)">hellohellohellohello</p>
                            <p style="width: calc(15px * 2)">남성</p>
                            <p style="width: calc(15px * 10)">동의</p>
                            <p style="width: calc(15px * 12)">2022-12-25T16:32:33</p>
                            <p style="width: calc(15px * 12)">2022-12-25T16:32:33</p>
                            <p style="width: calc(15px * 4)">1.4.0</p>
                            <p style="width: calc(15px * 7)">9999999</p>
                            <p style="width: calc(15px * 7); text-align: left;">웨이트</p>
                        </div>
                    </div>
                </div>
            <div style="display: flex; justify-content: right; width: calc(100% - 60px); padding: 10px 30px;">
                <p style="margin: 0 30px; font-size: 15px">선택한 유저 10명</p>
                <button style="background: var(--ableblue); border: 0; height:24px; width:60px; border-radius: 5px; color: white; font-weight:600">추가</button>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "NotiWritePage",
    data() {
        return {
            exerciseDropdown: false,
        }
    },
    methods: {
        showCheckboxes(){
            console.log(this.exerciseDropdown)
            if(this.exerciseDropdown) this.exerciseDropdown = false;
            else this.exerciseDropdown = true;
        }
    },
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
    height: fit-content;
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
    width: 100%;
    height: fit-content;
    padding: 0;
    margin-top: 40px;
}
.select-user-area{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.selected-user-table-bg{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    background: var(--light-shaded);
    width: calc(100% - 60px);
    height: fit-content;
    padding: 10px;

    margin-top: 10px;
    border-radius: 10px;

    overflow: auto;
}
.selected-user-table-head{
    width: fit-content;
    height: 30px;
    display: flex;
    align-items: center;
}
.selected-user-table-head > p{
    font-size: 15px;
    vertical-align: baseline;
    height: fit-content;
    margin: 0 10px;
    font-weight: 700;
}
.line{
    width: 100%;
    height: 2px;
    margin: 3px 0;
    background: black;
}
.selected-user-table-content{
    width: fit-content;
    min-width: 100%;
    height: 250px;
    overflow: auto;
}
.selected-user-table-row{
    display: flex;
    width: 100%;
    height: fit-content;
    border-bottom: black solid 1px;
}
.selected-user-table-row > p{
    font-size: 15px;
    vertical-align: baseline;
    height: fit-content;
    margin: 0 10px;
}
.unselect-user-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.unselected-user-table-bg{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    width: calc(100% - 60px);
    height: fit-content;
    padding: 10px;

    margin-top: 10px;
    border-radius: 10px;

    overflow: auto;
}
.unselected-user-table-head{
    width: fit-content;
    height: 30px;
    display: flex;
    align-items: center;
}
.unselected-user-table-head > p{
    font-size: 15px;
    vertical-align: baseline;
    height: fit-content;
    margin: 0 10px;
    font-weight: 700;
}
.unselected-user-table-content{
    width: fit-content;
    min-width: 100%;
    height: 250px;
    overflow: auto;
}
.unselected-user-table-row{
    display: flex;
    width: 100%;
    height: fit-content;
    border-bottom: black solid 1px;
}
.unselected-user-table-row > p{
    font-size: 15px;
    vertical-align: baseline;
    height: fit-content;
    margin: 0 10px;
}
.user-search-bar{
    height: 30px;
    width: 100%;
    display: flex;
}
.multiselect {
  width: 200px;
  height: 100%;
}

.selectBox {
  position: relative;
  height: 100%;
}

.selectBox select {
  width: 100%;
  height: 100%;
  font-weight: bold;
}

.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#checkboxes {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  border: 1px #dadada solid;
  background: white;
}

#checkboxes label {
  display: block;
  background: white;
  width: 100%;
  z-index: 100;
  text-align: start;
}

#checkboxes label:hover {
  background-color: #1e90ff;
}

</style>