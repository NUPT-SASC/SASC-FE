<template>
  <div id="app">
    <NavBar :is-home="isHome"/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'app',
  components: {
    NavBar,
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
