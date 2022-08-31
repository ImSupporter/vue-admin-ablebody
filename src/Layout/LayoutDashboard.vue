<template>
  <NaviBar class="NaviBar"></NaviBar>
  <div class="main-panel">
    <TopNavBar class="TopNavBar"></TopNavBar>
    <ContentView></ContentView>
  </div>
</template>

<script>
import TopNavBar from '@/components/TopNavBar';
import NaviBar from '@/components/NaviBar';
import ContentView from '@/Layout/ContentView';
export default {
    components: { TopNavBar, NaviBar, ContentView }
}
</script>

<style>
.main-panel {
  position: absolute;
  top: 0px;
  left: 15%;
  width: 85%;

  height: 100vh;
  display: flex;
  flex-direction: column;

  overflow: auto;
}
</style>