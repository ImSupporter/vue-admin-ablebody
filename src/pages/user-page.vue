<template>
  <div class="page-user">
      <div class="dashboard-user">
        <div class="total">
          <h2>{{totalUsers}}</h2>
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
          <select @change="selectSearchType($event)" name="search-filter" id="search-type">
              <option value="nickname">닉네임</option>
              <option value="uid">UID</option>
              <option value="phone">핸드폰</option>
              <option value="name">이름</option>
              <option value="job">직업</option>
          </select>
          <input type="search" @keyup.enter="search()" v-model="keyword">
          <button @click="search()">검색</button>
        </div>
        <table class="table-user">
          <thead>
            <div></div>
            <th v-for="head in heads" v-bind:key="head">{{head}}</th>
          </thead>
          <tbody>
            <tr v-for="user in users" v-bind:key="user">
              <img :src="user.profileImgUrl" alt="">
              <td>{{user.nickname}}</td>
              <td>{{user.uid}}</td>
              <td>{{user.phone}}</td>
              <td>{{user.name}}</td>
              <td>{{user.job}}</td>
            </tr>
          </tbody>
        </table>
        <div class="page-controller">
          <button @click ="previousPage()"><img src="@/assets/icons/pre-chevron.svg" alt="이전버튼"></button>
          <p>{{page}}</p>
          <button @click ="nextPage()"><img src="@/assets/icons/next-chevron.svg" alt="이전버튼"></button>
        </div>
      </div>
  </div>
</template>

<script>
import { apiInstance } from '@/api'
export default {
    name: "UserPage",
    data() {
      return {
        // 대시보드
        totalUsers: null,
        newUser: null,
        resigned: null,

        // 검색
        selectType: "nickname",
        keyword: null,
        
        // 페이지
        heads:['유저', 'UID', '핸드폰', '이름', '직업'],
        page: 1,
        totalPages: null,
        users: null
      }
    },
    methods: {
      nextPage(){
        if(this.page < this.totalPages){
          this.page = this.page +1
        }

        if(!this.keyword){
          this.fetchData(this.page)
        }
        else{
          this.fetchSearchUser(this.selectType, this.keyword, this.page)
        }
      },
      previousPage(){
        if(this.page > 1){
          this.page = this.page -1
        }
        if(!this.keyword){
          this.fetchData(this.page)
        }
        else{
          this.fetchSearchUser(this.selectType, this.keyword, this.page)
        }
      },
      selectSearchType(event){
        this.selectType = event.target.value
      },
      search(){
        this.page = 1
        if(!this.keyword){
          this.fetchData(this.page)
        }
        else{
          this.fetchSearchUser(this.selectType, this.keyword, this.page)
        }
      },
      async fetchUserVariance(){
        const response = await apiInstance.get('/user/variance')
        this.newUser = response.data.data.newUser
        this.resigned = response.data.data.resigned
      },
      async fetchSearchUser(searchType, keyword, page){
        console.log(keyword)
        const response = await apiInstance.get('/user/search', {
            params:{
              type: searchType,
              keyword: keyword,
              page: page
            }
          }
        )

        this.users = response.data.data.content
        this.totalPages = response.data.data.totalPages
      },
      async fetchData(page){
        const response = await apiInstance.get('/user', {
            params:{
              page: page
            }
         }
        )

        this.totalUsers = response.data.data.totalElements

        this.users = response.data.data.content
        this.totalPages = response.data.data.totalPages
      },
    },
    created() {
      this.fetchData(this.page)
      //this.fetchSearchUser(this.selectType, this.keyword, this.page)
      this.fetchUserVariance()
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
  flex: 0 12rem;
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
  flex: 0 12rem;
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