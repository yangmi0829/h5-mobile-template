<template>
  <div>
    <van-button type="primary" @click="show = true">切换背景色{{theme}}</van-button>
    <van-action-sheet v-model="show" :actions="actions" @select="changeTheme" />
  </div>
</template>

<script>
  import {Button,ActionSheet } from 'vant'
  import {mapGetters} from 'vuex'
  import API from '../../api'
  export default {
    name: 'Index',
    components: {
      [ActionSheet.name]: ActionSheet,
      [Button.name]: Button
    },
    data(){
      return {
        show: false,
        actions: [
          { name: '默认', theme: 'default' },
          { name: '夜间', theme: 'dark' },
        ]
      }
    },
    computed: {
      ...mapGetters(['theme'])
    },
    methods: {
      changeTheme({theme}){
        this.$store.dispatch('theme/change_theme', theme)
        this.show = false
      }
    }
  }
</script>

<style scoped lang="less">

</style>
