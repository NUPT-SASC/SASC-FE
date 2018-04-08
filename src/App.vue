<template>
  <div id="app">
    <NavBar :is-home="isHome"/>
    <router-view/>
    <Bottom/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Bottom from '@/components/Bottom';

export default {
  name: 'app',
  components: {
    NavBar, Bottom,
  },
  computed: {
    isHome() {
      return !this.$route.path.split('/')[1];
    },
  },
};
</script>

<style lang="less">
@import url('./styles/common.less');
@import url('./styles/colors.less');
 body{
   background-color: @background-gray;
 }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: @background-gray;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
