<template>
  <div class="login-main">
    <img src="@/assets/login-ci.svg" alt="">
    <div class="login-form">
      <div class="id-form">
        <p>ID</p>
        <input type="text">
      </div>
      <div class="password-form">
        <p>Password</p>
        <input type="password" name="" id="">
      </div>
      <button>로그인</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
@import url(@/assets/colors.css);
.login-main{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: baseline;
  flex-direction: column;
  gap: 5%;
}
.login-main > img{
  margin-top: 12%;
  width: 30%;
}
.login-form{
  width: 30%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.login-form > div{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 5px;
  margin:5px
}
.login-form > div >p{
  font-size: 2.4rem;
  height: fit-content;
  line-height: 1;
  margin: 5px;
}
.login-form > div >input{
  width: 100%;
  font-size: 3rem;
  height: fit-content;
  line-height: 1;
  margin: 5px;

  background: none;
  border: 0;
  border-bottom: 2px solid black;
  outline: 0;

}
.id-form{
  margin-top: 50px;
}

.login-form > button{
  background: #0069FF;
  border-radius: 16px;
  width: 200px;
  height: 67px;

  font-size: 3rem;
  color: var(--white);

  margin-top: 30px;
  outline: 0;
  border: 0;
}
</style>