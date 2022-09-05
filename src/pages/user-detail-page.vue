<template>
    <!--모달 창-->
    <div class="modal-background" v-show="modalShown">
        <div class="userDetail-modal-main" v-show="modalShown">
            <h3>닉네임</h3>
            <input type="text" v-model="nickname">

            <h3>이름</h3>
            <input type="text" v-model="name">

            <h3>직업</h3>
            <input type="text" v-model="job">

            <h3>성별</h3>
            <div class="radio-btns" style="display: flex; gap: 10px;">
                <button class="male-btn" @click="setGender('MALE')">남자</button>
                <button class="female-btn" @click="setGender('FEMALE')">여자</button>
            </div>

            <h3>키</h3>
            <input type="text" v-model="height">

            <h3>몸무게</h3>
            <input type="text" v-model="weight">

            <h3>UID</h3>
            <input type="text" v-model="uid">

            <h3>핸드폰</h3>
            <input type="text" v-model="phone">

            <h3>마케팅 수신여부</h3>
            <div class="radio-btns">
                <button class="agree-btn" @click="setMarketingConsent(true)">동의</button>
                <button class="disagree-btn" @click="setMarketingConsent(false)">거부</button>
            </div>
            
            <h3>소개글</h3>
            <textarea  v-model="introduction"></textarea>

            <div class="modal-btns">
                <button @click="modalShown = false" style="color: var(--ableblue)">취소</button>
                <button @click="modalShown = false" style="background: var(--ableblue); color: var(--white);">확인</button>
            </div>
        </div>
    </div>

    <div class="page-user-detail" v-if="user">
        <div class="user-header">
            <div class="header-buttons">
                <button style="background: var(--small-text-grey)" @click="modalAppear();">수정</button>
                <button style="background: var(--ableblue)">루틴으로 가기</button>
            </div>
            <img :src="user.profileUrl" alt="유저 프로필 사진">
            <div class="user-header-profile">
                <h1>{{user.nickname}}</h1>
                <div class="name-label">
                    <label>이름 : </label><label>{{user.name}}</label>
                </div>
                <div class="job-label">
                    <label>직업 : </label><label>{{user.job}}</label>
                </div>
                <div class="user-tags">
                    <p>{{user.gender}}</p>
                    <p v-if="height">{{user.height + ' cm'}}</p>
                    <p v-if="weight">{{user.weight + ' kg'}}</p>
                </div>
            </div>
        </div>
        <div class="user-info">
            <div class="detail-content">
                <strong>UID</strong>
                <label>{{'#'+user.uid}}</label>
            </div>
            <div class="detail-content">
                <strong>핸드폰</strong>
                <label>{{user.phone}}</label>
            </div>
            <div class="detail-content">
                <strong>가입일</strong>
                <label>{{user.createDate}}</label>
            </div>
            <div class="detail-content">
                <strong>마케팅 수신동의 여부</strong>
                <strong>켜짐</strong>
            </div>
            <div class="detail-content">
                <strong>소개글</strong>
            </div>
            <div class="introduction">
                {{user.introduction}}
            </div>
        </div>
    </div>
</template>

<script>
import { apiInstance } from '@/api/index'
export default {
    data() {
        return {
            user:null ,
            modalShown: false,

            // 수정 모달 유저 정보
            nickname: null,
            name: null,
            job: null,
            gender: null,
            height: null,
            weight: null,
            uid: null,
            phone: null,
            consent: null,
            introduction: null,
        }
    },
    methods: {
        modalAppear(){
            // 모달 뷰
            this.modalShown = true;

            // 모달 데이터 바인딩
            this.nickname = this.user.nickname;
            this.name = this.user.name;
            this.job = this.user.job;
            this.gender = this.user.gender;
            this.height = this.user.height;
            this.weight = this.user.weight;
            this.uid = this.user.uid;
            this.phone = this.user.phone;
            this.consent = this.user.marketingConsent;
            this.introduction = this.user.introduction;

            // UI 설정
            this.setModalGenderBtnHightlight(this.gender);
            this.setModalConsentBtnHightlight(this.consent)
        },
        setModalGenderBtnHightlight(gender){
            const modalMaleBtn = document.querySelector(".male-btn");
            const modalFemaleBtn = document.querySelector(".female-btn");
            
            if(gender == "MALE"){
                modalMaleBtn.classList.add('btn-highlight');
                modalFemaleBtn.classList.remove('btn-highlight');
            }
            else if(gender == "FEMALE"){
                modalFemaleBtn.classList.add('btn-highlight');
                modalMaleBtn.classList.remove('btn-highlight');
            }
        },
        setModalConsentBtnHightlight(isAgreed){
            const modalAgreeBtn = document.querySelector(".agree-btn");
            const modalDisagreeBtn = document.querySelector(".disagree-btn");
            
            if(isAgreed){
                modalAgreeBtn.classList.add('btn-highlight');
                modalDisagreeBtn.classList.remove('btn-highlight-red');
            }
            else{
                modalDisagreeBtn.classList.add('btn-highlight-red');
                modalAgreeBtn.classList.remove('btn-highlight');
            }
        },
        setGender(gender){
            this.gender = gender;
            this.setModalGenderBtnHightlight(this.gender);
        },
        setMarketingConsent(isAgreed){
            this.consent = isAgreed;
            this.setModalConsentBtnHightlight(this.consent);
        },
        async fetchUser(uid){
            const response = await apiInstance.get('/user/detail',{
                params:{
                    uid: uid
                }
            })
            const userData = response.data.data;
            this.user = userData;
            console.log(this.user);
        }
    },
    created() {
        this.fetchUser(this.$route.params.uid)
    },
}
</script>

<style>
@import url(@/assets/colors.css);
.page-user-detail{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}
.header-buttons{
    position: absolute;
    top: 0;
    right: 2%;
    
    display: flex;
    gap: 15px;
}
.header-buttons > button{
    font-size: 2rem;
    color: var(--white);
    border: 0;
    border-radius: 10px;
    padding: 5px 10px;
}
.user-header{
    width: 98%;
    height: 25%;
    position: relative;
    display: flex;
    justify-content: baseline;
    gap: 20px;
}
.user-header > img{
    min-height: 100px;
    max-height: 200px;
}
.user-header-profile{
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 2px;
}
.user-header-profile > h1{
    font-size: 3rem;
    margin: 0
}
.user-header-profile > div > label{
    font-size: 2.4rem;
}
.user-tags{
    display: flex;
    gap: 5px;
}
.user-tags > p{
    font-size: 2.0rem;
    background: var(--light-shaded);
    border-radius: 10px;
    margin: 0 0;
    padding: 5px;
}
.label{
    width: 98%;
    height: 5%;
    display: flex;
    justify-content: baseline;
}
.label > p{
    font-size: 3rem;
    margin:0;
    margin-left: 3%;
}
.user-info{
    width: 98%;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.detail-content{
    width: 100%;
    display: flex;
    font-size: 2rem;
}
.detail-content > strong{
    width: 30%;
    display: flex;
}
.introduction{
    width: 80%;
    height: 50%;
    padding: 1%;
    border: 1px solid var(--abledark);
    background: var(--plane-grey);
    display: flex;
    font-size: 2rem;
}

/** ----------------- 모달 -------------------- */
.modal-background{
  background: #000000A0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}
.userDetail-modal-main{
    padding: 40px;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    gap: 5px;

    position: relative;
    min-width: 475px;
    width: 40%;
    height: 70%;

    background: #FFFFFF;
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
    z-index: 100;

    overflow-y: scroll;
}

.userDetail-modal-main > h3{
    font-size: 2rem;
    margin: 0;
}
.userDetail-modal-main > input{
    height: 30px;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 20px;
    width: 98%;
}
.userDetail-modal-main > textarea{
    font-size: 2rem;
    margin-bottom: 20px;
    width: 98%;
    flex: 200px 0 0;
    resize: none;
}
.radios{
    margin-bottom: 20px;
}
.radios > label{
    font-size: 2rem;
}

.modal-btns{
  left: 50%;
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  gap: 17px;
}
.modal-btns button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 209px;
  height: 40px;
  border-radius: 8px;
  border: 0;

  font-weight: 700;
}
.radio-btns{
    display: flex;
    gap: 10px;
}
.radio-btns > button{
    font-size: 1.8rem;
    height: 30px;
    width: 100px;
    border: 0;
    border-radius: 10px;
}
.btn-highlight{
    background: var(--ableblue); 
    color: var(--white);
}
.btn-highlight-red{
    background: var(--ablered);
    color: var(--white)
}

</style>