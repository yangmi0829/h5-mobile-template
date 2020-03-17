<template>
  <fragment>
    <nav-bar></nav-bar>
    <div class="content">
      <router-view></router-view>
    </div>
    <tabbar v-show="showTabbar"></tabbar>
  </fragment>
</template>

<style scoped lang="less">
  @import "~vant/lib/style/var";
  .content{
    margin-top: @nav-bar-height;
  }
  .content.tarbar{
    margin-bottom: @tabbar-height;
    height: calc(~"100vh - @{tabbar-height} - @{nav-bar-height}");
    overflow: auto;
  }
</style>
<script>
import NavBar from './NavBar'
import Tabbar from './Tabbar'
export default {
  name: 'Home',
  components: { Tabbar, NavBar },
  computed: {
    showTabbar () {
      return this.$route.meta.tabbar
    }
  }
}
</script>
