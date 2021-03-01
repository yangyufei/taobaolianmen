<template>
  <div class="shouye">
    <img :src="require('@/assets/img/title/title.jpg')"
         alt="">
    <div class="shouye-container">
      <div class="shouye-box"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shouye',
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

  },
  watch: {

  }
}
</script>
<style lang="less" scoped>
@import "~@/style/common";
.shouye {
  padding: 14px;
  > img {
    display: block;
    width: 100%;
    height: 80px;
    background-position: top;
    background-size: cover;
    border-radius: 4px;
  }
  .shouye-container {
    min-height: 460px;
    margin: 14px 0 0;
    padding: 50px 24px 24px;
    border-radius: 4px;
    background-color: #fff;
    .shouye-box {
      padding: 50px 24px 24px;
    }
  }
}
</style>