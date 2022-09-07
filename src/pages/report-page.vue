<template>
  <!--모달 창-->
  <div class="modal-background" v-if="modalShown" @click="modalShown = false">
    <div class="report-modal-main" v-if="modalShown">
      <h1>{{this.reportOnModal.user.nickname}}</h1>
      <p style="margin-top: 20px">{{this.reportOnModal.reason}}</p>
      <p>{{this.reportOnModal.contentType + ' - ' +this.reportOnModal.contentId}}</p>
      <label>{{this.reportOnModal.content}}</label>
      <div class="modal-btns">
        <button @click="deleteReport()" style="color: var(--ableblue)">조치완료(삭제)</button>
        <button @click="moveToReportedContent()" style="background: var(--ableblue); color: var(--white);">확인 하러가기</button>
      </div>
    </div>
  </div>

  <div class="main-wrapper">
    <table class="report-table">
      <thead>
        <th v-for = "(item) in header" v-bind:key="item">{{item}}</th>
      </thead>
      <tbody>
        <tr v-for = "row in rows" v-bind:key="row" @click="this.modalSet(row)">
          <td>{{row.id}}</td>
          <td>{{row.user.nickname}}</td>
          <td>{{row.content}}</td>
          <td>{{row.reason}}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
import { apiInstance } from '@/api/index'

export default {
    name: "ReportPage",
    data() {
      return {
        // 모달
        modalShown: false,
        reportOnModal: null,

        // 메인
        header:["번호", "닉네임", "내용", "이유"],
        rows: null
      }
    },
    methods: {
        async fecthReports(){
            const response = await apiInstance.get('/report')
            this.rows = response.data.data.content
        },
        async deleteReport(){
          if(confirm('정말 삭제하시겠습니까?')){
            await apiInstance.delete('/report',
              {
                params:{
                  id: this.reportOnModal.id
                }
              }
            )
            this.modalShown = false;
            this.fecthReports()
          }
        },
        modalSet(report){
            this.reportOnModal = report;
            this.modalShown = true;
        },
        moveToReportedContent(){
            switch(this.reportOnModal.contentType){
                case 'ExBoard':
                case 'ExComment':
                case 'ExReply' : 
                    this.$router.push('/qna/' + this.reportOnModal.rootContentId)
                    break;
                case 'User':
                    this.$router.push('/user/'+this.reportOnModal.rootContentId)
                    break;
                default:
                    alert('루틴카드 댓글,답글은 아직 준비중이에요')
            }
        }
    },
    created() {
      this.fecthReports()
    },
}
</script>

<style>
@import url(@/assets/colors.css);
.main-wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.report-table{
  width: 91.4%;
  height: 90%;
  text-align: left;
  display: flex;
  flex-direction: column;
}
.report-table thead{
  background: var(--light);
  height: 5%;
  display: flex;
  padding: 8px;
  gap:10px
}
.report-table th{
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}
.report-table th:nth-child(1){
  flex: 5 15px;
}
.report-table th:nth-child(2){
  flex: 25 44px; 
}
.report-table th:nth-child(3){
  flex: 90 90px;
  justify-content: center;
}
.report-table th:nth-child(4){
  flex: 40 40px;
  justify-content: center;
}
.report-table tbody{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
}
.report-table tr:nth-of-type(even){
  background: var(--plane-grey)
}
.report-table tr{
  padding: 0.5%;
  height: 5%;
  gap: 10px;
  display: flex;
  align-items: center;
}
.report-table td:nth-child(4n+1){
  flex: 5 15px;
}
.report-table td:nth-child(4n+2){
  flex: 25 44px;
}
.report-table td:nth-child(4n+3){
  flex: 90 90px;
}
.report-table td:nth-child(4n+4){
  flex: 40 40px;
}

/**------------------------------  모달 -----------------------------------------*/
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
.report-modal-main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;

  position: relative;
  width: 40%;
  height: 40%;

  background: #FFFFFF;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}

.report-modal-main > h1{
  font-size : 4rem;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0px;
}
.report-modal-main > p{
  font-size: 1.8rem;
  color: var(--abledark);
  margin: 1px 0;
}
.report-modal-main > label{
  font-size: 2.0rem;
  width: 100%;
  height: 80%;
  
  background: var(--plane-grey);
  display: flex;
  justify-content: baseline;
  padding: 5px;
  border-radius: 5px;
  overflow: auto;
  margin: 30px 0;
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