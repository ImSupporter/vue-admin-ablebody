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
  height: 6.5%;

  align-items: center;
  margin-top: 48px;
}
h3{
  font-size: 36px;
  margin-left: 75px;
}
</style>