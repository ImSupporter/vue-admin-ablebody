<template>
  <div class="main-wrapper">
    <table class="suggestion-table">
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
    name: "SuggestionPage",
    data() {
      return {
        header:["번호", "내용", "작성자", "작성시간"],
        rows:[
          {
            id:'101',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'102',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'103',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'104',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
          },
          {
            id:'192',
            content: "애블바디 화이팅하세요",
            writer: "daa",
            createDate: "2022-02-01T12:00:00"
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
}
.suggestion-table td:nth-child(4n+3){
  flex: 20 20px;
}
.suggestion-table td:nth-child(4n+4){
  flex: 0 150px;
}
</style>