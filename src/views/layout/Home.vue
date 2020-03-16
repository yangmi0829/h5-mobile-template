<template>
  <fragment>
    <nav-bar></nav-bar>
    <div class="body">
      <router-view></router-view>
    </div>
    <tabbar></tabbar>
  </fragment>
</template>

<style scoped lang="less">
  @import "~vant/lib/style/var";
  .body{
    margin-top: @nav-bar-height;
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
  components: { Tabbar, NavBar }
}
</script>
