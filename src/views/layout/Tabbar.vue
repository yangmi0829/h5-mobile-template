<template>
  <van-tabbar
    v-model="active"
    :safe-area-inset-bottom="true">
    <van-tabbar-item
      v-for="(item,$index) in tabbarList"
      :key="$index"
      :name="item.name"
      :to="item.to"
      :icon="item.icon">
      {{item.text}}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'Tabbar',
  components: {
    [TabbarItem.name]: TabbarItem,
    [Tabbar.name]: Tabbar
  },
  data () {
    return {
      active: 'Index',
      tabbarList: [
        {
          name: 'Index',
          to: '/index',
          icon: 'wap-home-o',
          text: '首页'
        },
        {
          name: 'My',
          to: '/my',
          icon: 'user-o',
          text: '我的'
        }
      ]
    }
  },
  computed: {
    curRouter () {
      return this.$route
    }
  },
  watch: {
    curRouter: {
      immediate: true,
      handler (newVal, oldVal) {
        const { name: newName } = newVal || {}
        const { name: oldName } = oldVal || {}
        if (newName !== oldName && newName !== this.active) {
          this.active = newName
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
