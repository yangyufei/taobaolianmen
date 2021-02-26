<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div id="app">
    <!-- 使用userData来判断是否是登录页还是内页，userData有值说明是内页，则添加导航 -->
    <span v-if="userData">123456</span>
    <router-view />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('loginInfo', ['userData'])
  }
}
</script>
<style lang="less">
body {
  margin: 0;
}
</style>
