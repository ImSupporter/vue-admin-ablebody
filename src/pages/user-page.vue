<template>
  <div class="page-user">
      <div class="dashboard-user">
        <div class="total">
          <h2>{{total}}</h2>
          <p>총 유저수</p>
        </div>
        <div class="new-user">
          <h2>{{newUser}}</h2>
          <p>오늘의 신규 유저</p>
        </div>
        <div class="resigned">
          <h2>{{resigned}}</h2>
          <p>오늘 탈퇴 유저</p>
        </div>
      </div>
      <div class="area-user">
        <div class="search-bar">
          <select name="search-filter" id="search-type">
              <option value="">닉네임</option>
              <option value="">UID</option>
              <option value="">핸드폰</option>
              <option value="">이름</option>
              <option value="">직업</option>
          </select>
          <input type="search">
          <button>검색</button>
        </div>
        <table class="table-user">
          <thead>
            <div></div>
            <th v-for="head in heads" v-bind:key="head">{{head}}</th>
          </thead>
          <tbody>
            <tr v-for="user in data" v-bind:key="user">
              <img src="@/assets/logo.png" alt="">
              <td v-for="d in user" v-bind:key="d">{{d}}</td>
            </tr>
          </tbody>
        </table>
        <div class="page-controller">
          <button><img src="@/assets/icons/pre-chevron.svg" alt="이전버튼"></button>
          <p>{{page}}</p>
          <button><img src="@/assets/icons/next-chevron.svg" alt="이전버튼"></button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "UserPage",
    data() {
      return {
        total: "1.2M",
        newUser: "1.4K",
        resigned: "0",
        page: 1,
        heads:['유저', 'UID', '핸드폰', '이름', '직업'],
        data:[
          {
            nickname : "ablebody_officalwwww",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이름이름이름이름이름이름이름',
            job : '직업직업직업직업직업'
          },
          {
            nickname : "ablebody_officalwwww",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이름이름이름이름이름이름이름',
            job : '직업직업직업직업직업'
          },
          {
            nickname : "ablebody_officalwwww",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이름이름이름이름이름이름이름',
            job : '직업직업직업직업직업'
          },
          {
            nickname : "ablebody_officalwwww",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이름이름이름이름이름이름이름',
            job : '직업직업직업직업직업'
          },
          {
            nickname : "ablebody_offical",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이이름이름이름이름',
            job : '직업직업직업직업직업'
          },
          {
            nickname : "ablebody_officalwwww",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이름이름이름이름이름이름이름',
            job : '직업직업직업직업직업'
          },
          {
            nickname : "ablebody_officalwwww",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이름이름이름이름이름이름이름',
            job : '직업직업직업직업직업'
          },
          {
            nickname : "ablebody_officalwwww",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이름이름이름이름이름이름이름',
            job : '직업직업직업직업직업'
          },
          {
            nickname : "ablebody_officalwwww",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이름이름이름이름이름이름이름',
            job : '직업직업직업직업직업'
          },
          {
            nickname : "ablebody_officalwwww",
            uid : 9999999,
            phone : '01012341234',
            name : '이름이름이름이름이름이름이름이름이름이름',
            job : '직업직업직업직업직업'
          }
        ]
      }
    },
}
</script>

<style>
@import url(@/assets/colors.css);
.page-user{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.dashboard-user{
  width: 100%;
  height: 14%;
  display: flex;
  gap:10px
}

.dashboard-user > div{
  height: 100%;
  flex: 1 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}
.dashboard-user > div > h2{
  font-size: 5.4rem;
  margin: 0;
  line-height: 1;
}
.dashboard-user > div > p{
  font-size: 1.5rem;
  height: fit-content;
  margin: 0px;
  color: var(--light);
}
.area-user{
  width: 90%;
  flex:1 500px;
  background: var(--light-shaded);
  margin-bottom: 2%;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-bar{
  width: 70%;
  height: 4%;
  margin-top: 2%;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 1% 0px;
}
.search-bar > input{
  width: 50%;
}
.table-user{
  width: 95%;
  height: 83%;
  display: flex;
  flex-direction: column;
}
.table-user > thead{
  width: 98%;
  height: 5%;
  padding: 1%;
  background: none;
  border-bottom: solid 1px var(--abledark);

  display: flex;
  align-items: center;
  gap: 1%
}
.table-user > thead > th{
  height: fit-content;
  line-height: 1;
}
.table-user > thead > :nth-child(1){
  width: 30px;
  height: 2px;
}
.table-user > thead > th:nth-child(2){
  flex: 0 16rem;
}
.table-user > thead > th:nth-child(3){
  flex: 0 6rem;
}
.table-user > thead > th:nth-child(4){
  flex: 0 10rem;
}
.table-user > thead > th:nth-child(5){
  flex: 1 26rem;
}
.table-user > thead > th:nth-child(6){
  flex: 1 13rem;
}

.table-user > tbody{
  width: 98%;
  height: 91%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5%;
}
.table-user > tbody >tr{
  width: 100%;
  height: 10%;
  background: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 1%;
  padding : 0% 1%;
  align-items: center;
}
.table-user > tbody > tr > td{
  height: fit-content;
  font-size: 1.5rem;
  line-height: 1;
}
.table-user > tbody > tr > img{
  height: 30px;
  width: 30px;
}
.table-user > tbody > tr > :nth-child(6n+2){
  flex: 0 16rem;
}
.table-user > tbody > tr > :nth-child(6n+3){
  flex: 0 6rem;
}
.table-user > tbody > tr > :nth-child(6n+4){
  flex: 0 10rem;
}
.table-user > tbody > tr > :nth-child(6n+5){
  flex: 1 26rem;
}
.table-user > tbody > tr > :nth-child(6n+6){
  flex: 1 13rem;
}
.page-controller{
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-controller > button{
  width: 60px;
  height: 40px;
}
.page-controller > button > img{
  width: 100%;
  height: 100%;
}
.page-controller > p{
  margin: 0% 10%;
  font-size: 2rem;
}
</style>