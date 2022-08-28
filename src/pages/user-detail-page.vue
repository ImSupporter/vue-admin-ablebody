<template>
    <!--모달 창-->
    <div class="modal-background" v-if="modalShown">
        <div class="userDetail-modal-main" v-if="modalShown">
            <h3>닉네임</h3>
            <input type="text">

            <h3>이름</h3>
            <input type="text">

            <h3>직업</h3>
            <input type="text">

            <h3>성별</h3>
            <div class="radios">
                <label><input type="radio" name="gender" value="MALE">남자</label>
                <label><input type="radio" name="gender" value="FEMALE">여자</label>
            </div>

            <h3>키</h3>
            <input type="text">

            <h3>몸무게</h3>
            <input type="text">

            <h3>UID</h3>
            <input type="text">

            <h3>핸드폰</h3>
            <input type="text">

            <h3>마케팅 수신여부</h3>
            <div class="radios">
                <label><input type="radio" name="consent" value=true>동의</label>
                <label><input type="radio" name="consent" value=false>거부</label>
            </div>
            
            <h3>소개글</h3>
            <textarea></textarea>

            <div class="modal-btns">
                <button style="color: var(--ableblue)">취소</button>
                <button @click="modalShown = false" style="background: var(--ableblue); color: var(--white);">확인</button>
            </div>
        </div>
    </div>

    <div class="page-user-detail">
        <div class="user-header">
            <div class="header-buttons">
                <button style="background: var(--small-text-grey)" @click="modalShown = true;">수정</button>
                <button style="background: var(--ableblue)">루틴으로 가기</button>
            </div>
            <img :src="user.profileUrl" alt="유저 프로필 사진" style="width: 200px;height:200px;">
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
                    <p v-if="user.height">{{user.height + ' cm'}}</p>
                    <p v-if="user.weight">{{user.weight + ' kg'}}</p>
                </div>
            </div>
        </div>
        <div class="label">
            
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
            <div class="detail-content" style="margin-top: 1%">
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
            modalShown: true,
        }
    },
    methods: {
        async fetchUser(uid){
            const response = await apiInstance.get('/user/detail',{
                params:{
                    uid: uid
                }
            })
            this.user = response.data.data;
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
    gap: 5px;
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
    height: 100%;
}
.user-header-profile{
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 10px;
}
.user-header-profile > h1{
    font-size: 4rem;
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
    gap: 15px;
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
    justify-content: baseline;
    align-items: baseline;
    flex-direction: column;
    gap: 5px;

  position: relative;
  width: 40%;
  height: 70%;

  background: #FFFFFF;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
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
    width: 100%;
}
.userDetail-modal-main > textarea{
    font-size: 2rem;
    margin-bottom: 20px;
    width: 100%;
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

</style>