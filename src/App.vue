<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div id="app">
    <!-- 使用userData来判断是否是登录页还是内页，userData有值说明是内页，则添加导航 -->
    <!-- <span v-if="userData">123456</span> -->
    <layout v-if="$common.getSession('userInfo')"></layout>
    <router-view />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import layout from './layout'
export default {
  components: {
    layout
  },
  computed: {
    ...mapState('loginInfo', ['userData'])
  },
  watch: {
    userData(val) {
      this.$common.setSession('userInfo', val)
    }
  }
}
</script>
<style lang="less">
body {
  margin: 0;
}
</style>
