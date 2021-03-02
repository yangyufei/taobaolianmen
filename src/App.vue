<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div id="app">
    <!-- 使用userData来判断是否是登录页还是内页，userData有值说明是内页，则添加导航 -->
    <!-- <span v-if="userData">123456</span> -->
    <layout v-if="userData"></layout>
    <router-view v-else />
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
  // created() {
  //   //在页面加载时读取sessionStorage里的状态信息
  //   if (sessionStorage.getItem("store")) {
  //     this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
  //   }

  //   //在页面刷新时将vuex里的信息保存到sessionStorage里
  //   window.addEventListener("beforeunload", () => {
  //     sessionStorage.setItem("store", JSON.stringify(this.$store.state))
  //   })
  // },
  watch: {

  }
}
</script>
<style lang="less">
#app {
  background: #e8ebf2;
}
body {
  margin: 0;
}
* {
  margin: 0;
  padding: 0;
  font-style: normal;
}
ul,
li {
  list-style: none;
}
.el-popper {
  color: #333;
  line-height: 18px !important;
}
</style>
