<template>
  <van-nav-bar
    :title="title"
    :left-arrow="showBackIcon"
    :left-text="showBackIcon ? '返回': ''"
    :fixed="true"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
  import { NavBar } from 'vant';
  export default {
    name: 'NavBar',
    components: {
      [NavBar.name]: NavBar
    },
    methods: {
      onClickLeft() {
        this.$router.back()
      },
      onClickRight() {
        this.$toast('按钮');
      }
    },
    computed: {
      title(){
        return (this.$route.meta || {}) .title
      },
      showBackIcon(){
        return window.history.length > 1
      }
    }
  }
</script>

<style scoped>

</style>
