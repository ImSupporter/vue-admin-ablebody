<template>
  <div class="page-user-detail">
        <div class="user-header">
            <div class="header-buttons">
                <button style="background: var(--small-text-grey)">수정</button>
                <button style="background: var(--ableblue)">루틴으로 가기</button>
            </div>
            <img src="@/assets/logo.png" alt="유저 프로필 사진">
            <div class="user-header-profile">
                <h1>ablebody_official</h1>
                <div class="name-label">
                    <label>이름 : </label><label>애블바디</label>
                </div>
                <div class="job-label">
                    <label>직업 : </label><label>null</label>
                </div>
                <div class="user-tags">
                    <p>남자</p>
                    <p>170cm</p>
                    <p>80kg</p>
                </div>
            </div>
        </div>
        <div class="label">
            
        </div>
        <div class="user-info">
            <div class="detail-content">
                <strong>UID</strong>
                <label>#9999999</label>
            </div>
            <div class="detail-content">
                <strong>핸드폰</strong>
                <label>010-1234-1234</label>
            </div>
            <div class="detail-content">
                <strong>가입일</strong>
                <label>2022-06-29T11:06:05</label>
            </div>
            <div class="detail-content">
                <strong>마케팅 수신동의 여부</strong>
                <strong>켜짐</strong>
            </div>
            <div class="detail-content" style="margin-top: 1%">
                <strong>소개글</strong>
            </div>
            <div class="introduction">
                안녕하세요 스마일헌터 애블바디 박태현 입니다
            </div>
        </div>
  </div>
</template>

<script>
export default {

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

</style>