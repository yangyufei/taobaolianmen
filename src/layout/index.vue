<template>
  <div class="main-app">
    <header class="clear">
      <img :src="require('@/assets/img/common/index_logo.png')"
           alt="">
      <span class="toOldVersion">返回旧版</span>
      <navMenu></navMenu>
      <ul class="right-panel clear">
        <li>
          <span>潮流墨迹2(124638293)&nbsp;，&nbsp;&nbsp;</span>
          <var class="log-out">退出</var>
        </li>
        <li class="iconfont xinfeng">&#xe617;</li>
        <li class="iconfont wenhao"
            @click="toWenhao">&#xe71d;</li>
      </ul>
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
    toWenhao() {
      window.open('https://help.alimama.com/?spm=a219t.11816994.1998910419.d00603273.425675a50aWyIe#!/product/index?id=8306480')
    }
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
    padding-left: 286px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    img {
      position: absolute;
      top: 14px;
      left: 80px;
      display: block;
      width: 149px;
      cursor: pointer;
    }
    .toOldVersion {
      position: absolute;
      top: 21px;
      left: 218px;
      background: #fff;
      border: 1px solid #e2e2e9;
      border-radius: 2px;
      width: 56px;
      height: 16px;
      text-align: center;
      color: #666;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        color: #f50;
      }
    }
    .right-panel {
      position: absolute;
      right: 18px;
      top: 18px;
      margin: 0;
      li {
        float: left;
        padding: 0 11px;
        font-size: 12px;
        color: #333;
        var,
        &.iconfont {
          cursor: pointer;
        }
        &.xinfeng {
          font-size: 19px;
        }
        &.wenhao {
          font-size: 14px;
          line-height: 22px;
          &:hover {
            color: #f50;
          }
        }
      }
    }
  }
}
</style>