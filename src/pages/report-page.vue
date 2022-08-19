<template>
  <div class="main-wrapper">
    <table class="report-table">
      <thead>
        <th v-for = "(item) in header" v-bind:key="item">{{item}}</th>
      </thead>
      <tbody>
        <tr v-for = "row in rows" v-bind:key="row">
          <td v-for = "val in row" v-bind:key="val">{{val}}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
export default {
    name: "ReportPage",
    data() {
      return {
        header:["번호", "닉네임", "내용", "이유"],
        rows:[
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          },
          {
            id:'101',
            nickname: "ablebody_official",
            content: "광고에요",
            reason: "중복/도배성 게시물이에요"
          }
        ]
      }
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
</style>