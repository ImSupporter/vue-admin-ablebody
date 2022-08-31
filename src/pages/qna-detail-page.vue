<template>
    <div class="qna-detail-page">
        <div class="qna-header">
        <p style="font-size: 1.5rem; color: var(--ableblue); background: var(--light-shaded); padding: 3px 5px; border-radius: 5px; font-weight:700;">운동했어요</p>
        <p style="font-size: 2rem; font-weight: 700; max-height: 55px;">제목 첫번째 줄</p>
        <div class="writer-profile">
            <img src="@/assets/logo.png" alt="" style="height: 100%;">
            <div style="height: 100%; text-align: left;">
                <p style="margin: 0; font-size:1.8rem; font-weight:700;">ablebody_official</p>
                <label>172cm</label>
                <label> • </label>
                <label>80kg</label>
                <label> • </label>
                <label>2022-06-29T11</label>
            </div>
        </div>
        </div>
        <div class="qna-body">
            <div class="photo-area">
                <img src="@/assets/logo.png" alt="" style="width:100%; height:100%; background: var(--abledark) ;object-fit: contain;">
            </div>
            <div class="text-area">
                <div class="board-main">
                    <div class="main-text">메인 내용입니다</div>
                    <div class="hashtags">
                        <p class="hashtag">#해시태그</p>
                        <p class="hashtag">#해시태그</p>
                        <p class="hashtag">#해시태그</p>
                        <p class="hashtag">#해시태그</p>
                    </div>
                    <div class="basic-info">
                        <img src="@/assets/icons/like.svg" alt="">
                        <p>12</p>
                        <img src="@/assets/icons/chat.svg" alt="">
                        <p>4</p>
                        <img src="@/assets/icons/view.svg" alt="">
                        <p>23</p>
                    </div>
                </div>
                <div class="comment-replies">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
    }
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
    height: 20%;
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
    height: 75%;
    width: 95%;
    display: flex;
    gap: 1%
}
.photo-area{
    width: 44%;
    height: 100%;
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
    min-height: 100px;
    height: 150px;
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
}
</style>