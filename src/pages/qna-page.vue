<template>
  <div class="page-qna">
      <div class="dashboard-qna">
        <div class="total">
          <h2>{{this.toalBoards}}</h2>
          <p>전체 게시물 수</p>
        </div>
        <div class="new-user">
          <h2>{{'100'}}</h2>
          <p>신규 게시물</p>
        </div>
        <div class="resigned">
          <h2>{{'100'}}</h2>
          <p>이용자 수</p>
        </div>
        <div class="resigned">
          <h2>59:59</h2>
          <p>이용시간</p>
        </div>
      </div>
      <div class="area-qna">
        <div class="search-bar">
          <select @change="selectSearchType($event)" name="search-filter" id="search-type">
              <option value="title">제목</option>
              <option value="hashtag">해시태그</option>
              <option value="topic">카테고리</option>
              <option value="article">내용</option>
              <option value="writer">작성자</option>
              <option value="id">번호</option>
          </select>
          <input type="search" @keyup.enter="search()" v-model="keyword">
          <button @click="search()">검색</button>
        </div>
        <table class="table-qna">
          <thead>
            <th v-for="(head,index) in heads" v-bind:key="head" @click="changeSortCriteria(index)">
              {{head}}
              <img src="@/assets/icons/sorting-order-desc.svg" alt="" v-if="sortOrder==='DESC' && index ===sortbyIdx">
              <img src="@/assets/icons/sorting-order-asc.svg" alt="" v-if="sortOrder==='ASC'&& index ===sortbyIdx">
            </th>
          </thead>
          <tbody>
            <tr v-for="qna in data" v-bind:key="qna" @click="moveToDetail(qna.id)">
              <td v-for="d in qna" v-bind:key="d">{{d}}</td>
            </tr>
          </tbody>
        </table>
        <div class="page-controller">
          <button><img src="@/assets/icons/pre-chevron.svg" alt="이전버튼" @click="previousPage()"></button>
          <p>{{page}}</p>
          <button><img src="@/assets/icons/next-chevron.svg" alt="다음버튼" @click="nextPage()"></button>
        </div>
      </div>
  </div>
</template>

<script>
import { apiInstance } from '@/api/index';

export default {
    name: "UserPage",
    data() {
      return {
        // 대시보드
        toalBoards: null,

        //검색창
        selectType: 'title',
        keyword: null,

        //결과
        totalPages: null,
        page: 1,
        
        // 테이블 헤더
        heads: ['번호', '카테고리', '제목', '작성자', '좋아요', '댓글수', '조회수', '작성시간'],
        headsProperties: ['qnaId','topic','title','writer','likes','comments','views','createDate'], 
        sortOrderSeq:[null, 'DESC', "ASC"],
        sortby:"qnaId", sortbyIdx:0, sortOrder: null, sortOrderIdx:0,

        data: null
      }
    },
    methods: {
      selectSearchType(event){
        this.selectType = event.target.value
      },
      search(){
        this.page = 1
        this.tableReload();
      },
      changeSortCriteria(clickedHeaderIdx){
        if(clickedHeaderIdx === this.sortbyIdx){
            this.sortOrderIdx = (this.sortOrderIdx+1) % 3;
        }
        else{
            this.sortbyIdx = clickedHeaderIdx;
            this.sortOrderIdx = 1;
        }
        this.sortby = this.headsProperties[this.sortbyIdx]
        if(this.sortOrderIdx === 0) this.sortby = 'qnaId'
        this.sortOrder = this.sortOrderSeq[this.sortOrderIdx];
        
        this.tableReload();
      },
      nextPage(){
        if(this.page < this.totalPages){
          this.page = this.page +1
        }
        this.tableReload();
      },
      previousPage(){
        if(this.page > 1){
          this.page = this.page -1
        }
        this.tableReload();
      },
      moveToDetail(qnaID){
        this.$router.push('/qna/'+qnaID)
      },
      tableReload(){
        if(!this.keyword){
          this.fetchData(this.page)
        }
        else{
          this.fetchSearchBoard(this.selectType, this.keyword, this.page)
        }
      },
      async fetchData(page){
        const response = await apiInstance.get('/qna',{
          params:{
            page: page,
            sortby: this.sortby,
            order: this.sortOrder,
          }
        })
        this.toalBoards = response.data.data.totalElements;

        this.totalPages = response.data.data.totalPages;
        this.data = response.data.data.content;
      },
      async fetchSearchBoard(searchType, keyword, page){
        const response = await apiInstance.get('/qna/search',{
          params:{
            type: searchType, 
            keyword: keyword,
            page: page,
            sortby: this.sortby,
            order: this.sortOrder,
          }
        })
        console.log(response);

        this.totalPages = response.data.data.totalPages;
        this.data = response.data.data.content;
      }
    },
    created() {
      this.fetchData(this.page);
    },
}
</script>

<style>
@import url(@/assets/colors.css);
.page-qna{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dashboard-qna{
  width: 100%;
  height: 14%;
  display: flex;
  gap:10px;
}

.dashboard-qna > div{
  height: 100%;
  flex: 1 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.dashboard-qna > div > h2{
  font-size: 5.4rem;
  margin: 0;
  line-height: 1;
}
.dashboard-qna > div > p{
  font-size: 1.5rem;
  height: fit-content;
  margin: 0px;
  color: var(--light);
}
.area-qna{
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
.table-qna{
  width: 98%;
  height: 83%;
  display: flex;
  flex-direction: column;
  
  /* - 가로스크롤 -*/
  overflow: auto;
  white-space: nowrap;
}
.table-qna > thead{
  width: 96%;
  min-width: 125rem;
  height: 5%;
  padding: 0% 2%;
  background: none;
  border-bottom: solid 1px var(--abledark);

  display: flex;
  align-items: center;
  gap: 1%
}
.table-qna > thead > th{
  height: fit-content;
  line-height: 1;
}
.table-qna > thead > :nth-child(1){
  /* 번호 */
  flex: 0 0 6rem;
  display: flex;
  justify-content: center;
}
.table-qna > thead > th:nth-child(2){
  /* 카테고리 */
  flex: 0 0 15rem;
}
.table-qna > thead > th:nth-child(3){
  /* 제목 */
  flex: 0 0 40rem;
}
.table-qna > thead > th:nth-child(4){
  /* 작성자 */
  flex: 0 0 22rem;
}
.table-qna > thead > th:nth-child(5){
  /* 좋아요 */
  flex: 0 0 5rem;
  display: flex;
  justify-content: center;
}
.table-qna > thead > th:nth-child(6){
  /* 댓글수 */
  flex: 0 0 5rem;
  display: flex;
  justify-content: center;
}
.table-qna > thead > th:nth-child(7){
  /* 조회수 */
  flex: 0 0 5rem;
  display: flex;
  justify-content: center;
}
.table-qna > thead > th:nth-child(8){
  /* 작성시간 */
  flex: 1 0 15rem;
  display: flex;
  justify-content: center;
}
.table-qna > thead > th > img{
  border: 0;
  width: 16px;
  height: 16px;
}

.table-qna > tbody{
  width: 98%;
  height: 91%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  gap: 1.5%;
}
.table-qna > tbody >tr{
  width: 98%;
  min-width: 125rem;
  flex: 7% 0 0;
  background: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 1%;
  padding : 0% 1%;
  align-items: center;
}
.table-qna > tbody > tr > td{
  height: fit-content;
  font-size: 1.5rem;
  line-height: 1;
}
.table-qna > tbody > tr > :nth-child(8n+1){
  /* 번호 값*/
  flex: 0 0 6rem;
  display: flex;
  justify-content: center;
}
.table-qna > tbody > tr > :nth-child(8n+2){
  /* 카테고리 값*/
  flex: 0 0 15rem;
}
.table-qna > tbody > tr > :nth-child(8n+3){
  /* 제목 값*/
  flex: 0 0 40rem;
}
.table-qna > tbody > tr > :nth-child(8n+4){
  /* 작성자 값*/
  flex: 0 0 22rem;
}
.table-qna > tbody > tr > :nth-child(8n+5){
  /* 좋아요 값*/
  flex: 0 0 5rem;
  display: flex;
  justify-content: center;
}
.table-qna > tbody > tr > :nth-child(8n+6){
  /* 댓글수 값*/
  flex: 0 0 5rem;
  display: flex;
  justify-content: center;
}
.table-qna > tbody > tr > :nth-child(8n+7){
  /* 조회수 값*/
  flex: 0 0 5rem;
  display: flex;
  justify-content: center;
}
.table-qna > tbody > tr > :nth-child(8n+8){
  /* 작성시간 값*/
  flex: 1 0 15rem;
  display: flex;
  justify-content: center;
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