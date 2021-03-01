<template>
  <div class="nav-menu">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">推广管理</el-menu-item>
      <el-menu-item index="3">我要推广</el-menu-item>
      <el-menu-item index="4">我要招商</el-menu-item>
      <el-menu-item index="5">效果报表<img class="menu-new-icon"
             :src="require('@/assets/img/common/new.png')"
             alt=""></el-menu-item>
      <el-menu-item index="6">我的工具</el-menu-item>
      <el-menu-item index="7">账户管理</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'navMenu',
  components: {

  },
  data() {
    return {
      activeIndex: '1',
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {

  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch: {

  }
}
</script>
<style lang="less" scoped>
@import "~@/style/common";
.nav-menu {
  float: left;
  .menu-new-icon {
    width: 36px;
    margin-left: 5px;
  }
}
.el-menu--horizontal {
  > .el-menu-item.is-active {
    border-bottom: 3px solid #fe4800;
    color: #666;
  }
  .el-menu-item {
    color: #666;
  }
}
</style>