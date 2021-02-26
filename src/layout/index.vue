<template>
  <div class="main-app">
    <header>
      <img :src="require('@/assets/img/common/index_logo.png')"
           alt="">
      <span class="toOldVersion">返回旧版</span>
      <navMenu></navMenu>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
import navMenu from '@/views/pages/navMenu'
export default {
  name: 'layout',
  components: {
    navMenu
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
}
</script>
<style lang="less" scoped>
@import "~@/style/common";
.main-app {
  min-width: 1280px;
  header {
    position: relative;
    height: 60px;
    padding-left: 80px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    img {
      position: absolute;
      top: 14px;
      left: 80px;
      display: block;
      width: 149px;
    }
    .toOldVersion {
      position: absolute;
      top: 21px;
      left: 164px;
      background: #fff;
      border: 1px solid #e2e2e9;
      border-radius: 2px;
      width: 56px;
      height: 16px;
      text-align: center;
      color: #666;
      font-size: 12px;
    }
  }
}
</style>