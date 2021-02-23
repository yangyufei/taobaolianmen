<template>
  <div class="login">
    <div class="login-logo clear">
      <img :src="require('@/assets/common/logo.png')"
           alt="">
    </div>
    <div class="login-container">
      <div class="box">
        <div class="login-tab">
          <span :class="{'selected': tab.id == selectedTabId}"
                v-for="tab in tabList"
                :key="tab.id">{{tab.name}}</span>
        </div>
        <div class="login-view">
          <!-- 淘宝会员登录 -->
          <div class="taobao-view">
            <h3>密码登录</h3>
            <div class="form-div clear">
              <label for="username"
                     class="username">
                <span class="iconfont">&#xe765;</span>
              </label>
              <input type="text"
                     id="username"
                     placeholder="会员名/邮箱/手机号">
            </div>
            <div class="form-div clear">
              <label for="password">
                <span class="iconfont">&#xe611;</span>
              </label>
              <input type="text"
                     id="password"
                     placeholder="请输入登录密码">
            </div>
            <span class="login-button">登录</span>
            <div class="other-button clear">
              <a>免费注册</a>
              <a>忘记用户名</a>
              <a>忘记密码</a>
            </div>
          </div>
          <!-- 阿里妈妈会员登录 -->
          <div class="alimama-view">

          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div id="alimama-footer"
           data-spm="a214tr9"
           data-spm-max-idx="84">
        <div class="alimama-info">
          <div class="link">
            <a target="_black"
               href="//help.alimama.com/">联系客服</a>
            <b>|</b>
            <a target="_black"
               href="//open.taobao.com/">开放平台</a>
            <b>|</b>
            <a target="_black"
               href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>
            <b>|</b>
            <a target="_black"
               href="https://jubao.alibaba.com/index.html?site=ALIMAMA">廉正举报</a>
          </div>
          <div class="copyright">
            <span>阿里妈妈版权所有 2007-现在</span>
            <b>|</b>
            <a target="_black"
               href="http://beian.miit.gov.cn">增值电信业务经营许可证：浙B2-20070195</a>
            <a rel="noopener noreferrer"
               target="_blank"
               href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010002000075"><img src="//gw.alicdn.com/tfs/TB1jwakrbH1gK0jSZFwXXc7aXXa-20-20.png"
                   style="vertical-align: -2px;margin-right: 4px;">浙公网安备 33010002000075号</a>
          </div>
        </div>

        <div class="aligroup-info">
          <a target="_black"
             href="http://www.alibabagroup.com/cn/global/home">阿里巴巴集团</a>
          <b>|</b>
          <a target="_black"
             href="//www.taobao.com">淘宝网</a>
          <b>|</b>
          <a target="_black"
             href="//www.tmall.com">天猫</a>
          <b>|</b>
          <a target="_black"
             href="//ju.taobao.com">聚划算</a>
          <b>|</b>
          <a target="_black"
             href="//www.aliexpress.com">全球速卖通</a>
          <b>|</b>
          <a target="_black"
             href="//www.alibaba.com">阿里巴巴国际交易市场</a>
          <b>|</b>
          <a target="_black"
             href="//www.1688.com">1688</a>
          <b>|</b>
          <a target="_black"
             href="//www.alimama.com">阿里妈妈</a>
          <b>|</b>
          <a target="_black"
             href="//www.fliggy.com">飞猪</a>
          <b>|</b>
          <a target="_black"
             href="//www.aliyun.com">阿里云计算</a>
          <b>|</b>
          <a target="_black"
             href="http://www.alios.cn">AliOS</a>
          <b>|</b>
          <a target="_black"
             href="//aliqin.tmall.com">阿里通信</a>
          <b>|</b>
          <a target="_black"
             href="http://www.autonavi.com/">高德</a>
          <b>|</b>
          <a target="_black"
             href="http://www.uc.cn/">UC</a>
          <br>
          <a target="_black"
             href="//www.umeng.com/">友盟</a>
          <b>|</b>
          <a target="_black"
             href="//www.xiami.com">虾米</a>
          <b>|</b>
          <a target="_black"
             href="//www.dingtalk.com/?lwfrom=20150130163937547">钉钉</a>
          <b>|</b>
          <a target="_black"
             href="//www.alipay.com">支付宝</a>
          <b>|</b>
          <a target="_black"
             href="//damo.alibaba.com/">达摩院</a>
        </div>

        <div class="ualificate-info">
          <a target="_black"
             href="http://www.pingpinganan.gov.cn/">
            <img align="absmiddle"
                 src="//img.alicdn.com/tps/i2/T1C3z7FudfXXcsE9Te-40-42.png"
                 alt="网监局">
          </a>
          <a target="_black"
             href="http://idinfo.zjamr.zj.gov.cn/bscx.do?method=lzxx&amp;id=3301843301080000022791">
            <img align="absmiddle"
                 width="40"
                 src="//gw.alicdn.com/tfs/TB1HxCbreL2gK0jSZPhXXahvXXa-65-70.gif">
          </a>
          <a target="_black"
             href="http://www.pingpinganan.gov.cn/">
            <img align="absmiddle"
                 alt="网监局"
                 src="//img.alicdn.com/tps/i4/T1VVv9FABeXXbtCInf-38-42.png">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  components: {

  },
  data() {
    return {
      tabList: [
        {
          id: '1',
          name: '淘宝会员'
        },
        {
          id: '2',
          name: '阿里妈妈会员'
        }
      ],
      selectedTabId: '1'
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
.login {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
  .login-logo {
    margin-bottom: 10px;
    img {
      float: left;
      cursor: pointer;
    }
  }
  .login-container {
    position: relative;
    height: 460px;
    border-bottom: 1px solid #eaeaea;
    .box {
      position: absolute;
      right: 60px;
      top: 15px;
      width: 350px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      .login-tab {
        span {
          display: inline-block;
          width: 50%;
          color: #999;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          line-height: 36px;
          text-align: center;
          &.selected {
            font-size: 14px;
            color: #f40;
          }
        }
      }
      .login-view {
        width: 250px;
        margin: 0 auto;
        .taobao-view {
          padding: 10px 0 40px;
          h3 {
            color: #3c3c3c;
            font-size: 16px;
          }
          .form-div {
            height: 26px;
            margin-bottom: 20px;
            padding: 0 10px;
            border: 1px solid #ccc;
            label {
              float: left;
              width: 30px;
            }
            input {
              float: left;
              border: 0;
              height: 24px;
              outline: none;
            }
          }
          .login-button {
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            background: #f40;
            border-color: #f40;
            font-size: 16px;
            color: white;
            text-align: center;
          }
          .other-button {
            margin-top: 20px;
            a {
              float: right;
              cursor: pointer;
              margin-left: 10px;
              font-size: 12px;
              color: #6c6c6c;
            }
          }
        }
      }
    }
  }
  .footer {
    .index-nav-map-wrap {
      height: auto !important;
    }
    #alimama-footer {
      padding: 30px 10px;
      text-align: left;
      font-size: 12px;
      line-height: 2.4;
      font-family: "helvetica neue", tahoma, "hiragino sans gb", stheiti,
        "wenquanyi micro hei", \\5fae\\8f6f\\96c5\\9ed1, \\5b8b\\4f53,
        sans-serif;
    }
    #alimama-footer a,
    #alimama-footer span {
      color: #333;
      filter: alpha(opacity=50);
      filter: none\9;
      opacity: 0.5;
    }
    #alimama-footer a:hover {
      filter: alpha(opacity=100);
      filter: none\9;
      opacity: 1;
    }
    #alimama-footer .alimama-info .link,
    #alimama-footer .alimama-info .copyright {
      display: inline-block;
    }
    #alimama-footer .alimama-info a,
    #alimama-footer .alimama-info span {
      margin-right: 20px;
    }
    #alimama-footer .alimama-info b {
      display: none;
      font-weight: 400;
      color: #ddd;
    }
    #alimama-footer .aligroup-info b {
      margin: 0 8px;
      font-weight: 400;
      color: #ddd;
    }
    .ualificate-info {
      margin-top: 8px;
    }
    .ualificate-info a {
      margin-right: 20px;
    }
    .ualificate-info a img {
      border: none;
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
      filter: gray;
    }
    .ualificate-info a:hover img {
      -webkit-filter: grayscale(0%);
      -moz-filter: grayscale(0%);
      -ms-filter: grayscale(0%);
      -o-filter: grayscale(0%);
      filter: grayscale(0%);
      filter: none;
    }
    @media screen and (max-width: 767px) {
      #alimama-footer {
        padding: 30px 12px;
        line-height: 2;
      }
      .aligroup-info {
        display: none;
      }
      .ualificate-info {
        display: none;
      }
      #alimama-footer .alimama-info .link {
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }
      #alimama-footer .alimama-info .copyright {
        display: block;
      }
      #alimama-footer .alimama-info .copyright a,
      #alimama-footer .alimama-info .copyright span {
        display: block;
        text-align: center;
      }
      #alimama-footer .alimama-info .copyright b {
        display: none;
      }
      #alimama-footer .alimama-info a,
      #alimama-footer .alimama-info span {
        margin-right: 0;
      }
      #alimama-footer .alimama-info b {
        display: inline-block;
      }
    }
  }
}
.iconfont {
  font-size: 18px;
  line-height: 26px;
}
</style>