<template>
  <div class="sidebar-nav">
    <el-menu default-active="1-1"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             background-color="">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航三</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'sideBarNav',
  components: {

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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch: {

  }
}
</script>
<style lang="less" scoped>
@import "~@/style/common";
.sidebar-nav {
  height: calc(~"100vh - 60px");
  // background: #2b2c4b;
  background: #303a58;
}
</style>
<style lang="less">
.el-menu {
  .el-menu-item {
    color: rgb(153, 153, 153);
    &:hover {
      background: transparent;
      color: white !important;
    }
    &.is-active {
      background-image: linear-gradient(
        90deg,
        rgb(255, 130, 46),
        rgb(226, 72, 95)
      );
      color: #fff;
    }
  }
  .el-submenu__title {
    color: rgb(153, 153, 153);
    &:hover {
      background: transparent;
      color: white;
    }
  }
}
.el-dropdown-menu,
.el-menu {
  background: transparent !important;
}
.el-submenu {
  &.is-active {
    background: #2b2c4b;
  }
  .el-dropdown-menu,
  .el-menu {
    background: #2b2c4b;
    color: white !important;
  }
}
</style>