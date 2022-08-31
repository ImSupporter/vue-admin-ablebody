<template>
  <div class="top-bar">
    <h3>{{$route.name}}</h3>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.top-bar{
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  position: static;
  width: 100%;
  height: 5vh;

  align-items: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
h3{
  font-size: 3vh;
  margin: 0 75px;
}
</style>