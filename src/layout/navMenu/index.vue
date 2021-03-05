<template>
  <div class="nav-menu">
    <ul class="clear">
      <li v-for="nav in navList"
          :key="nav.path"
          :class="{'active-menu': nav.path == activeIndex}"
          @click="changeNav(nav)">{{nav.name}}<img class="menu-new-icon"
             v-if="nav.imgUrl"
             :src="nav.imgUrl"
             alt=""></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navMenu',
  components: {

  },
  data() {
    return {
      activeIndex: 'shouye',
      navList: [
        {
          path: 'shouye',
          name: '首页',
          imgUrl: null,
          sideNav: false
        },
        {
          path: 'promotionManagement',
          name: '推广管理',
          imgUrl: null,
          sideNav: false
        },
        {
          path: 'iWantPromote',
          name: '我要推广',
          imgUrl: null,
          sideNav: false
        },
        {
          path: 'attractInvestment',
          name: '我要招商',
          imgUrl: null,
          sideNav: true
        },
        {
          path: 'effectReport',
          name: '效果报表',
          imgUrl: require('@/assets/img/common/new.png'),
          sideNav: false
        },
        {
          path: 'myTools',
          name: '我的工具',
          imgUrl: null,
          sideNav: false
        },
        {
          path: 'accountManagement',
          name: '账户管理',
          imgUrl: null,
          sideNav: false
        },
      ]
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {

  },
  methods: {
    changeNav(val) {
      this.activeIndex = val.path
      this.$router.push('/' + val.path)
    }
  },
  watch: {

  }
}
</script>
<style lang="less" scoped>
@import "~@/style/common";
.nav-menu {
  ul {
    li {
      position: relative;
      float: left;
      height: 60px;
      padding: 0 25px;
      margin: 0;
      line-height: 60px;
      // border-bottom: 3px solid transparent;
      font-size: 14px;
      color: #666;
      &:hover {
        color: #fe4800;
      }
      &.active-menu {
        &:after {
          content: "";
          position: absolute;
          bottom: -1px;
          background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#fe4800),
            to(#fe4800)
          );
          background-image: linear-gradient(90deg, #fe4800, #fe4800);
          width: 65px;
          height: 3px;
          left: 50%;
          margin-left: -32px;
        }
      }
      .menu-new-icon {
        width: 36px;
        margin-left: 5px;
      }
    }
  }
}
</style>