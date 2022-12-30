<template>
    <div style="height:100%; width: 100%; background-color: rgba(0,0,0,0.8); position: absolute; left:0; top:0;z-index: 999;" v-if="this.notiLoading">
        <div style=
        "background:white; height:100; width: 500px; 
        position:absolute; 
        left: calc(50% - 250px); top:calc(50% - 50px);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        ">
        <h1>
            알림을 보내는 중입니다
        </h1>
        </div>
    </div>
  <div class="noti-write-page">
    <div style="width: 100%; position: relative; height: fit-content;">
        <button id="noti-btn" @click="dispatchNoti">
            알림 보내기 👉
        </button>
    </div>
    <div class="noti-inputs">
        <div class="left-input">
            <div class="each-input">
                <div>
                    <img src="../assets/icons/bell.svg" alt="">
                    <h2>알림 타입</h2>
                </div>
                <div style="height: 20px; display: flex">
                    <label style="font-size: 15px; margin-right: 30px; font-weight: 600;">인앱 알림</label>
                    <label style="font-size: 15px; margin-right: 20px;"><input type="radio" v-model="this.notiForm.inAppNoti" value="all">모두에게</label>
                    <label style="font-size: 15px; margin-right: 20px;"><input type="radio" v-model="this.notiForm.inAppNoti" value="consent">마케팅 수신동의만</label>
                    <label style="font-size: 15px"><input type="radio" name="inapp-type" v-model="this.notiForm.inAppNoti" value="none">보내지 않음</label>
                </div>
                <div style="width: 80%; height: 1px; background: black; margin: 5px 0;"></div>
                <div style="height: 20px; display: flex">
                    <label style="font-size: 15px; margin-right: 30px; font-weight: 600;">푸시 알림</label>
                    <label style="font-size: 15px; margin-right: 20px;"><input type="radio" v-model="this.notiForm.pushNoti" value="all">모두에게</label>
                    <label style="font-size: 15px; margin-right: 20px"><input type="radio" v-model="this.notiForm.pushNoti" value="consent">마케팅 수신동의만</label>
                    <label style="font-size: 15px"><input type="radio" v-model="this.notiForm.pushNoti" value="none">보내지 않음</label>
                </div>
            </div>
            <div class="each-input">
                <div>
                    <img src="../assets/icons/share.svg" alt="">
                    <h2>딥링크</h2>
                </div>
                <input type="text" style="height: 30px; width:80%" v-model="this.notiForm.deepLink">
            </div>
        </div>
        <div class="right-input">
            <div class="each-input">
                <div>
                    <img src="../assets/icons/Title.svg" alt="">
                    <h2>제목 (*필수)</h2>
                </div>
                <textarea v-model="this.notiForm.title" id="title-input" cols="35" rows="5"></textarea>
            </div>
            <div class="each-input">
                <div>
                    <img src="../assets/icons/message.svg" alt="">
                    <h2>내용 (*필수)</h2>
                </div>
                <textarea v-model="this.notiForm.content" id="title-input" cols="35" rows="5"></textarea>
            </div>
        </div>
    </div>
    <div class="user-input">
        <div style="display: flex; height: 30px; align-items: center; margin-bottom: 10px; margin-left: 30px;">
            <img src="../assets/icons/user-stroked.svg" alt="" style="margin-right: 10px">
            <h2>대상 유저</h2>
        </div>
        <div style="height: 20px; width: fit-content; margin-left: 30px;">
            <label style="font-size: 15px; margin-right: 20px;"><input type="radio" v-model="this.notiForm.userType" value= "all" checked>전체</label>
            <label style="font-size: 15px"><input type="radio" v-model="this.notiForm.userType" value="select">선택</label>
            <span style="font-size: 15px; position: absolute; right:40px" v-if="this.notiForm.userType==='select'">총 {{ this.selectedUserInfoList.length }}명</span>
        </div>
        <div class="select-user-area" v-if="this.notiForm.userType==='select'">
            <div class="selected-user-table-bg">
                <div class="selected-user-table-head">
                    <input type="checkbox" v-model="this.notiUserSelectAll" @change="selectAllNotiUser">
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
                    <div class="selected-user-table-row" v-for="user in selectedUserInfoList" v-bind:key="user">
                        <input type="checkbox" v-model="this.checkedNotiUserList" v-bind:value=user @change="selectNotiUser">
                        <p style="width: calc(15px * 5)">{{user.userId}}</p>
                        <p style="width: calc(15px * 15)">{{ user.nickname }}</p>
                        <p style="width: calc(15px * 2)">{{user.gender}}</p>
                        <p style="width: calc(15px * 10)">{{user.consentToMarketing}}</p>
                        <p style="width: calc(15px * 12)">{{user.createDate}}</p>
                        <p style="width: calc(15px * 12)">{{user.modifiedDate}}</p>
                        <p style="width: calc(15px * 4)">{{user.appVersion}}</p>
                        <p style="width: calc(15px * 7)">{{user.uid}}</p>
                        <p style="width: calc(15px * 7); text-align: left;">{{user.exercises}}</p>
                    </div>
                </div>
            </div>
            <div style="display: flex; justify-content: right; width: calc(100% - 60px); padding: 10px 30px;">
                <p style="margin: 0 30px; font-size: 15px">선택한 유저 {{ this.checkedNotiUserList.length }}명</p>
                <button style="background: var(--ablered); border: 0; height:24px; width:60px; border-radius: 5px; color: white; font-weight:600" @click="removeUser">삭제</button>
            </div>
        </div>
        <div style="height:0px; width: 100%; border-bottom: 2px black dotted; margin: 20px 0;" v-if="this.notiForm.userType==='select'"/>
        <div class="unselect-user-area" v-if="this.notiForm.userType === 'select'">
            <div class="unselect-user-area">
                <div class="user-search-bar">
                    <p style="font-size: 15px; margin:auto 0;">성별</p> 
                    <select v-model="this.userSearchForm.gender" id="search-gender-option" style="width: 50px;">
                        <option value=null>전체</option>
                        <option value="MALE">남성</option>
                        <option value="FEMALE">여성</option>
                    </select>
                    <p style="font-size: 15px; margin:auto 0;">마케팅 수신동의</p> 
                    <select v-model="this.userSearchForm.consentToMarketing" id="search-gender-option" style="width: 50px;">
                        <option value=null>전체</option>
                        <option value="true">동의</option>
                        <option value="false">거부</option>
                    </select>
                    <div class="multiselect">
                        <div class="selectBox" @click="showCheckboxes()">
                        <select>
                            <option v-if="this.userSearchForm.exercises.length === 0">운동 종목 전체</option>
                            <option v-if="this.userSearchForm.exercises.length !== 0">{{ this.userSearchForm.exercises.length }}개 종목 선택됨</option>
                        </select>
                        <div class="overSelect"></div>
                        </div>
                        <div id="checkboxes" v-if="exerciseDropdown">
                        <label for="weight">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="WEIGHT" id="weight"/>웨이트 트레이닝</label>
                        <label for="pilates">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="PILATES" id="pilates"/>필라테스</label>
                        <label for="yoga">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="YOGA" id="yoga"/>요가</label>
                        <label for="hometraining">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="HOMETRAINING" id="hometraining"/>홈 트레이닝</label>
                        <label for="crossfit">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="CROSSFIT" id="crossfit"/>크로스핏</label>
                        <label for="running">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="RUNNING" id="running"/>러닝</label>
                        <label for="tennis">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="TENNIS" id="tennis"/>테니스</label>
                        <label for="cycle">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="CYCLE" id="cycle"/>사이클</label>
                        <label for="climbing">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="CLIMBING" id="climbing"/>클라이밍</label>
                        <label for="golf">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="GOLF" id="golf"/>골프</label>
                        <label for="hiking">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="HIKING" id="hiking"/>등산</label>
                        <label for="soccer">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="SOCCER" id="soccer"/>축구</label>
                        <label for="swimming">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="SWIMMING" id="swimming"/>수영</label>
                        <label for="badminton">
                            <input type="checkbox" v-model="this.userSearchForm.exercises" value="BADMINTON" id="badminton"/>배드민턴</label>
                        </div>
                    </div>
                    <button @click="searchUser">검색</button>
                    <select v-model="this.userSearchForm.keywordType" id="search-option" style="width: 70px;">
                        <option value="userId">유저 ID</option>
                        <option value="nickname">닉네임</option>
                        <option value="appVersion">앱 버전</option>
                        <option value="uid">UID</option>
                    </select>
                    <input type="text" v-model="this.userSearchForm.keyword" id="search-word" @keyup.enter="searchUser">
                </div>
                <div>
                    <span style="font-size: 15px; position: absolute; right:40px;">총 {{ this.searchUserInfoList.length }}명</span>
                </div>
                <div class="unselected-user-table-bg">
                    <div class="unselected-user-table-head">
                        <input type="checkbox" v-model="this.searchUserSelectAll" @change="selectAllSearchedUser()">
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
                        <div class="unselected-user-table-row" v-for="user in searchUserInfoList" v-bind:key="user">
                            <input type="checkbox" v-model="this.checkedSearchedUserList" v-bind:value = user @change="selectSearchedUser">
                            <p style="width: calc(15px * 5)">{{user.userId}}</p>
                            <p style="width: calc(15px * 15)">{{ user.nickname }}</p>
                            <p style="width: calc(15px * 2)">{{user.gender}}</p>
                            <p style="width: calc(15px * 10)">{{user.consentToMarketing}}</p>
                            <p style="width: calc(15px * 12)">{{user.createDate}}</p>
                            <p style="width: calc(15px * 12)">{{user.modifiedDate}}</p>
                            <p style="width: calc(15px * 4)">{{user.appVersion}}</p>
                            <p style="width: calc(15px * 7)">{{user.uid}}</p>
                            <p style="width: calc(15px * 7); text-align: left; word-break: keep-all;">{{user.exercises}}</p>
                        </div>
                    </div>
                    <div v-if = "searchUserLoading" style="position: absolute; left: calc(50% - 100px); top: calc(50% - 25px);width: 200px; height: 50px; font-size: 15px; font-weight: 600">
                        유저 정보를 불러오는 중입니다
                    </div>
                    <div v-if = "!searchUserLoading && this.searchUserInfoList.length === 0" style="position: absolute; left: calc(50% - 100px); top: calc(50% - 25px);width: 200px; height: 50px; font-size: 15px; font-weight: 600">
                        검색 결과가 없습니다
                    </div>
                </div>
            <div style="display: flex; justify-content: right; width: calc(100% - 60px); padding: 10px 30px;">
                <p style="margin: 0 30px; font-size: 15px">선택한 유저 {{ checkedSearchedUserList.length }}명</p>
                <button style="background: var(--ableblue); border: 0; height:24px; width:60px; border-radius: 5px; color: white; font-weight:600" @click="addUser">추가</button>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { apiInstance } from '@/api';
export default {
    name: "NotiWritePage",
    data() {
        return {
            exerciseDropdown: false,
            notiForm : {
                inAppNoti: "none",
                pushNoti: "none",
                deepLink: null,
                title: null,
                content: null,
                userType:"all",
                userList:[]
            },
            userSearchForm : {
                gender : null,
                consentToMarketing: null,
                exercises : [],
                keywordType : "nickname",
                keyword : null
            },
            //테이블에 있는 전체 유저
            selectedUserInfoList:[],
            searchUserInfoList:[],
            // 검색용
            searchUserLoading: false,
            searchUserRawList: [],
            // (하단)체크 된 유저
            checkedSearchedUserList: [],
            searchUserSelectAll: false,
            // (상단)체크 된 유저
            checkedNotiUserList:[],
            notiUserSelectAll: false,
            // 노티 로딩
            notiLoading: false
        }
    },
    methods: {
        showCheckboxes(){
            if(this.exerciseDropdown) this.exerciseDropdown = false;
            else this.exerciseDropdown = true;
        },
        sendNotiForm(){
            console.log(this.notiForm)
            alert(this.notiForm)
        },
        async searchUser(){
            var params = {
                gender : this.userSearchForm.gender,
                marketingConsent : this.userSearchForm.consentToMarketing,
                exercises : this.userSearchForm.exercises,
                userId : null,
                nickname : null,
                appVersion : null,
                uid : null
            }
            switch(this.userSearchForm.keywordType){
                case 'userId' : 
                    params.userId = this.userSearchForm.keyword
                    break
                case 'nickname' :
                    params.nickname = this.userSearchForm.keyword
                    break;
                case 'appVersion' :
                    params.appVersion = this.userSearchForm.keyword
                    break;
                case 'uid' :
                    params.uid = this.userSearchForm.keyword
                    break;
            }
            this.searchUserInfoList = []
            this.searchUserLoading = true
            const response = await apiInstance.post('/user/search-noti', params)
            this.searchUserLoading = false
            console.log(response)
            this.searchUserRawList = response.data.dataList

            this.searchUserRawList.forEach(rawUser =>{
                if(this.selectedUserInfoList.findIndex(selectedUser => rawUser.userId === selectedUser.userId) < 0){
                    this.searchUserInfoList.push(rawUser)   
                }
            })
        },
        selectAllSearchedUser(){
            if(this.searchUserSelectAll){
                this.searchUserInfoList.forEach(user =>{
                    this.checkedSearchedUserList.push(user)
                })
            }
            else{
                this.checkedSearchedUserList = []
            }
        },
        selectSearchedUser(){
            if(this.checkedSearchedUserList.length ===this.searchUserInfoList.length){
                this.searchUserSelectAll = true
            }
            else{
                this.searchUserSelectAll = false
            }
        },
        addUser(){
            var i = 0;
            while(i < this.checkedSearchedUserList.length){
                let checkedUser = this.checkedSearchedUserList[i]
                let idx = this.searchUserInfoList.indexOf(checkedUser);
                console.log(this.checkedSearchedUserList)
                this.selectedUserInfoList.push(checkedUser)
                this.searchUserInfoList.splice(idx, 1)
                i++
            }
            this.checkedSearchedUserList = []
            this.searchUserSelectAll =false;
        },
        removeUser(){
            this.checkedNotiUserList.forEach(user =>{
                let idx = this.selectedUserInfoList.indexOf(user)
                this.selectedUserInfoList.splice(idx,1)
                if(this.searchUserRawList.findIndex(rawUser => rawUser.userId === user.userId) > 0){
                    this.searchUserInfoList.unshift(user)
                }
            })
            this.checkedNotiUserList = []
            this.notiUserSelectAll = false
        },
        selectAllNotiUser(){
            if(this.notiUserSelectAll){
                this.selectedUserInfoList.forEach(user =>{
                    this.checkedNotiUserList.push(user)
                })
            }
            else{
                this.checkedNotiUserList = []
            }
        },
        selectNotiUser(){
            if(this.checkedNotiUserList.length ===this.selectedUserInfoList.length){
                this.notiUserSelectAll = true
            }
            else{
                this.notiUserSelectAll = false
            }
        },
        async dispatchNoti(){
            if(this.notiForm.inAppNoti === 'none' && this.notiForm.pushNoti === 'none'){
                alert('알림 타입을 확인해주세요\n(인앱 알림, 푸시 알림 중 1개는 선택되어야 합니다)')
                return
            }
            if(this.notiForm.title === null){
                alert('제목을 입력해주세요')
                return
            }
            if(this.notiForm.content === null){
                alert('내용을 입력해주세요')
                return
            }


            let confirmMessage = "다음과 같이 알림을 발송합니다\n\n"
            switch(this.notiForm.inAppNoti){
                case 'all':
                    confirmMessage += "인앱 알림 : 전체\n"
                    break;
                case 'consent':
                    confirmMessage += "인앱 알림 : 마케팅 수신동의만\n"
                    break;
                case 'none':
                    confirmMessage += "인앱 알림 : 보내지 않음\n"
                    break;
            }
            switch(this.notiForm.pushNoti){
                case 'all':
                    confirmMessage += "푸시 알림 : 전체\n"
                    break;
                case 'consent':
                    confirmMessage += "푸시 알림 : 마케팅 수신동의만\n"
                    break;
                case 'none':
                    confirmMessage += "푸시 알림 : 보내지 않음\n"
                    break;
            }
            if(this.notiForm.userType === "all"){
                confirmMessage += ("대상 유저 : 전체\n")
            }
            else{
                confirmMessage += ("대상 유저 : 총 " + this.selectedUserInfoList.length + "명\n")
            }
            confirmMessage += ("제목 : " + this.notiForm.title + "\n")
            confirmMessage += ("내용 : " + this.notiForm.content + "\n")
            confirmMessage += ("딥링크 : " + this.notiForm.deepLink + "\n")
            if(confirm(confirmMessage)){
                this.selectedUserInfoList.forEach(u =>{
                    this.notiForm.userList.push(u.userId)
                })
                this.notiLoading = true;
                let response = await apiInstance.post('/noti/dispatch', this.notiForm)
                this.notiLoading = false
                console.log(response)
                if(response.status === 200){
                    alert('알림을 성공적으로 발송하였습니다')
                }
                else{
                    alert('알림을 발송하지 못하였습니다\n콘솔을 통해 에러메시지를 확인해주세요')
                }
                this.notiForm.userList = []
                this.notiForm.title = null;
                this.notiForm.content = null;
                this.notiForm.inAppNoti = "none"
                this.notiForm.pushNoti = "none"
            }
            
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
    position: relative;
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
    align-items: center;
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
  font-size: 14px;
}

#checkboxes label:hover {
  background-color: #1e90ff;
}

</style>