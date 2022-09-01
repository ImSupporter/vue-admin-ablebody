<template>
    <div class="qna-detail-page" v-if="this.board">
        <div class="qna-header">
        <p style="font-size: 1.5rem; color: var(--ableblue); background: var(--light-shaded); padding: 3px 5px; border-radius: 5px; font-weight:700;">{{this.board.topic}}</p>
        <p style="font-size: 2rem; font-weight: 700; max-height: 55px;">{{this.board.title}}</p>
        <div class="writer-profile">
            <img :src="board.writer.profileUrl" alt="" style="width: 40px; height:40px; object-fit: contain; background: black;">
            <div style="height: 100%; text-align: left;">
                <p style="margin: 0; font-size:1.8rem; font-weight:700;">{{board.writer.nickname}}</p>
                <label>{{board.writer.height}}</label>
                <label> • </label>
                <label>{{board.writer.weight}}</label>
                <label> • </label>
                <label>{{board.createDate}}</label>
            </div>
        </div>
        </div>
        <div class="qna-body">
            <div class="photo-area" v-if="board.images.length > 0">
                <img :src="board.images[0].url" alt="">
            </div>
            <div class="text-area">
                <div class="board-main">
                    <div class="main-text">{{board.article}}</div>
                    <div class="hashtags">
                        <p class="hashtag" v-for="tag in board.qnaBoardHashtags" :key="tag">
                            {{tag.hashtag.name}}
                        </p>
                    </div>
                    <div class="basic-info">
                        <img src="@/assets/icons/like.svg" alt="">
                        <p>{{board.likes}}</p>
                        <img src="@/assets/icons/chat.svg" alt="">
                        <p>{{board.comments}}</p>
                        <img src="@/assets/icons/view.svg" alt="">
                        <p>{{board.views}}</p>
                    </div>
                </div>
                <div class="comment-replies">
                    <div class="qna-comment" v-for="comment in board.qnaComments" :key="comment">
                        <div style="padding:0.5%; width:98%; height: auto; display:flex; position:relative; gap:10px; text-align: start;">
                            <img :src="comment.writer.profileUrl" alt="">
                            <div class="comment-replies-right">
                                <div style="display:flex; gap: 10px; align-items: baseline;">
                                    <label style="font-size: 1.4rem; font-weight: 500;">
                                        <b style="font-size:1.7rem">{{comment.writer.nickname}}</b>
                                        {{comment.contents}}
                                    </label>
                                </div>
                                <div class="comment-info">
                                    <p>{{comment.createDate}}</p>
                                    <p>좋아요 </p>
                                    <p style="margin-left:-5px">{{comment.likes+"개"}}</p>
                                    <p style="color:var(--ableblue)">{{comment.qnaCommentId}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="qna-reply" v-for="reply in comment.qnaReplies" :key="reply">
                            <img :src="reply.writer.profileUrl" alt="">
                            <div class="comment-replies-right">
                                <div style="display:flex; gap: 10px; align-items: baseline;">
                                    <label style="font-size: 1.4rem;text-align: start;font-weight: 500;">
                                        <b style="font-size:1.7rem">{{reply.writer.nickname}}</b>
                                        {{reply.contents}}
                                    </label>
                                </div>
                                <div class="comment-info">
                                    <p>{{reply.createDate}}</p>
                                    <p>좋아요 </p>
                                    <p style="margin-left:-5px">{{reply.likes+"개"}}</p>
                                    <p style="color:var(--deep)">{{reply.qnaReplyId}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiInstance } from '@/api/index'

export default {
data() {
    return {
        qnaId: null,
        board: null,
        
        topic: null,
    }
},
methods: {
    async fetchBoard(id){
        const response = await apiInstance.get('/qna/detail?id='+id);
        this.board = response.data.data;
    }
},
created() {
    this.qnaId = this.$route.params.id;
    this.fetchBoard(this.qnaId);
},
}
</script>

<style>
@import url(@/assets/colors.css);
.qna-detail-page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1%;
}
.qna-header{
    height: 15%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-end;
}
.writer-profile{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: baseline;
    gap: 15px;
}
.writer-profile > div > label{
    font-size: 1.6rem;
}
.qna-header > p{
    margin: 0 5px;
}
.qna-body{
    height: 80%;
    width: 95%;
    display: flex;
    gap: 1%

}
.photo-area{
    width: 44%;
    height: 100%;
    background: var(--abledark);
}
.photo-area > img{
    width:100%; 
    height:100%; 
    background: var(--abledark); 
    object-fit: scale-down;
}
.text-area{
    width: 55%;
    height: 100%;

    display: flex;
    flex-direction: column;
}
.board-main{
    width: 100%;
}
.main-text{
    height: auto;
    max-height: 300px;
    overflow: auto;
    font-size: 1.8rem;
    color: var(--abledark);
    text-align: start;
}
.hashtags{
    min-height: 30px;
    width: 100%;
    display: flex;
    align-items: flex-start;

    overflow: auto;
    gap: 10px;
}
.hashtag{
    height: 20px;
    width: fit-content;
    white-space: nowrap;
    margin: 0;
    padding: 2px 4px;
    font-size: 1.5rem;
    background: var(--plane-grey);
    border-radius: 5px;
}
.basic-info{
    height: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3px;
}
.basic-info > img{
    height: 100%;
}
.basic-info > p{
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--light);
    margin: 0;
    margin-right: 10px;
}
.comment-replies{
    width: 100%;
    flex: 64px 1 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1%;
}
.qna-comment{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
.comment-replies img{
    width: 40px;
    height: 40px;
    object-fit: contain;
    background: black;
}
.comment-replies-right{
    height: 100%;
    flex: 100px 1 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.comment-info{
    display: flex;
    gap: 10px;
}
.comment-info > p {
    font-size: 1.4rem;
    margin:0;
    color: var(--small-text-grey)
}
.qna-reply{
    padding:0.5%; 
    width:93%; 
    height:50px; 
    display:flex; 
    position:relative; 
    gap:10px;
    margin-left:6%;
}
</style>