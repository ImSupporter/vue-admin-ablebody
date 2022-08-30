<template>
  <!--모달 창-->
  <div class="modal-background" v-if="modalShown">
    <div class="modal-main" v-if="modalShown">
      <h1>{{modal_nickname}}</h1>
      <p>{{modal_date}}</p>
      <p>{{modal_content}}</p>
      <div class="modal-btns">
        <button style="color: var(--ableblue)">삭제</button>
        <button @click="modalShown = false" style="background: var(--ableblue); color: var(--white);">확인</button>
      </div>
    </div>
  </div>

  <div class="main-wrapper">
    <table class="suggestion-table">
      <thead>
        <th v-for = "(item) in header" v-bind:key="item">{{item}}</th>
      </thead>
      <tbody>
        <tr v-for = "row in rows" v-bind:key="row" @click="this.showModal(row)">
          <td>{{row.id}}</td>
          <td>{{row.content}}</td>
          <td>{{row.nickname}}</td>
          <td>{{row.createDate}}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
import { apiInstance } from '@/api/index';

export default {
    name: "SuggestionPage",
    data() {
      return {
        // 모달
        modalShown: false,
        modal_nickname : 'ablebody_official',
        modal_date : "2022-08-21T11:06:05",
        modal_content: "운동항목을 커스텀 할 수 있는 기능이 있으면 좋겠어요",

        // 테이블 프로퍼티
        header:["번호", "내용", "작성자", "작성시간"],
        rows: null
      }
    },
    methods: {
      async fetchSuggestions(page){
        const response = await apiInstance.get('/suggestion?page='+page)
        
        this.rows = response.data.data.content
      },
      showModal(suggestion){
        this.modal_nickname = suggestion.nickname
        this.modal_date = suggestion.createDate
        this.modal_content = suggestion.content
        this.modalShown = true
      }
    },
    created() {
      this.fetchSuggestions(1)
    },
}
</script>

<style>
@import url(@/assets/colors.css);
/* 모달 */
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
}
.modal-main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;

  position: relative;
  width: 50%;
  height: 40%;
  min-height: 400px;

  background: #FFFFFF;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}

.modal-main > h1{
  font-size : 5.6rem;
  margin-bottom: 0px;
}
.modal-main > :nth-child(2){
  font-size: 2.4rem;
  color: var(--small-text-grey);
  margin: 10px 0;
}
.modal-main > :nth-child(3){
  font-size: 2.0rem;
  width: 100%;
  height: 80%;
  
  background: var(--plane-grey);
  display: flex;
  justify-content: baseline;
  padding: 5px;
  border-radius: 5px;
  overflow: auto;
  text-align: start;
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


/* 메인 */
.main-wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
table{
  width: 91.4%;
  height: 90%;
  text-align: left;
  display: flex;
  flex-direction: column;
}
thead{
  background: var(--light);
  height: 5%;
  display: flex;
  padding: 8px;
  gap:10px
}
th{
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}
.suggestion-table th:nth-child(1){
  flex: 11 11px;
}
.suggestion-table th:nth-child(2){
  flex: 40 40px;
}
.suggestion-table th:nth-child(3){
  flex: 20 20px;
}
.suggestion-table th:nth-child(4){
  flex: 0 150px;
  justify-content: center;
}
.suggestion-table tbody{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
}
.suggestion-table tr:nth-of-type(even){
  background: var(--plane-grey)
}
.suggestion-table tr{
  padding: 0.5%;
  height: 5%;
  gap: 10px;
  display: flex;
  align-items: center;
}
.suggestion-table td:nth-child(4n+1){
  flex: 11 11px;
}
.suggestion-table td:nth-child(4n+2){
  flex: 40 40px;
  overflow: hidden;
  white-space: nowrap;
}
.suggestion-table td:nth-child(4n+3){
  flex: 20 20px;
}
.suggestion-table td:nth-child(4n+4){
  flex: 0 150px;
}
</style>